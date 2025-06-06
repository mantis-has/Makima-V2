import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const response = await fetch('https://anime-xi-wheat.vercel.app/api/anime');
    const data = await response.json();

    if (!data || !data.image) {
      throw new Error('No se recibió una URL válida de la API');
    }

    await conn.sendMessage(
      m.chat,
      { image: { url: data.image }, caption: 'Aquí tienes una imagen anime' },
      { quoted: m }
    );
  } catch (error) {
    await conn.sendMessage(
      m.chat,
      { text: 'Lo siento, no pude obtener la imagen en este momento.' },
      { quoted: m }
    );
  }
};

handler.command = ['an'];
handler.help = [''];
handler.tags = ['anime'];

export default handler;