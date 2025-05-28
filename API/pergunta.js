// api/pergunta.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { pergunta } = req.body;

    // Aqui você pode colocar sua lógica para responder a pergunta,
    // por enquanto vamos só devolver a mesma pergunta de volta:
    const resposta = `Você perguntou: ${pergunta}`;

    res.status(200).json({ resposta });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
