const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "rules", // Name of command
    description: "This command displays the rules ", // Command description
    type: 1, // Command type
    options: [], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "" // User permissions needed
    },
    run: async (client, interaction, config, db) => {
        return interaction.reply({ 
            embeds: [
                new EmbedBuilder()
                .setTitle("Rules")
                .addFields(
                    {name: '1. Gepast handelen', value: "Iedereen houdt van plezier maken, maar soms zijn dingen gewoon te onvolwassen voor mensen. Meet de stroom van de chat en ga van daaruit verder, als er problemen optreden, zie regel #4. Dit geldt ook voor spraakkanalen."},
                    {name: '2. Geen reclame', value: "Dit omvat, maar is niet beperkt tot, discord-servers, accounts, game-items en partnerschappen. DM-verzoeken zonder de toestemming van de gebruiker die DMd is, resulteert in een onmiddellijke ban. Streamer-zelfpromotie is toegestaan ​​als deze niet vaak wordt gepost op ons #streams-kanaal (Twitch & Youtube)."},
                    {name: '3. Expliciete woorden', value: "In de algemene kanalen zijn geen overdreven expliciete woorden of uitdrukkingen toegestaan. Sommige mensen zijn beledigd en andere niet, maar als iemand geen woord wil zien, gedraag je dan niet als een lul over iets dat je hebt gezegd."},
                    {name: '4. Wees volwassen ', value: "Als je een probleem hebt met iemand, wees dan een volwassene. Probeer er samen met de ander uit te komen. Mocht u een van de medewerkers moeten inschakelen, wees dan bereid om bewijs te leveren van uw inspanningen om uw probleem met hen te communiceren en van daaruit verder te gaan. Geen intimidatie toegestaan."},
                    {name: '5. NSFW in juiste kanalen ', value: "Houd NSFW-inhoud in de juiste kanalen. Dit is alles waarvan je niet wilt dat familie of collega's het zien, inclusief intense memes. Bewaar zoiets in de nsfw, nsfw-memes of ongecensureerde kanalen."}
                )
                .setColor('blue')
            ],
            ephemeral: true
        })

    }
};