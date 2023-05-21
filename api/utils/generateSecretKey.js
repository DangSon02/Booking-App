const crypto = require("crypto");

function generateSecretKey(length) {
  const secretKey = crypto.randomBytes(length).toString("hex");
  return secretKey;
}

// Độ dài khóa bí mật mong muốn (trong byte)
const keyLength = 32;

// Gọi hàm để tạo khóa bí mật
// const secretKey = generateSecretKey(keyLength);
// console.log(secretKey);
// module.exports = secretKey;
