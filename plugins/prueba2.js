import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const images = [];

    // Hacer 10 peticiones a la API
    for (let i = 0; i < 10; i++) {
      const res = await fetch('https://anime-xi-wheat.vercel.app/api/anime');
      const json = await res.json();
      if (json.image) {
        images.push({
          image: { url: json.image },
          caption: `🎌 Imagen ${i + 1}`,
        });
      }
    }

    // Validar que se obtuvo al menos una imagen
    if (images.length === 0) {
      return await m.reply('No se pudieron obtener imágenes.');
    }

    // Enviar como álbum (mediaMessage con múltiples imágenes)
    await conn.sendMessage(m.chat, { image: images }, { quoted: m });
  } catch (error) {
    console.error(error);
    await conn.sendMessage(
      m.chat,
      { text: 'Lo siento, no se pudo enviar el álbum de imágenes.' },
      { quoted: m }
    );
  }
};

handler.command = ['an']; // .an
handler.help = ['an'];
handler.tags = ['anime'];

export default handler;