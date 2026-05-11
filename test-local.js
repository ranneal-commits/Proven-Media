import fetch from 'node-fetch';

async function testLocal() {
    const res = await fetch("http://localhost:3000/api/lofty/leads");
    const text = await res.text();
    console.log("Response len:", text.length, "starts with:", text.substring(0, 150));
}
testLocal();
