export default function handler(req, res) {
  const now = new Date();
  const currentDate = now.toLocaleDateString("nl-NL", { timeZone: "Europe/Amsterdam" });
  const currentTime = now.toLocaleTimeString("nl-NL", { timeZone: "Europe/Amsterdam" });

  // Voeg CORS header toe zodat VAPI verbinding kan maken
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.status(200).json({
    currentDate,
    currentTime
  });
}
