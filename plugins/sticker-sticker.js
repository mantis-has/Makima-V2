import { sticker } from '../lib/sticker.js'
// import uploadFile from '../lib/uploadFile.js'
// import uploadImage from '../lib/uploadImage.js'
// import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  let option = args[0] || ''

  // Detectar opciones desde el comando directo
  switch (command) {
    case 's-c': option = '-c'; break
    case 's-p': option = '-p'; break
    case 's-x': option = '-x'; break
  }

  try {
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime) && (q.msg || q).seconds > 8)
        return m.reply(`${emoji} *¡El video no puede durar más de 8 segundos!*`)

      let img = await q.download?.()
      if (!img)
        return conn.reply(m.chat, `${emoji} *_La conversión ha fallado. Intenta responder a una imagen/video/gif con el comando._*`, m, rcanal)

      let out
      try {
        stiker = await sticker(img, false, global.packsticker, global.author, option)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out, global.packsticker, global.author, option)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) {
        stiker = await sticker(false, args[0], global.packsticker, global.author, option)
      } else {
        return m.reply(`${emoji} El URL es incorrecto`)
      }
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    if (stiker) {
      conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, {
        contextInfo: {
          forwardingScore: 200,
          isForwarded: false,
          externalAdReply: {
            showAdAttribution: false,
            title: packname,
            body: `⏤͟͞𝐊𝐢𝐫𝐢𝐭𝐨 𝐁𝐨𝐭 𝐌𝐃✰⃔`,
            mediaType: 2,
            sourceUrl: redes,
            thumbnail: icons
          }
        }
      }, { quoted: m })
    } else {
      return conn.reply(m.chat, `${emoji} *_La conversión ha fallado. Intenta responder a una imagen/video/gif con el comando._*`, m, rcanal)
    }
  }
}

handler.help = [
  's', 
  's -c / s-c (sticker circular)', 
  's -p / s-p (sticker pequeño)', 
  's -x / s-x (sticker con efecto)',
  'sticker <url>'
]
handler.tags = ['sticker']
handler.group = false
handler.register = true
handler.command = ['s', 'sticker', 'stiker', 's-c', 's-p', 's-x']

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}