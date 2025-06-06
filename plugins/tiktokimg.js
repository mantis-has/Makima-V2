const handler = async (m, { conn, isAdult }) => {
  try {
    /*if (!isAdult) {
      return m.reply('❌ Este comando solo está disponible en chats NSFW o para usuarios autorizados.');
    }*/

    const res = await fetch('https://api.fgmods.xyz/api/nsfw-nime/pussy?apikey=fg_W2J7QedE');
    if (!res.ok) throw new Error(`Error al obtener imagen: ${res.status}`);

    const buffer = await res.buffer(); // Lee la imagen como buffer

    await conn.sendFile(m.chat, buffer, 'nsfw.jpg', '🔞 Aquí tienes', m);
  } catch (e) {
    console.error(e);
    await m.reply('❌ Error al obtener la imagen. Intenta de nuevo más tarde.');
  }
};

handler.help = ['pussy'];
handler.tags = ['nsfw'];
handler.command = ['pussy'];
handler.nsfw = true;

export default handler;