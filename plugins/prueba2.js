import axios from 'axios';
import baileys from '@whiskeysockets/baileys';

// Se asume que ya tienes la función sendAlbumMessage definida como en tu ejemplo anterior

const handler = async (m, { conn }) => {
  try {
    m.react?.('🎌');

    const medias = [];

    for (let i = 0; i < 10; i++) {
      const res = await axios.get('https://anime-xi-wheat.vercel.app/api/anime');
      const imageUrl = res.data?.image;

      if (imageUrl) {
        medias.push({
          type: 'image',
          data: { url: imageUrl }
        });
      }
    }

    if (medias.length < 2) {
      return m.reply('No se obtuvieron suficientes imágenes para el álbum.');
    }

    await sendAlbumMessage(m.chat, medias, {
      caption: '✨ Álbum de imágenes anime',
      quoted: m
    });

    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (error) {
    console.error(error);
    await conn.sendMessage(m.chat, { text: '❌ Error al enviar el álbum de anime.', quoted: m });
  }
};

handler.command = ['an'];
handler.help = ['an'];
handler.tags = ['anime'];

export default handler;