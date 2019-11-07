var Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '/';
const fetch = require('node-fetch');


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if (command === 'pracownicy') {
  const { nickname } = await fetch('http://mathelusz.ct8.pl/lsrp/api.php').then(response => response.json());
    message.channel.send(nickname);
  }
});
});

client.login(process.env.BOT_TOKEN);
