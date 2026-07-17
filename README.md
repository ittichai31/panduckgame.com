# Panduckgame.com

Static-first Panduck Studio website with the first quiz route:

- Home: `/`
- Cat quiz: `/quiz/adoptcat/`

Version one does not need Supabase or any paid service. It can deploy on Vercel Free or Cloudflare Pages as plain static files.

## Recommended Free Deployment

Use Vercel for the first launch:

1. Create a Vercel project from this folder or a Git repo containing this folder.
2. Framework preset: Other.
3. Build command: leave empty.
4. Output directory: `.`.
5. Add `panduckgame.com` and `www.panduckgame.com` as domains.
6. In Cloudflare DNS, add the records Vercel asks for.

For a Cloudflare-managed domain, DNS usually stays in Cloudflare. Add the Vercel records inside Cloudflare rather than moving nameservers.
