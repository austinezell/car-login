'use strict';

const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

var arr = [];
for (let i = 1; i < 40; i++) {
  const url = `http://www.brainyquote.com/quotes/topics/topic_car${i}.html`
  request(url, (err, res, html) => {
    if (!err) {
      const $ = cheerio.load(html);

      const $quoteBlock = $(".boxyPaddingBig");
      let count = $quoteBlock.length;
      $quoteBlock.each(function() {
        const quote = $(this).find(".bqQuoteLink").text();
        const author = $(this).find('.bq-aut').text();
        const obj = { quote, author };
        arr.push(obj);
        count--;

        if(count===0 && i===39) {
          writeJSON();
        }
      })

    }
  })

}

function writeJSON(){
  fs.writeFile('carQuotes.js', JSON.stringify(arr), function(err){
    console.log('hit')
  })
}
