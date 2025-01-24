import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';

const sitemap = new SitemapStream({ hostname: 'http://yourdomain.com' });

// Define the routes (replace with your actual routes)
const pages = [
  { url: '/', changefreq: 'monthly', priority: 0.7 },
  { url: '/privacy', changefreq: 'monthly', priority: 0.7 },
  { url: '/cookie', changefreq: 'monthly', priority: 0.7 },
  { url: '/terms', changefreq: 'monthly', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/support', changefreq: 'monthly', priority: 0.7 },
  { url: '/singlePage', changefreq: 'monthly', priority: 0.7 },
  { url: '/login', changefreq: 'monthly', priority: 0.7 },
  { url: '/register', changefreq: 'monthly', priority: 0.7 },
];

// Write the sitemap
pages.forEach(page => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap).then(sm => {
  fs.writeFileSync(path.resolve('public/sitemap.xml'), sm.toString());
  console.log('Sitemap generated and saved as sitemap.xml in the public folder');
});
