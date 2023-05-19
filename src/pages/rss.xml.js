import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://graceful-speculoos-f7b53f.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}

/* 
Replace the site property with your site’s own unique Netlify URL. Customize the title and 
description properties, and if necessary, specify a different language in customData:
*/
