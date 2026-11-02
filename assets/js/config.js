// Supabase project settings (Project Settings → API).
// The anon/publishable key is meant to be public: access is enforced by the
// row-level security policies in supabase/setup.sql. Never put the service_role key here.
// While these are empty the site falls back to the static models/models.json catalog.
export const SUPABASE_URL = 'https://bnswfmtdxoosuxmxbtqn.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_Q-eqGVdJYnVUtuG9tU_u0w_FtdwW2uS';

// Model shown at the top of the home page for every visitor: the "m=" id from its view.html link.
// Leave empty to feature the most recently uploaded model.
export const FEATURED_MODEL_ID = 'e4f93149-c3a9-4389-a24e-28c20c57ad91';
