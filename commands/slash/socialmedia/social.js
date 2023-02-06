const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "social",
    description: "Replies with the socialmedia menu!",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
               .setTitle('Enli bot socials Menu')
               .addFields(
                {name: 'AzerApi: ', value: "\n Github: github.com/jarivankaam \n Instagram: AzerJari \n Snapchat: azzey_jari \n Twitter: @KaamJari \n\n"},
                {name: 'Stevensb: ', value: "\n Youtube: https://www.youtube.com/c/StevenSB \n\n"},
                {name: 'Jesse: ', value: " \n Twitter: @jessekind"},
        
            )
            ],
            ephemeral: true
        })
    },
};
