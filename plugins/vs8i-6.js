let handler = async (m, { command, text, groupMetadata }) => m.reply(`
 *╔═══*🌐 *8 ᴠs 8* *ɪɴᴛᴇʀɴᴏ* 🌐
*╟❧*  *ᴍᴀᴘᴀ ᴀʙɪᴇʀᴛᴏ*
*╟*
*╟❧*  ⏰  *5:45 ᴘᴍ*  🇲🇽
*╟❧*  ⏰  *6:45 ᴘᴍ*  🇪🇨🇨🇴
*╟❧*  ⏰  *7:45 ᴘᴍ*  🇻🇪
*╟❧* *ᴜsᴏ ᴅᴇ ᴅɪsᴄᴏʀᴅ ᴏʙʟɪɢᴀᴛᴏʀɪᴏ*
*╟*
*╟═ ᴇϙᴜɪᴘᴏ ᴀ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ* 
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╟*
*╟═ ᴇϙᴜɪᴘᴏ ʙ*
*╟*
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ* 
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *ᴇsᴄᴜᴀᴅʀᴀ*
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *sᴜᴘʟᴇɴᴛᴇs*
*╟❧* 𖤍
*╟❧* 𖤍
*╚══* *ᴅᴏɴᴀᴅᴏʀ ᴅᴇ sᴀʟᴀ*
*╟❧* 𖤍
*╟❧* 𖤍
*╚═*•┈ *${groupMetadata.subject}* ┈•
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs8i.6$/i
handler.admin = true
export default handler
