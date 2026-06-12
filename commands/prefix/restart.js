module.exports = {
    name: 'restart',

    async execute (message, args) {
        const ALLOWED_USER_ID = "1499915565538611401";

if (message.author.id !== ALLOWED_USER_ID) {
    return message.reply({
        content: "<:seattle_xmark:1514866385703141506> You do not have permission to run this command.",
        allowedMentions: { repliedUser: false }
    });
}
        

        const msg = await message.reply("<a:seattle_loading1:1514869409691340850> Restarting...")
        setTimeout(async () => {
    await msg.edit({
        content: "~~<a:seattle_loading1:1514869409691340850> Restarting...~~\n<:seattle_check:1514866360143052820> Successfully restarted bot."
    });
}, 5000);
    }
}