import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const images = [];

    // Recolectar 10 URLs de imágenes
    for (let i = 0; i < 10; i++) {
      const res = await fetch('https://anime-xi-wheat.vercel.app/api/anime');
      const json = await res.json();
      if (json.image) {
        images.push(json.image);
      }
    }

    if (images.length === 0) {
      return await m.reply('No se pudieron obtener imágenes.');
    }

    // Enviar imágenes una por una
    for (let i = 0; i < images.length; i++) {
      await conn.sendMessage(
        m.chat,
        {
          image: { url: images[i] },
          caption: `📸 Imagen ${i + 1} de 10`,
        },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error(error);
    await conn.sendMessage(
      m.chat,
      { text: 'Lo siento, no se pudo obtener ni enviar las imágenes.' },
      { quoted: m }
    );
  }
};

handler.command = ['an'];
handler.help = ['an'];
handler.tags = ['anime'];

export default handler;