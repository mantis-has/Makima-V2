const handler = async (m, { conn, isPremium, isAdult }) => {
  try {
    // Verifica si el contenido NSFW está permitido
    if (!isAdult && !isPremium) {
      return m.reply('❌ Este comando es solo para usuarios premium o en chats habilitados para NSFW.');
    }

    const res = await fetch('https://api.fgmods.xyz/api/nsfw-nime/pussy?apikey=fg_W2J7QedE');
    if (!res.ok) throw new Error(`Error al conectar con la API: ${res.status}`);

    const json = await res.json();
    if (!json.result || typeof json.result !== 'string') {
      throw new Error('La API no devolvió una imagen válida.');
    }

    await conn.sendFile(m.chat, json.result, 'nsfw.jpg', '🔞 Aquí tienes', m);
  } catch (e) {
    console.error(e);
    await m.reply('❌ Error al obtener la imagen NSFW. Intenta más tarde.');
  }
};

handler.help = ['pussy'];
handler.tags = ['nsfw'];
handler.command = ['pussy'];


export default handler;