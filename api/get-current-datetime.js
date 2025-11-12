export default function handler(req, res) {
  const now = new Date();
  const currentDate = now.toLocaleDateString("nl-NL", { timeZone: "Europe/Amsterdam" });
  const currentTime = now.toLocaleTimeString("nl-NL", { timeZone: "Europe/Amsterdam" });

  res.status(200).json({
    currentDate,
    currentTime
  });
}
