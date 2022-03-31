const Discord = require("discord.js")
const client = new Discord.Client()
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('You must set a duration for the lockdown in either hours, minutes or seconds');

  if (validUnlocks.includes(time)) {
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false,
      CREATE_INSTANT_INVITE: false
    }).then(() => {
      const time = args.join(' ');
      const locked = new Discord.MessageEmbed().setDescription(`<:success:710968598386049044> **Channel locked down for ${ms(ms(time), { long:true })}.**`).setColor('GREEN')
      message.channel.send(locked).then(() => {
        const lifted = new Discord.MessageEmbed().setDescription(`<:success:710968598386049044> **Lockdown lifted.**`).setColor('GREEN')
        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.updateOverwrite(message.guild.id, {
              SEND_MESSAGES: null
            })

            .then(message.channel.send(lifted)).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  };
};

module.exports.config = {
  name: "lock",
  aliases: []
}