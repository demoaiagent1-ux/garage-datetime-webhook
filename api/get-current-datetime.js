export default function handler(req, res) {
  // Preflight OPTIONS
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    return res.status(200).end();
  }

  const now = new Date();
  const currentDate = now.toLocaleDateString("nl-NL", { timeZone: "Europe/Amsterdam" });
  const currentTime = now.toLocaleTimeString("nl-NL", { timeZone: "Europe/Amsterdam" });

  // CORS header
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Zorg dat Content-Type expliciet JSON is
  res.setHeader('Content-Type', 'application/json');

  res.status(200).send(JSON.stringify({
    currentDate,
    currentTime
  }));
}
