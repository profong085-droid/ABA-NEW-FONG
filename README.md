# ABA Mobile Banking App

This is a Next.js 15 application designed for mobile banking with a focus on mobile-first responsive design. The app features a modern UI with Cambodian language support and is configured for static export deployment.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This application is configured for static export deployment. To deploy to Vercel:

1. Push your code to GitHub
2. Import the repository to Vercel
3. Vercel will automatically detect the Next.js project and build it as a static site

The static export configuration in `next.config.ts` with `output: "export"` tells Next.js to generate static HTML files that can be deployed to any static hosting service, including Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.