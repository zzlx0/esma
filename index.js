require('dotenv').config();
const Discord = require('discord.js')
const bot = new Discord.Client()
const ping = require('./commands/ping')
const play = require('./commands/play')


bot.on('ready', function () {
  bot.user.setAvatar('./img/logo-esma.png').catch(console.error)
  bot.user.setGame("A l'écoute").catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
  menber.createDM().then(function (channel) {
    return channel.send('Bienvenu sur le channel ' + member.displayName)
  }).catch(console.error)
})

bot.on('message', function (message){
  let commandUsed =
    ping.parse(message) ||
    play.parse(message)
})

bot.login(process.env.DISCORD_TOKEN)
