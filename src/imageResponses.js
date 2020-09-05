const fs = require('fs'); // pull in the file system module

const img = fs.readFileSync('./client/spongegar.png');

const drawImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(img);
  response.end();
};

module.exports.drawImage = drawImage;
