import { areJidsSameUser } from '@whiskeysockets/baileys'
export async function before(m, { participants, conn }) {
    if (m.isGroup) {
        let chat = global.db.data.chats[m.chat];

         if (!chat.antiBot2) {
            return
        }


        let botJid = global.conn.user.jid // JID del bot principal

       if (botJid === conn.user.jid) {
           return
        } else {
           let isBotPresent = participants.some(p => areJidsSameUser(botJid, p.id))

          if (isBotPresent) {
                setTimeout(async () => {
                    await conn.reply(m.chat, `「SOY PREM-BOT」\n\n• Devido a eso, saldre de este grupo porque aqui está el bot Oficial.`, m, rcanal);
                    await this.groupLeave(m.chat)
                }, 5000)// 5 segundos
            }
        }
    }
}
