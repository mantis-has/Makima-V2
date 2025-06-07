import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*


global.botNumberCode = '' 
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
  ['18293142989', 'jid', '✰ 𝐂ʀᴇᴀᴅᴏʀ ✰', true],
  ['194257646288953', 'lid', 'Deymoom OfC', true],
  ['18293142989', 'https', true],
  ['59169739411'],
  ['18293142989', 'Deymoom', true],
  ['18293142989', 'Félix mexico', true],
  ['18293142989', 'Deymoom club', true],
  ['18293142989', 'jid', '@sisked', true],
  ['256237983817905', 'lid', 'sisked', true],
  ['18293142989', 'Tosh Team', true],
];
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = ['18293142989']
global.suittag = ['18293142989'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = '@whiskeysockets/baileys' 
global.languaje = 'Español'
global.vs = '2.2.0'
global.vsJB = '5.0'
global.nameqr = '𝐌a͜͡𝙺ɪ𝗆ᴀ 2.0 𝐁o͜͡𝚃'
global.namebot = '𝐌aᴋɪm͜͡𝘢 𝔹𝐨𝐭'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.kiritoJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '𝐌a͜͡𝙺ɪ𝗆ᴀ 2.0 𝐁o͜͡𝚃'
global.botname = '𝐌aᴋɪm͜͡𝘢 𝔹𝐨𝐭'
global.wm = 'MAkima-Bot-V2'
global.author = 'Made with Deymoon Club'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ Féᥣі᥊ Mᥲᥒᥙᥱᥣ'
global.textbot = 'Makima - 2.0 • Deymoon Club'
global.etiqueta = 'Féᥣі᥊ Mᥲᥒᥙᥱᥣ'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = 'Diamantes'
//global.welcom1 = '❍ Edita Con El Comando setwelcome'
//global.welcom2 = '❍ Edita Con El Comando setbye'
global.banner = 'https://files.catbox.moe/w1onj2.jpg'
global.avatar  = 'https://files.catbox.moe/sz8p1a.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.photoSity = [catalogo]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://chat.whatsapp.com/ILMBtYmpDdbLvVQNp85Ht5'
global.comunidad1 = 'https://chat.whatsapp.com/BhafPVUdbSG0UN5pJrNTXh'
global.channel = 'https://whatsapp.com/channel/0029VbAa5sNCsU9Hlzsn651S'
global.channel2 = 'https://whatsapp.com/channel/0029Vb6Se5bD8SDzUBHuQ43f'
global.md = 'https://github.com/mantis-has/Makima'
global.correo = 'makima2.0botdeymoonclub@gmail.com'
global.cn ='https://whatsapp.com/channel/0029Vb6Se5bD8SDzUBHuQ43f';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363418513566380@newsletter',
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.MyApiRestBaseUrl = 'https://api.cafirexos.com';
global.MyApiRestApikey = 'BrunoSobrino';
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['kurumi']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
