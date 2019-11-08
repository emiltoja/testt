var Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client()
const prefix = ("/")

client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
    if (message.content === '/awatar') {
      let embed = new Discord.RichEmbed()
	.setTitle()
    .setImage(message.author.avatarURL)
    .setColor('#275BF0')
      message.channel.send(embed)
    }
});
client.on('message', message => {
if (command === '/pracownicy') {
	const { nickname } = await fetch('http://mathelusz.ct8.pl/lsrp/api.php').then(response => response.json());

	message.channel.send(nickname);
}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
