let handler = async (m, { command, text, groupMetadata }) => m.reply(`
 *╔═══*🌐 *6 ᴠs 6* *ɪɴᴛᴇʀɴᴏ* 🌐
*╟❧*  *ɪɴғɪɴɪᴛᴏ*
*╟*
*╟❧*  ⏰  *5:45 ᴘᴍ*  🇲🇽
*╟❧*  ⏰  *6:45 ᴘᴍ*  🇪🇨
*╟❧*  ⏰  *7:45 ᴘᴍ*  🇻🇪
*╟*
*╟❧*  *sᴏʟᴏ ᴀʟᴏᴋ ʏ ᴋ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ A* 
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ B* 
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╟❧* 𖠌
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟❧* 𖠌
*╟❧* 𖠌
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs6i.i.6$/i
handler.admin = true
export default handler
