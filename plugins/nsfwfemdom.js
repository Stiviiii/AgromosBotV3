let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
     if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '❰ ⚠️ ❱ *Función Nsfw Desactivada*\n*Escriba #on nsfw para activar esta Función.*'
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/femdom?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', 'agromos sp - Bot', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(femdom|nsfwfemdom)$/i

module.exports = handler
