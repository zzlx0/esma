const Command = require('./command')
const YoutubeStream = require('ytdl-core')

module.exports = class Play extends Command {

  static match (message) {
    return message.content.startsWith('!play')
  }

  static action (message) {
    let voiceChannel = message.guild.channels
      .filters(function (channel) { return channel.type === 'voice' })
      .first()
    let args = message.content.split(' ')
    voiceChannel.join()
      .then(function (connection){
        try {
          let stream = YoutubeStream(args[1])
          connection.playStream(stream).on('end', function () {
            connection.disconnect()
          })
        } catch (e) {
          message.reply("je n'ai pas réussi à lire la vidéo :(")
        }
      })
  }
}
