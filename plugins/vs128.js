let handler = async (m, { command, text, groupMetadata }) => m.reply(`
*╔═══*🌐 *12 ᴠs 12* *ᴇxᴛᴇʀɴᴏ* 🌐
*╟•*  *ᴍᴀᴘᴀ ᴀʙɪᴇʀᴛᴏ*
*╟*
*╟•*  ⏰  *7:45 ᴘᴍ*  🇲🇽
*╟•*  ⏰  *8:45 ᴘᴍ*  🇪🇨
*╟*
*╟•* *ᴜsᴏ ᴅᴇ ᴅɪsᴄᴏʀᴅ ᴏʙʟɪɢᴀᴛᴏʀɪᴏ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ* 
*╟•* 🐼ᴄʜᴀʀʟʏ  ғʟᴏᴡ
*╟•* 🌟  
*╟•* 🌟
*╟•* 🌟
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟•* 🐼ᴍᴀʀɪ́ᴀ ғʟᴏᴡ
*╟•* 🌟
*╟•* 🌟  
*╟•* 🌟 
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟•* 👑
*╟•* 🌟
*╟•* 🌟
*╟•* 🌟
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟•* ⭐  
*╟•* ⭐
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟•* ⭐
*╟•* ⭐
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs12.8$/i
handler.admin = true
export default handler
