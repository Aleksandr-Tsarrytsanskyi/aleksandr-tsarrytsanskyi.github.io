const sharp = require("sharp");

module.exports = function webpLoader(source) {
  const done = this.async();

  sharp(source)
    .autoOrient()
    .webp({ quality: 82 })
    // .webp({ lossless: true })
    .toBuffer()
    .then(
      (buffer) => done(null, buffer),
      (error) => done(error),
    );
};

module.exports.raw = true;