var Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';
const fetch = require('node-fetch');


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	

	// ...
});
client.on("message", (message) => {
	if (command === 'pracownicy') {
	const { nickname } = await fetch('http://mathelusz.ct8.pl/lsrp/api.php').then(response => response.json());

	message.channel.send(file);
}
});

client.login(process.env.BOT_TOKEN);
