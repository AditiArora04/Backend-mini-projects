const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
  
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChats = [
    {
        from: "Voldamort",
        to: "Harry",
        msg: "Avada Kedavra",
        created_at: new Date(),  //UTC
    },
    {
        from: "Georgia",
        to: "Ginny",
        msg: "Us against the world!",
        created_at: new Date(),  //UTC
    },
    {
        from: "Chetna",
        to: "Anita",
        msg: "When are you coming?",
        created_at: new Date(),  //UTC
    },
    {
        from: "Tony",
        to: "Peter",
        msg: "love you 3000",
        created_at: new Date(),  //UTC
    },
    
];

Chat.insertMany(allChats);
