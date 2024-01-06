global.owner = ['6281370126262']  
global.mods = ['6281370126262'] 
global.prems = ['6281370126262']
global.nameowner = 'ArdaStore'
global.nomorown = '6281370126262'
global.numberowner = '6281370126262' 
global.mail = 'ardaganzofc@gmail.com' 
global.gc = 'https://chat.whatsapp.com/HXxyR4Df6153xMgLgOlqzp'
global.instagram = 'https://instagram.com/ardasaha10'
global.wm = '© ArdaStore'
global.wait = '_*Tunggu sedang di proses...*_'
global.done = '```Success...\nDont forget to donate```'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Rara Botz WhatsApp'
global.maxwarn = '5' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'elkaff872521' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'ldZQpCgJ'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'elkaff872521' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
