import 'dotenv/config';
import fetch from 'node-fetch';

async function testLofty() {
  const apiKey = process.env.LOFTY_API_KEY;
  if (!apiKey) return;

  const headersToTest = [
     { "X-API-KEY": apiKey },
     { "Api-Key": apiKey },
     { "apikey": apiKey },
     { "Authorization": `token ${apiKey}` },
     { "Authorization": `Bearer ${apiKey}` },
     { "Authorization": `JWT ${apiKey}` }
  ];

  for (const h of headersToTest) {
    try {
      const res = await fetch("https://api.lofty.com/v1/leads?page=1", { headers: h });
      if (res.status === 200 || res.status === 400 || res.status === 403) {
          console.log(`Bingo! Header ${JSON.stringify(h).substring(0, 30)} works: ${res.status}`);
          return;
      }
    } catch(e) {}
  }
  console.log("None of the headers worked.");
}

testLofty();
