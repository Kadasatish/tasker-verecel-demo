export default function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body;
    console.log("Received:", amount);
    res.status(200).json({ message: `Received ₹${amount}` });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
