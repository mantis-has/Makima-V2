const handler = async (m, { conn }) => {
  try {
    m.react?.('🎌');

    const medias = [];

    for (let i = 0; i < 1; i++) {
      const res = await axios.get('https://anime-xi-wheat.vercel.app/api/anime');
      const imageUrl = res.data?.image;

      if (imageUrl) {
        medias.push({
          type: 'image',
          data: { url: imageUrl }
        });
      }
    }

    

handler.command = ['an'];
handler.help = ['an'];
handler.tags = ['anime'];

export default handler;