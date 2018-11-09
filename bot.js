var Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
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
  channel.send(`witaj na emiltoserwerze :heart: :heart: :heart:, ${member}!`);
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

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

    // Commands

    // Ping
	  if (message.author.equals(client.user)) return;
	  
	  if (!message.content.startWith(prefix)) return;
	  
	  var args - message.content.substring(prefix.length).split(" ");
	  
	  switch (args[0]. toLowerCase()) {
		  case "ping":
			 message.channel.sendMessage("Pong!");
			 break
		  case "info":
		     message.channel.sendMessage("to bot emiltoja");
			 break;
		  case "testt":
		     if (args[1]) message.channe.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
			 else message.channel.sendMessage("testuje");
			 break;
		  case "embed":
		    var embed = new Discord.RichEnbed()
				.addField("test title", "test costam", true)
				.setColor(0x00FFFFFF)
			 message.channel.sendEnbed(enbed);
			 break;
		  default:
			 message.channel.sendMessage("Invilad command");
	  }

    


    // Purge
    if (msg.startsWith(prefix + 'PURGE')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "emiltomoderator")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('musisz posiadac role \`emiltomoderator\` aby uzyc tej komendy'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('podaj ilosc wiadomosci do usuniecia! \n ``` ' + prefix + 'purge <ilosc>```'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' usuwanie wiadomosci...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }

});

client.on('ready', () => {
    client.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    client.user.setPresence({
        game: {
            name: 'emiltogrze',
            type: 0
        }
    });
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
