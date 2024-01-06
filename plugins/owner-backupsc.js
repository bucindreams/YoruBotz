const fs = require('fs');
const cp = require('child_process');
const util = require('util');
let exec = util.promisify(cp.exec);

let handler = async (m, { conn, isROwner }) => {
   try {
      let zipFileName = 'YoruScript.zip';

      m.reply('Sedang memulai proses backup. Harap tunggu...');

      setTimeout(() => {
         if (fs.existsSync('node_modules')) {
            m.reply("Modul 'node_modules' tidak ikut di backup.");
         }

         const file = fs.readFileSync(zipFileName);
         conn.sendMessage(
            m.chat,
            {
               document: file,
               mimetype: 'application/zip',
               fileName: zipFileName,
               caption: 'Backup selesai. Silakan unduh file backup.',
            },
            { quoted: m }
         );

         setTimeout(() => {
            fs.unlinkSync(zipFileName);
            m.reply('File backup telah dihapus.');
         }, 5000);
      }, 3000);

      setTimeout(() => {
         let zipCommand = `zip -r ${zipFileName} * -x "node_modules/*"`;
         exec(zipCommand).then(() => {
         }).catch((err) => {
            console.error(err);
         });
      }, 1000);
   } catch (error) {
      m.reply('Terjadi kesalahan saat melakukan backup.');
      console.error(error);
   }
};

handler.help = ['backupsc'];
handler.tags = ['owner'];
handler.command = ['backupsc'];
handler.rowner = true;

module.exports = handler;