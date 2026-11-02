// Shared helpers: catalog loading (Supabase, or static models.json until configured), auth, icons, share/toast.
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

export const BUCKET = 'models';
export const hasBackend = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

let clientPromise;
export function getClient() {
  if (!hasBackend) return Promise.resolve(null);
  clientPromise ??= import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm')
    .then(({ createClient }) => createClient(SUPABASE_URL, SUPABASE_ANON_KEY));
  return clientPromise;
}

export async function getUser() {
  const sb = await getClient();
  if (!sb) return null;
  const { data } = await sb.auth.getSession();
  return data.session?.user ?? null;
}

function publicUrl(sb, path) {
  return path ? sb.storage.from(BUCKET).getPublicUrl(path).data.publicUrl : '';
}

// Turns a database row into the shape the pages use.
export function fromRow(sb, r) {
  return {
    id: r.id, title: r.title, description: r.description, tags: r.tags || [],
    src: publicUrl(sb, r.glb_path), usdz: publicUrl(sb, r.usdz_path), poster: publicUrl(sb, r.poster_path),
    owner: r.owner, row: r,
  };
}

async function loadStatic() {
  const res = await fetch('models/models.json', { cache: 'no-cache' });
  if (!res.ok) throw new Error('models.json ' + res.status);
  const data = await res.json();
  return Array.isArray(data) ? data : (data.models || []);
}

export async function loadCatalog() {
  const sb = await getClient();
  if (!sb) return loadStatic();
  const { data, error } = await sb.from('models').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data.map((r) => fromRow(sb, r));
}

export async function findModel(id) {
  const sb = await getClient();
  if (!sb) return (await loadStatic()).find((m) => m.id === id) || null;
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  const { data, error } = await sb.from('models').select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  return data ? fromRow(sb, data) : null;
}

// Header link: "رفع نموذج" when signed in, "تسجيل الدخول" otherwise. Hidden until a backend is configured.
export async function mountAuthLink(el) {
  if (!el || !hasBackend) return;
  const user = await getUser();
  el.href = user ? 'upload.html' : 'login.html';
  el.innerHTML = user ? icons.upload + 'رفع نموذج' : 'تسجيل الدخول';
  el.hidden = false;
}

export function param(name) {
  return new URLSearchParams(location.search).get(name);
}

// Absolute URL of a page/file, relative to the site folder (works on GitHub Pages sub-paths).
export function siteUrl(path) {
  return new URL(path, location.href).href;
}

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export const icons = {
  ar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/></svg>',
  vr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-4l-2-3h-2l-2 3H5a2 2 0 0 1-2-2z"/><circle cx="8" cy="11" r="1.5"/><circle cx="16" cy="11" r="1.5"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>',
  back: '<svg class="icon-dir" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
};

export function toast(msg) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.append(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2200);
}

export async function shareLink(title, url) {
  if (navigator.share) {
    try { await navigator.share({ title, url }); return; } catch (e) { if (e.name === 'AbortError') return; }
  }
  try {
    await navigator.clipboard.writeText(url);
    toast('تم نسخ الرابط');
  } catch {
    prompt('انسخ الرابط:', url);
  }
}
