import 'dotenv/config';
import fetch from 'node-fetch';

async function testPost() {
  const apiKey = process.env.LOFTY_API_KEY;
  if (!apiKey) return;
  const url = `https://api.lofty.com/v1.0/leads`;
  
  // Try sending a single object first
  const bodyObj = {
    firstName: "Test",
    lastName: "Lead",
    emails: ["testlead123@example.com"],
    phones: ["9999999999"]
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
