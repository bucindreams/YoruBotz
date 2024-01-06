const fetch = require('node-fetch');

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw 'Mau Nanya Apa???';
  
  const zeltoria = await fetch(`https://api.botcahx.live/api/search/c-ai?prompt=${text}&char=elkaff&apikey=elkaff27`);
  const hasil = await zeltoria.json();

  if (!hasil.status || !hasil.message) throw 'Tidak ada hasil yang ditemukan';

  m.reply(`${hasil.message}`);
};

handler.help = ['ai2'];
handler.tags = ['ai'];
handler.limit = true;
handler.premium = false;
handler.command = /^(ai2)$/i;

module.exports = handler;