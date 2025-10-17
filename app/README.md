## air.inc — Creative Asset Cloud

air.inc is a marketing asset workspace inspired by Air.inc — the Google Drive replacement built for creative teams shipping static and video ads at scale. This single-page experience highlights how modern brands ingest creative, collaborate on reviews, and distribute approved assets from one hub.

### Stack

- Next.js App Router (React 19) with TypeScript
- Tailwind CSS v4 for design tokens and utility-first styling
- Lightweight canvas sparkle animation for subtle hero motion

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the experience. The production bundle is generated with `npm run build`.

### Deployment

The app is production-ready on Vercel and configured for remote images hosted on Unsplash. Deployments use `vercel deploy --prod`.
