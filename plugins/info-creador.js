let handler = async (m, { conn, command, usedPrefix }) => {
let creadorID = '18293142989@s.whatsapp.net'
let isInGroup = m.isGroup && (await conn.groupMetadata(m.chat)).participants.some(p => p.id === creadorID)

let numeroTexto = isInGroup ? `@${creadorID.split('@')[0]}` : `+1 829 314 2989`

let creador = `🩵 *C R E A D O R🩵*

Nombre: Félix Manuel 
Club: Deymoon Club 
Info: Makima 2.0 Bot, es un bot con muchos comandos.`

await conn.sendMessage(m.chat, {
  text: creador.trim(),
  contextInfo: {
    forwardingScore: 200,
    isForwarded: false,
    mentionedJid: isInGroup ? [creadorID] : [],
    externalAdReply: {
      showAdAttribution: true,
      renderLargerThumbnail: true,
      title: `DEYMOON CLUB OFC`,
      body: packname,
      mediaType: 1,
      sourceUrl: redes,
      thumbnailUrl: imagen1
    }
  }
}, {
  quoted: fkontak
})

}
handler.help = ['creador']
handler.command = ['creador', 'creator', 'owner', 'propietario', 'dueño']
handler.register = true
handler.tags = ['main']

export default handler
