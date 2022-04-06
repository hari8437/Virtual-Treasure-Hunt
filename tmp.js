npm i bcrypt

const bcrypt = require('bcrypt');

async function hashIt(password){
  const salt = await bcrypt.genSalt(6);
  const hashed = await bcrypt.hash(password, salt);
  console.log(hashed)
}
hashIt("hello world");
// compare the password user entered with hashed pass.
async function compareIt(password){
  const validPassword = await bcrypt.compare(password, hashedPassword);
}
compareIt("hello world");


/* const salt = await bcrypt.genSalt(6);
const hashed = await bcrypt.hash(password, salt); */
