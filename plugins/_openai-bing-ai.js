/* Coded Ori By PrinzXz */
/* Thanks For NajmyW */


const axios = require("axios");

let handler = async (m, { conn, text }) => {
    if (!text) throw 'how can I assist you today?';
    try {
        conn.reply(m.chat, `_Please wait! This process may take up to several minutes._`, m);
        let data = await fetch(`http://15.235.142.199/api/ai/bingAi?prompt=${text}&apikey=DdUFIJY3sIGZW0g`);
        let json = await data.json();
        let results = await json.image;
        if (!results || results.length === 0) throw 'No results found.';
        
        let links = results.map((link, index) => `*(${index + 1}).* [${link}]`).join('\n');
        conn.sendFile(m.chat, results[0], 'bing.png', `*The following are the results of a search with the query:*\n_${text}_\n\n*Following are the photo links generated from Bing AI:*\n${links}\n\n\n*How to retrieve media using the link above:*\n_.get <link>_\n*Example:*\n_.get ${results[0]}_`, m);
    } catch (err) {
        m.reply('Error: ' + err);
    }
};

handler.command = handler.help = ['bing-ai'];
handler.tags =['ai'];
handler.limit = 10;

module.exports = handler;