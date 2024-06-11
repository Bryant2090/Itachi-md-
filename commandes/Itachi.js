"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "Itachi", reaction: "😏", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝒀𝒆𝒔😉 𝐚𝐦 ITACHI MD 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 BRYANT TECH\n\n ' + "𝐈𝐟 𝐲𝐨𝐮 𝐰𝐚𝐧𝐧𝐚 𝐮𝐬𝐞 𝐦𝐞 𝐣𝐮𝐬𝐭 𝐭𝐲𝐩𝐞 𝐦𝐞𝐧𝐮 𝐭𝐨 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐦𝐞";
    let d = '                                                ❤️‍🔥𝐎𝐟 𝐜𝐨𝐮𝐫𝐬𝐞 𝐚𝐦 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭 𝐛𝐨𝐭 𝐢𝐧 𝐭𝐡𝐞 𝐮𝐧𝐢𝐯𝐞𝐫𝐬𝐞';
    let varmess = z + d;
    var jpg = 'https://telegra.ph/file/d3e2629b6d72e74571de4.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
    
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *DRAGON-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *DRAGON-MD-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/e18441d126f37be8efbfa.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
