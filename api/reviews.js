export default async function handler(req, res) {
  const placeId = "ChIJP7Mmxcc1t2oRQMaOYlQ2AwQ";
  const apiKey = process.env.GOOGLE_API_KEY;

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,reviews&key=${apiKey}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
