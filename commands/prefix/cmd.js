const axios = require("axios");

module.exports = {
    name: "cmd",

    async execute (message, args ) {
            const ERLC_API_KEY = process.env.ERLC_API_KEY;
    
        
                 const cmd = args.slice(0).join(" ");
           
                 // 🔒 OPTIONAL PERMS
           
                 if (!message.member.permissions.has("Administrator")) {
                   return message.reply("<:seattle_xmark:1514866385703141506> You do not have permission to run this command.");
                 }
           
                 try {
                   await axios.post(
                     "https://api.policeroleplay.community/v1/server/command",
                     {
                       command: cmd
                     },
                     {
                       headers: {
                         "Server-Key": ERLC_API_KEY
                       }
                     }
                   );
           
                   return message.reply(`<:check:1497479710479749151> **Successfully** ran command.`);
           
                 } catch (err) {
                   return message.reply("<:seattle_xmark:1514866385703141506> An error occurred.");
                 }
           
               }
             }
            
        
    