import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    // Llamada a la API para obtener la imagen
    const response = await fetch('https://anime-xi-wheat.vercel.app/api/anime');
    const data = await response.json();

    if (!data || !data.url) {
      throw new Error('No se recibió una URL válida de la API');
    }

    
    await conn.sendMessage(
      m.chat,
      { image: { url: data.url }, caption: 'Aquí tienes una imagen anime' },
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
handler.tags = ['an'];

export default handler;