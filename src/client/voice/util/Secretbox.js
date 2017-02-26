try {
  const tweetnacl = require('tweetnacl');
  const sodium = require('sodium-native');
  module.exports = {
    open: tweetnacl.secretbox.open,
    close: function (secretMessage, nonce, secretKey) {
      let cipher = new Buffer(secretMessage.length);
      sodium.api.crypto_secretbox_easy(cipher, secretMessage, nonce, secretKey);
      return cipher;
    }
  };
} catch (err) {
  const tweetnacl = require('tweetnacl');
  module.exports = {
    open: tweetnacl.secretbox.open,
    close: tweetnacl.secretbox,
  };
}
