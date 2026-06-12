const axios = require("axios");

module.exports = {
    name: "cmd",

    async execute(message, args) {

        const ERLC_API_KEY = process.env.ERLC_API_KEY;

        if (!message.member.permissions.has("Administrator")) {
            return message.reply("<:seattle_xmark:1514866385703141506> You do not have permission to run this command.");
        }

        const cmd = args.join(" ");

        if (!cmd) {
            return message.reply("<:seattle_xmark:1514866385703141506> Please provide a command.");
        }

        try {

            await axios.post(
                "https://api.erlc.gg/v1/server/command",
                {
                    command: cmd
                },
                {
                    headers: {
                        "Server-Key": ERLC_API_KEY
                    }
                }
            );

            return message.reply("<:seattle_check:1514866360143052820> **Successfully** ran command.");

        } catch (err) {

            console.error(err.response?.data || err);

            return message.reply("<:seattle_xmark:1514866385703141506> An error occurred.");
        }
    }
};