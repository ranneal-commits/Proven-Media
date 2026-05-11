import 'dotenv/config';
import fetch from 'node-fetch';

async function testLofty() {
  const apiKey = process.env.LOFTY_API_KEY;
  if (!apiKey) return;
  const url = `https://api.lofty.com/v1/user/account`; // user profile
  
  const headers = [
    { "Authorization": `Bearer ${apiKey}` },
    { "Authorization": `token ${apiKey}` },
    { "Authorization": apiKey }
  ];

  for (const h of headers) {
    try {
      const res = await fetch("https://api.lofty.com/v1/users/me", { headers: h });
      console.log(`Trying ${JSON.stringify(h)} against /users/me -> ${res.status}`);
      if (res.status === 200) {
          console.log(await res.text());
      }
    } catch(e) {}
  }

  for (const h of headers) {
    try {
      const res = await fetch("https://api.lofty.com/v1/leads?page=1", { headers: h });
      console.log(`Trying ${JSON.stringify(h)} against /leads?page=1 -> ${res.status}`);
      if (res.status === 200) {
          console.log(await res.text().then(t=>t.substring(0,200)));
      }
    } catch(e) {}
  }
}

testLofty();
