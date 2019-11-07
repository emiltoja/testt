var Discord = require('discord.js');
const api = "http://mathelusz.ct8.pl/lsrp/api.php";
const client = new Discord.Client()
const prefix = ("/")

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "pracownicy")) {
	message.channel.send({embed: {
    color: 990099,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "emil",
        value: "nickname"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© bot by emiltoja"
    }
  }
});
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
