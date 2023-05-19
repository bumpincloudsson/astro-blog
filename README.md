# Astro Blog Tutorial

Pick up: https://docs.astro.build/en/tutorial/4-layouts/2/

## Production

```bash
# produce the production version of your code
npm run build
# visit the production version not the development version in the browser
npm run preview
```

Make sure you specify the `dist` directory when deploying it. **NEVER MIND**: netlify automatically uses the build command and only serves the files in `dist`

When reiterating on your astro project, CTRL + C to stop the production server and switch back to dev with `npm run dev`

When finished, use the build command and push it to the repo so Netlify can update with changes.

As of Unit 5 in the tutorial, the blog is basically finished.

## Astro Islands

This is unit 6 of the tutorial. There is no need to use a UI library or framework if your website is mostly static content. If you require some level of interaction for the user, then use this feature.

Will use Preact to add an interactive greeting component to our blog.
