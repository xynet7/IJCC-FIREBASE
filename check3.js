const https = require('https');
https.get('https://www.harkesh.com', (res) => {
  let d = '';
  res.on('data', chunk => d += chunk);
  res.on('end', () => {
    const imgs = [...d.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
    console.log(imgs);
  });
});
