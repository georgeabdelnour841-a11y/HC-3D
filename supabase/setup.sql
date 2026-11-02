-- Run once in Supabase → SQL Editor → New query → Run.
-- Viewing is public; only signed-in (invited) users can upload, and each user
-- can edit or delete only their own models.

create table if not exists public.models (
  id          uuid primary key default gen_random_uuid(),
  title       text not null check (char_length(title) between 1 and 120),
  description text not null default '',
  tags        text[] not null default '{}',
  glb_path    text not null,
  usdz_path   text,
  poster_path text,
  width_m     real,
  height_m    real,
  depth_m     real,
  owner       uuid not null default auth.uid() references auth.users (id) on delete cascade,
  created_at  timestamptz not null default now()
);

alter table public.models enable row level security;

drop policy if exists "models are public" on public.models;
create policy "models are public" on public.models
  for select to anon, authenticated using (true);

drop policy if exists "users add own models" on public.models;
create policy "users add own models" on public.models
  for insert to authenticated with check (owner = auth.uid());

drop policy if exists "users edit own models" on public.models;
create policy "users edit own models" on public.models
  for update to authenticated using (owner = auth.uid()) with check (owner = auth.uid());

drop policy if exists "users delete own models" on public.models;
create policy "users delete own models" on public.models
  for delete to authenticated using (owner = auth.uid());

-- Storage bucket: public read, 50 MB per file (the Supabase free-plan maximum).
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('models', 'models', true, 52428800,
        array['model/gltf-binary', 'model/vnd.usdz+zip', 'image/webp', 'image/png', 'image/jpeg'])
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- Files live under "<user id>/…"; a user can only write inside their own folder.
drop policy if exists "upload to own folder" on storage.objects;
create policy "upload to own folder" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'models' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "read own folder" on storage.objects;
create policy "read own folder" on storage.objects
  for select to authenticated
  using (bucket_id = 'models' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "delete own files" on storage.objects;
create policy "delete own files" on storage.objects
  for delete to authenticated
  using (bucket_id = 'models' and (storage.foldername(name))[1] = auth.uid()::text);
