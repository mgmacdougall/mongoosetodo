const EmailModel = require('../models/userModel');

async function createUser(data) {
  const {name, email} = data;
  let message = new EmailModel({
    name: name,
    email: email
  });

  try {
    let result = await message.save();
    let data = await result.toJSON();
    return data;
  } catch (e) {
    return {error: e.message};
  }
}

module.exports = createUser;
