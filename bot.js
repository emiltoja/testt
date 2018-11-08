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
	if(msg.content.startsWith(prefix + "smoke")) { 
		msg.channel.sendMessage("Weed!")
	}
 else 
	if(msg.content.startsWith(prefix + "who")) { 
        msg.channel.sendMessage("immune is the author!")			
        }
	else 
		if(msg.content.startsWith(prefix + "reddit")) {
			msg.channel.sendMessage("https://www.reddit.com/r/random/")
		}
		else
			if(msg.content.startsWith(prefix + "meme")) {
				msg.channel.sendMessage("https://www.imgur.com/random")
			}
        else 

	    if(msg.content.includes(prefix + "help")) {
		if(msg.author.bot) return;
		msg.channel.sendMessage("-")
}
else 
  if(msg.content.startsWith("")) {
}
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('/kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`uzytkownik ${user.tag} dostal kicka!`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('nie mozesz dac kicka temu uzytkownikowi');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('uzytkownik nie jest w tej grupie');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('nieprawidlowy nick lub nie oznaczono za pomoca @ uzytkownika');
    }
  }
});

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('/ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`uzytkownik ${user.tag} dostal bana`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('nie mozesz dac bana temu uzytkownikowi');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('uzytkownik nie jest w tej grupie');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('nieprawidlowy nick lub nie oznaczono za pomoca @ uzytkownika');
    }
  }
})


 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
