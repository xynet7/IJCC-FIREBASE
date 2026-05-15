const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/All_Nippon_Airways_Logo.svg/1024px-All_Nippon_Airways_Logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seal_of_Uttar_Pradesh.svg/512px-Seal_of_Uttar_Pradesh.svg.png',
  'https://www.harkeshrubber.com/assets/images/logo.png',
  'https://veenapower.com/wp-content/uploads/2021/04/logo-top2.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/512px-Emblem_of_India.svg.png'
];

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' } });
      console.log(res.ok ? 'OK: ' + url : 'FAILED: ' + url + ' ' + res.status);
    } catch(e) {
      console.log('ERROR: ' + url + ' ' + e.message);
    }
  }
}
check();
