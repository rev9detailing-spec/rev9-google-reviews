export default async function handler(req, res) {
  res.status(200).json({
    keyExists: !!process.env.GOOGLE_API_KEY
  });
}
