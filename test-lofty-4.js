import 'dotenv/config';
import fetch from 'node-fetch';

async function testLofty() {
  const apiKey = process.env.LOFTY_API_KEY;
  if (!apiKey) return;
  const url = `https://api.lofty.com/v1/leads`;
  
  const headers = [
    { "Authorization": `token ${apiKey}` },
    { "Authorization": `token [${apiKey}]` }
  ];

  for (const h of headers) {
    try {
      const res = await fetch("https://api.lofty.com/v1/user/me", { headers: h });
      console.log(`Trying ${JSON.stringify(h)} against /user/me -> ${res.status}`);
      if (res.status === 200) {
          console.log(await res.text());
      }
    } catch(e) {}
  }
}

testLofty();
