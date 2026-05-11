import 'dotenv/config';
if (process.env.LOFTY_API_KEY) {
   const parts = process.env.LOFTY_API_KEY.split('.');
   if (parts.length > 1) {
       console.log("Header:", Buffer.from(parts[0], 'base64').toString('ascii'));
       console.log("Payload:", Buffer.from(parts[1], 'base64').toString('ascii'));
   }
}
