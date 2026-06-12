module.exports = {
    name: "purge",

    async execute(message, args) {

        const isAdmin = message.member.permissions.has("Administrator");

        if (!isAdmin && !message.member.roles.cache.has("1513096262948360222")) {
            return message.reply("<:seattle_xmark:1514866385703141506> You do not have permission to use this command.");
        }

        const amount = parseInt(args[0]);

        if (isNaN(amount) || amount < 1) {
            return message.reply("<:seattle_xmark:1514866385703141506> Please provide a valid number of messages to delete.");
        }

        await message.delete().catch(() => {});

        let deleted = 0;

        while (deleted < amount) {

            const remaining = amount - deleted;
            const fetchAmount = Math.min(100, remaining);

            const messages = await message.channel.messages.fetch({
                limit: fetchAmount
            });

            const filtered = messages.filter(
                msg =>
                    !msg.pinned &&
                    Date.now() - msg.createdTimestamp < 14 * 24 * 60 * 60 * 1000
            );

            if (filtered.size === 0) break;

            const deletedMessages = await message.channel.bulkDelete(filtered, true);

            deleted += deletedMessages.size;

            if (deletedMessages.size === 0) break;
        }

        const confirmation = await message.channel.send(
            `<:seattle_check:1514866360143052820> **Successfully** deleted **${deleted}** messages.`
        );

        setTimeout(() => {
            confirmation.delete().catch(() => {});
        }, 5000);
    }
};