const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("request")
    .setDescription("request stuff")
    .addSubcommand(subcommand => subcommand
        .setName("staff")
        .setDescription("Request more staff to assist in-game.")
        
    ),

    async execute (interaction) {
        const hasRole = interaction.member.roles.cache.has("1513096266874359849");
        const isAdmin = interaction.member.permissions.has("Administrator")
        if (!hasRole && isAdmin) {
            return interaction.reply({content: "<:seattle_xmark:1514866385703141506> You do not have permission to run this command.", flags: 64})

        }

        const channel = interaction.guild.channels.cache.get("1513093321122386050");
        await channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": `${interaction.user} is requesting more staff in-game. Ensure to join and help out if possible.\n-# @here`
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 12,
          "items": [
            {
              "media": {
                "url": "https://media.discordapp.net/attachments/1502477727062818830/1514871227783839784/image.png?ex=6a2cf145&is=6a2b9fc5&hm=5e2e7738089176d46abbc02c49cb893fcc03f868b38ebb790b7161a01ec964ed&=&format=webp&quality=lossless&width=1872&height=95"
              }
            }
          ]
        }
      ]
    }
  ]
})
    }
}