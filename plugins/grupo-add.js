let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `《✧》  Debes ingresar el número de la persona que deseas añadir al grupo.`, m);
    if (text.includes('+')) return conn.reply(m.chat, `《✧》  Ingresa el número todo junto sin el *+*`, m);
    if (isNaN(text)) return conn.reply(m.chat, `《✧》 Ingresa sólo números sin su código de país y sin espacios.`, m);
    if (!m.isGroup) return m.reply(`《✧》 Esta función solo puede ser usada en grupos.`);

    let group = m.chat;
    let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
    let jid = text.trim() + '@s.whatsapp.net';

    try {
        // Enviar la invitación con vista previa de enlace activada
        await conn.reply(jid, `${emoji} *INVITACIÓN AL GRUPO*\n\n🩵 Un usuario te invitó a unirte a este grupo \n\n${link}`, m, {
            mentions: [m.sender],
            linkPreview: true // Activar vista previa del enlace
        });

        m.reply(`${emoji} Se envió un enlace de invitación al usuario.`);
    } catch (e) {
        m.reply(`${emoji2} Error al enviar la invitación. Es posible que el número no sea válido o que no haya interactuado con el bot.`);
        console.error(e);
    }
};

handler.help = ['invite *<521>*'];
handler.tags = ['group'];
handler.command = ['invitar', 'agregar', 'añadir'];
handler.group = true;
handler.admin = false;
handler.botAdmin = true;

export default handler;
