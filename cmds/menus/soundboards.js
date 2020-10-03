const Commando = require('discord.js-commando')
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const Config = require('../../src/config')
const GIFS = Config.GIFS; 



module.exports = class EmbedCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'm',
            group: 'soundboards',
            memberName: 'menu',
            description: 'Creates a menu for each character with a sound folder'
        })
    }

    async run(message, args) {
        //Instantiates a sounds object to store information about this characters sounds
        let Sounds = new Object();

        //func. that looks at the character folder and adds an entry to the Sounds obj.
        function RetreiveAudioClips() {
            let i = 0;
            const folder = `./assets/sounds/${args}`;
            fs.readdirSync(folder).forEach(file => {
                let character = file.split("_")[0]
                let name = file.split("_")[1]
                let description = file.split("_")[2]
                let emoji = file.split("_")[3].split('.')[0]
                Sounds[i] = { character, description, name, emoji }
                i++;
            })
        }

        // Creates new character specific menu
        const Menu = new Discord.MessageEmbed()
            .setColor('#4C18EB')
            .setTitle(`${args.charAt(0).toUpperCase() + args.slice(1)} Soundboard`)
            .setDescription('Click on the corresponding reaction to play a sound')
            .setThumbnail(`${GIFS[args]}`)
            .addFields({ name: '\u200B', value: '\u200B' })

        // Iterates through the Sounds obj. and append a field to the menu for every sound\
        function BuildMenu(){
            let i = 0;
            for (i; i < Object.keys(Sounds).length; i++) {
                let character = Sounds[i].character
                let emoji = Sounds[i].emoji
                let description = Sounds[i].description
                let name = Sounds[i].name.split('.')[0]
                Menu.addField(`\`\`\`${emoji} ${name}\`\`\`` , description, true)
            }
        }

        RetreiveAudioClips()
        BuildMenu()

        function NumberOfSounds(){
            let SoundCount = Object.keys(Sounds).length;
            let remainder = SoundCount % 3;

            if(remainder === 0){
                return
            }else if(remainder === 1){
                Menu.addField('-' ,"-", true)
                Menu.addField('-' ,"-", true)
            }else if(remainder === 2){
                Menu.addField('-' ,"-", true)
            }
        }

        NumberOfSounds()

        message.channel.send(Menu)
            .then((sentMessage) => {
                Object.values(Sounds).forEach(val => {
                    sentMessage.react(val.emoji)
                })
            })


    }

}