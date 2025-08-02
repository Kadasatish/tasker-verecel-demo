export default function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ error: 'Amount not provided' });
    }

    return res.status(200).json({ message: `Received ₹${amount}` });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
