const urls = [
  'https://www.aima.in/img/logo.png',
  'https://www.aranca.com/assets/images/icons/aranca-logo-0203.png',
  'https://www.ajujapanesehotels.com/images/logo.png',
  'https://veenapower.com/wp-content/uploads/2021/04/log-top2.jpg',
  'https://i.postimg.cc/mr4wdjkb/ammida.jpg',
  'https://pbs.twimg.com/profile_images/1138406890595971073/o01XWG4J_400x400.png',
  'https://www.jica.go.jp/english/assets/img/logo-en.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/All_Nippon_Airways_Logo.svg/2560px-All_Nippon_Airways_Logo.svg.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYuDws_3GHEcMoqAZ6w9ufbUWnwZcoKyTKg&s',
  'https://www.indembassy-tokyo.gov.in/public_files/assets/images/common_images/logo_english_2021.png',
  'https://www.indconosaka.gov.in/adminpart/logo_image/large/74404LogoHC.jpg',
  'https://i.postimg.cc/j2qYy3HN/haryana-govt11.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Seal_of_Uttar_Pradesh.svg/1024px-Seal_of_Uttar_Pradesh.svg.png',
  'https://jccii.in/wp-content/uploads/2020/02/logo.png',
  'https://www.osaka.cci.or.jp/e/common/img/logo_sitename.png',
  'https://abhimanuias.com/userfiles/image/North-Eastern-Council.jpg',
  'https://nd.jpf.go.jp/wp-content/uploads/2022/07/JFND_logo_bgtransparent-1.png',
  'https://timestech.in/wp-content/uploads/2025/08/Untitled-design-2025-08-04T153554.381.jpg',
  'https://www.seaj.or.jp/images/logo.png',
  'https://enpointeadwisers.com/wp-content/uploads/2024/02/EPA-Logo-Black.png',
  'https://www.blsinternational.com/assets/images/bls-logo.png',
  'https://www.harkesh.com/wp-content/uploads/2020/09/logo.png',
  'https://sumankhaitanco.in/wp-content/uploads/2020/01/toplogo.png',
  'https://i0.wp.com/bhorukaextrusions.com/wp-content/uploads/2023/03/215x68_logo.png?fit=215%2C68&ssl=1',
  'https://images.ctfassets.net/y2mincmqvg0k/5mgIg4WYjVs3S4EbjYcMqy/e46f1cce42fc0813566f4f7c96a53ce3/header-logo-digitup-solutions-pvt-ltd.svg',
  'https://i.ibb.co/HLQxTMWQ/kamal-coach.png',
  'https://i.ibb.co/pBQNz0JN/storytelling.png',
  'https://i.ibb.co/rG4XYfBV/excactitude.png',
  'https://i.ibb.co/mF8xLc2s/unitherm-logo.png'
];

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) {
        console.log('FAILED: ', url, res.status);
      }
    } catch(e) {
      console.log('ERROR: ', url, e.message);
    }
  }
}
check();
