let handler = async (m, { command, text, groupMetadata }) => m.reply(`
*╔═══⭐  ɪɴᴛᴇʀɴᴏ  ⭐*
*╟*  *ᴅɪɴᴀᴍɪᴄᴀ*
*╟*
*╟*  ⏰  *7:45ᴘᴍ*  🇲🇽
*╟*  ⏰  *8:45 ᴘᴍ*  🇪🇨
*╟*
*╟* *ᴜsᴏ ᴅᴇ ᴅɪsᴄᴏʀᴅ ᴏʙʟɪɢᴀᴛᴏʀɪᴏ*
*╟*
*╚══* *ᴊᴜɢᴀᴅᴏʀᴇs*
*╟* ×͜× 
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╟* ×͜×
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^d.8$/i
handler.admin = true
export default handler
