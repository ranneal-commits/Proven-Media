import fetch from 'node-fetch';

async function fetchInfo() {
  const url = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEpvkHQ426zSz3Stu1q3vIj0iFR-L2-JjqfaONmL30hksE9kY2codagPaJpLZe8nCD3Zqa4-oAyuKY_cLEwtyjPk8B5vWT1WcEQLiUN8PvQ3w==';
  const res = await fetch(url);
  const text = await res.text();
  
  const textWithoutTags = text.replace(/<[^>]+>/g, ' ');
  const lines = textWithoutTags.split('\n').filter(line => line.trim().length > 10);
  
  for (let i = 0; i < lines.length && i < 1500; i++) {
        if(lines[i].includes("Authentication") || lines[i].includes("401") || lines[i].includes("token") || lines[i].includes("tier"))
        console.log(lines[i].trim().substring(0, 100));
  }
}

fetchInfo();
