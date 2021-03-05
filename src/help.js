const help = (prefix) => {
	return `
   Olá! Sou Jarvis o Agrobot👨‍🌾
	No momento tenho poucas funções, emobora seja muito funcional:
  
✌🏻 *TE AJUDO A FAZER FIGURINHAS...*
  │ Responda a mensagem ou escreva no envio:
  ├─ 👌🏻 ${prefix}sticker
  └─ 👌🏻 ${prefix}stickergif
  
  
📂 *POSSO BAIXAR VIDEOS DO YOUTUBE*
  │
  ├─ 📂 ${prefix}ytmp3
  └─ 📂 ${prefix}ytmp4

🤙🏻 *POSSO AINDA GERAR UM LINK PARA SEU CHAT*
  │
  └─ 🤙🏻 ${prefix}wame
  
`
}

exports.help = help
