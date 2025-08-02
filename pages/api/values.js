let stored = "";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { value } = req.body;
    if (value === "₹10") {
      stored = value;
      return res.status(200).json({ status: "ok", stored });
    }
    return res.status(400).json({ status: "ignored" });
  }

  if (req.method === "GET") {
    return res.status(200).json({ stored });
  }

  res.status(405).end();
}
