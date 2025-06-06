import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) {
        if ((q.msg || q).seconds > 10) return m.reply(`${emoji} El vídeo debe durar menos de *10 segundos*`, m, rcanal)
      }

      let img = await q.download?.()
      if (!img) return conn.reply(m.chat, `${emoji} Por favor, envía un vídeo o imagen para crear el sticker.`, m, rcanal)

      let out
      try {
        stiker = await sticker(img, false, global.authsticker, global.packsticker)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packsticker, global.authsticker)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) {
        stiker = await sticker(false, args[0], global.packsticker, global.authsticker)
      } else {
        return m.reply(`${emoji} El URL es incorrecto`, m, rcanal)
      }
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) {
      return conn.sendFile(m.chat, stiker, 'sticker.webp', '', rcanal, true, {
        contextInfo: {
          forwardingScore: 200,
          isForwarded: false,
          externalAdReply: {
            showAdAttribution: false,
            title: '𝑪𝒓𝒆𝒂𝒅𝒐 𝒑𝒐𝒓 𝑲𝒊𝒓𝒊𝒕𝒐 𝑩𝒐𝒕 𝑴𝑫',
            body: `𝑲𝒊𝒓𝒊𝒕𝒐 𝑩𝒐𝒕 𝑴𝑫 ${emoji}`,
            mediaType: 2,
            sourceUrl: grupo,
            thumbnail: icons
          }
        }
      })
    } else {
      return conn.reply(m.chat, `${emoji} 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣/𝙫𝙞́𝙙𝙚𝙤/𝙜𝙞𝙛 𝙥𝙖𝙧𝙖 𝙘𝙧𝙚𝙖𝙧 𝙩𝙪 𝙨𝙩𝙞𝙘𝙠𝙚𝙧.`, m, rcanal)
    }
  }
}

handler.help = ['stiker <img>', 'sticker <url>']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker']
handler.estrellas = 3

export default handler

// Función para validar si el texto es una URL válida de imagen
const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}