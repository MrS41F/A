module.exports = {
 config: {
	 name: "saif",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "saif") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ʜᴇʏ ..\n❥︎----ღ᭄_  ᴮᴿᴼᵀᴴᴱᴿ❞࿐.♡.\nᥫᩣ ɪᴛ’s sᴀɪғ\n\n𝐁𝐎𝐓𝐎𝐖𝐍𝐄𝐑\n𝐒𝐀𝐈𝐅𝐔𝐋」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/ZHhtVqp.mp4")
 });
 }
 }
}
