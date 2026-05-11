import 'dotenv/config';
import fetch from 'node-fetch';

async function testLofty() {
  const apiKey = process.env.LOFTY_API_KEY;
  if (!apiKey) return;
  const url = `https://api.lofty.com/v1/leads`;
  
  const b64 = Buffer.from(`${apiKey}:`).toString('base64');
  const attempts = [
    { "Authorization": `Basic ${b64}` },
    { "Authorization": `JWT ${apiKey}` },
    { "Authorization": `ApiKey ${apiKey}` }
  ];

  for (const headers of attempts) {
    try {
      const res = await fetch(url, { headers });
      console.log(`Trying ${headers.Authorization.substring(0, 20)}... -> ${res.status}`);
      if (res.status === 200 || res.status === 400 || res.status !== 401) {
        console.log(`Response:`, await res.text().catch(()=>''));
      }
    } catch(e) {}
  }
}

testLofty();
