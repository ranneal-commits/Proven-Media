import 'dotenv/config';
console.log("Key:", process.env.LOFTY_API_KEY ? process.env.LOFTY_API_KEY.substring(0, 10) + "..." : "none");
