import 'dotenv/config';
import fetch from 'node-fetch';

async function testPost() {
  const apiKey = process.env.LOFTY_API_KEY;
  if (!apiKey) return;
  const url = `https://api.lofty.com/v1.0/leads`;
  
  const bodyObj = {
    firstName: "Test",
    lastName: "Lead",
    emails: ["testlead1234@example.com"],
    phones: ["9999999998"],
    note: "Business: Test, Service: Test, Budget: Test, Timeline: Test"
  };
  
  try {
      const res = await fetch(url, { 
          method: 'POST',
          headers: { 
              "Authorization": `token ${apiKey}`,
              "Content-Type": "application/json"
          },
          body: JSON.stringify(bodyObj)
      });
      console.log(`Trying POST (array) against /leads -> ${res.status}`);
      console.log(await res.text());
  } catch(e) {}
}
testPost();
