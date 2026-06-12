module.exports = {
    name: 'say',

    async execute (message, args) {
        if (!message.member.permissions.has("Administrator")) {
            return;
        }

        const text = args.join(" ");
        if (!text) {
            "<:seattle_xmark:1514866385703141506> Please provide something for the bot to say."

        }

        await message.delete();
        await message.channel.send(text)
    }
}