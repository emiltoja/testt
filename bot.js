var Discord = require('discord.js');
const client = new Discord.Client()
const prefix = ("/")

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '/awatar') {
      let embed = new Discord.RichEmbed()
    .setImage(message.author.avatarURL)
    .setColor('#275BF0')
      message.channel.send(embed)
    }
});

client.on('message', message => {
  if (message.content === 'gowssssno') {
    message.channel.send("smacznego");
  }
});


client.on('message', message => {
  if (message.content === 'golomp') {
    message.channel.send("ty jak on kozak");
  }
});

client.on('message', message => {
  if (message.content === 'kim jest golomp?') {
    message.channel.send("gatunek średniej wielkości ptaka z rodziny gołębiowatych. Pierwotnie zasiedlał południową Europę, północną Afrykę oraz zachodnią i centralną Azję. Obecnie spotykany na każdym kontynencie z wyjątkiem Antarktydy.");
  }
});

client.on('message', message => {
  if (message.content === 'dobrze') {
    message.channel.send("to super!");
  }
});
client.on('message', message => {
  if (message.content === 'no') {
    message.channel.send("noo");
  }
});
client.on('message', message => {
  if (message.content === 'XD') {
    message.channel.send("XDDDDD");
  }
});
client.on('message', message => {
  if (message.content === 'spierdalaj') {
    message.channel.send("bo");
  }
});
client.on('message', message => {
  if (message.content === 'czeesc <@510094801052631040>') {
    message.channel.send("no hej, " + message.author + " jak leci?");
  }
});
client.on('message', message => {
  if (message.content === 'dobranoc <@510094801052631040>') {
    message.channel.send("dobranoc " + message.author + " miłych snów!!");
  }
});
client.on('message', message => {
  if (message.content === 'dziendobry <@510094801052631040>') {
    message.channel.send("dzień dobry " + message.author + " udanego dnia!!");
  }
});
client.on('message', message => {
  if (message.content === 'daj nudeska <@510094801052631040>') {
    message.channel.send("zboczuchu ty, wczoraj ci wyslalam :suck:");
  }
});
client.on('message', message => {
  if (message.content === 'cwel') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'karren') {
    message.channel.send('KarreN? chyba KaeN . . .  ');
  }
});
client.on('message', message => {
  if(message.content == "/test")
    message.member.setDeaf(true, "reason");
	
});
client.on('message', message => {
  if (message.content === 'Karren') {
    message.channel.send('KarreN? chyba KaeN . . .  ');
  }
});
client.on('message', message => {
  if (message.content === 'kc') {
    message.channel.send('tkc :heart:');
  }
});
client.on('message', message => {
  if (message.content === 'co tam') {
    message.channel.send('dobrze, a tam?');
  }
});
client.on('message', message => {
  if (message.content === 'twuj stary') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'kretyn') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'idiota') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'pajac') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'debil jebany') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'debil') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'chuj') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'pizda') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'elo') {
    message.channel.send('```c h e j   m i s i u```');
  }
});
								      
client.on('message', message => {
    if (message.content === 'slodziak') {
      let embed = new Discord.RichEmbed()
    .setURL('https://i.imgur.com/9iXDVu4.mp4')
    .setColor('#275BF0')
      message.channel.send();
    }
});
client.on('message', message => {
  if (message.content === 'emiltoja') {
    message.channel.send(':heart: emilek :heart:');
  }
});

client.on('ready', () => {
    client.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: 'emiltounban',
            type: 0
        }
    });
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "emil")) {
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
        value: "najukochanszy, najslodszy misiek :heart::heart::heart::heart::heart::heart::heart: \njesli myslisz ze jest inaczej, to zle myslisz gupku"
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
