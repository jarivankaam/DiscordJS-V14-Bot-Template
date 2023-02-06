const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "help",
    description: "Replies with the help menu!",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
               .setTitle('Enli bot Help Menu')
               .addFields(
                {name: 'Algemene commands: ', value: "/hallo - Geeft een Hallo berichtje. \n /owners - toont de owners . \n /help - toon dit bericht"},
                {name: 'Socialmedia commands: ', value: "/social - toon de social media van @AzerApi#2002"},
                {name: 'Admin commands WP: ', value: "/kick - Kicked een spelere \n /clear - maakt het scherm leeg tot een aangeven hoeveelheid \n /announce - maak een aankondiging \n"},
                {name: 'Sussy commands WP', value: " \n /hentai - uhm ja wat? \n /femboy - tja tja wat kan ik hier over zeggen ohja 18+ \n"},
                {name: 'Onzin commands WP ', value: " \n /Ahnung - ja ich habe keine ahnung \n /nein - nein nein nein nein nein nein nein nein"}
            )
            ],
            ephemeral: true
        })
    },
};
