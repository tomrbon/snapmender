# SnapMender

AI Photo Restoration — Two Photos. One Perfect Restoration.

## Development

```bash
npm install
npm run serve
```

## Build

```bash
npm run build
```

Output goes to `_site/`.

## Deployment

Connected to Cloudflare Pages. Push to main branch to deploy.

## The Concept

Upload a damaged photo + a reference photo of the person. Our AI restores the damaged photo using the reference to get the face exactly right.

Unlike other photo restorers that guess facial features, SnapMender uses your reference photo to ensure accurate, natural results.

## Tech Stack

- **Static Site Generator:** 11ty (Eleventy)
- **Hosting:** Cloudflare Pages
- **Styling:** Vanilla CSS (dark theme)