var Discord = require('discord.js');
const client = new Discord.Client(); 
var prefix = ("/")


client.on('ready', () => {
	console.log('c h e j')
});

client.on("guildMemberAdd", member => { 
let guild = member.guild; 
guild.defaultChannel.sendMessage('c h e j   p r z y j a c i e l u  ! ${member.user}')
});

client.on("guildCreate", guild => {
	console.log('New guild added :: ${guild.name}, owned by ${guild.owner.user.username}')
guild.defaultChannel.sendMessage('c h e j **${guild.name}**')
});

//messages 
client.on("message", msg => {
        if (msg.content.startsWith('/emil')) {
		msg.channel.sendMessage("to ziom")
	}
 else 
        if (msg.content.startsWith('/kto')) {
        msg.channel.sendMessage("immune is the author!")			
        }
	else
		
            if (msg.content.startsWith('/pomoc')) {    
		if(msg.author.bot) return;
		msg.channel.sendMessage("no kurla potem uzupelnie gupku")
}
else 
  if(msg.content.startsWith("")) {
}
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('/kick')) {
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`uzytkownik ${user.tag} dostal kicka!`);
        }).catch(err => {
          message.reply('nie mozesz dac kicka temu uzytkownikowi');
          console.error(err);
        });
      } else {
        message.reply('uzytkownik nie jest w tej grupie');
      }
    } else {
      message.reply('nieprawidlowy nick lub nie oznaczono za pomoca @ uzytkownika');
    }
  }
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('/ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply(`uzytkownik ${user.tag} dostal bana`);
        }).catch(err => {
          message.reply('nie mozesz dac bana temu uzytkownikowi');
          console.error(err);
        });
      } else {
        message.reply('uzytkownik nie jest w tej grupie');
      }
    } else {
      message.reply('nieprawidlowy nick lub nie oznaczono za pomoca @ uzytkownika');
    }
  }
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'awatar') {
    message.reply(message.author.avatarURL);
  }
})
client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
  if (message.content === 'huj') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'cwel') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'kutas') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'fiut') {
    message.channel.send('twuj stary pijany');
  }
});
client.on('message', message => {
  if (message.content === 'idiota') {
    message.channel.send('twuj stary pijany');
  }
});



 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
