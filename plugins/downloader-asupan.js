let handler = async(m, { conn }) => {
  const asupan = [
    `https://api.botcahx.live/api/asupan/rikagusriani?apikey=${btc}`,
    `https://api.botcahx.live/api/asupan/santuy?apikey=${btc}`,
    `https://api.botcahx.live/api/asupan/ukhty?apikey=${btc}`,
    `https://api.botcahx.live/api/asupan/bocil?apikey=${btc}`,
    `https://api.botcahx.live/api/asupan/gheayubi?apikey=${btc}`,
    `https://api.botcahx.live/api/asupan/natajadeh?apikey=${btc}`,
    `https://api.botcahx.live/api/asupan/euni?apikey=${btc}`,
    `https://api.botcahx.live/api/asupan/douyin?apikey=${btc}`,
    `https://api.botcahx.live/api/api/asupan/cecan?apikey=${btc}`,
    `https://api.botcahx.live/api/api/asupan/hijaber?apikey=${btc}`,
    `https://api.botcahx.live/api/api/asupan/asupan?apikey=${btc}`,
    `https://api.botcahx.live/api/api/asupan/anony?apikey=${btc}`   
  ]
  try {
    const url = pickRandom(asupan);
    await conn.sendFile(m.chat, url, null, '', m);
  } catch (e) {
    console.log(e);
    m.reply('Maaf, video asupan tidak ditemukan');
  }
}

handler.help = ['asupan']
handler.tags = ['downloader']
handler.command = /^asupan$/i
handler.owner = false
handler.premium = false
handler.group = false
handler.private = false

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

module.exports = handler
