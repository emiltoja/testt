var Discord = require('discord.js');
const client = new Discord.Client(); 
var prefix = ("/")


client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'emiltoemiltobot');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  channel.send(`witaj na emiltoserwerze, ${member}!`);
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
          reason: 'byles niegrzeczny kotq!',
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
});
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

bot.on('ready', () => {
  console.log('ClearMessagesBot is Ready!');
  bot.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {

      // Check the following permissions before deleting messages:
      //    1. Check if the user has enough permissions
      //    2. Check if I have the permission to execute the command

      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("niestety, nie masz uprawnien do wykonania polecenia \""+message.content+"\"");
        console.log("niestety, nie masz uprawnien do wykonania polecenia \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("niestety, nie masz uprawnien do wykonania polecenia \""+message.content+"\"");
        console.log("niestety, nie masz uprawnien do wykonania polecenia \""+message.content+"\"");
        return;
      }

      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("usuwanie wiadomosci zakonczone powodzeniem. calkowita liczba usunietych wiadomosci: "+messagesDeleted);
            console.log('usuwanie wiadomosci zakonczone powodzeniem. calkowita liczba usunietych wiadomosci: '+messagesDeleted)
          })
          .catch(err => {
            console.log('blad podczas usuwania wiadomosci!!!!');
            console.log(err);
          });
      }
    }
  });
});
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
