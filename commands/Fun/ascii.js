const Discord = require('discord.js'),
  figlet = require('figlet'),
  util = require('util'),
  fig = util.promisify(figlet)

module.exports = {
  name: 'ascii',
  description: 'Turn your text into A S C I I',
  usage: 'ascii <text>',
  aliases: [],
  required: [],
  user: [],
  category: __dirname.split("commands\\")[1],

  premium: false,
  guildOnly: false,
  async execute(message, args, client, data) {
    let text = args.join(" ")

    let ascii = await fig(text).catch(e => {
      client.logger.error(e)
      return message.error(e)
    })

    if (text.length >= 20) {
      let buf = Buffer.from(ascii, 'utf-8')
      return message.channel.send(new Discord.MessageAttachment(buf, args.join(" ").toLowerCase().split(" ").join("-") + ".txt"))
    } else {
      return message.channel.send("```" + ascii + "```")
    }
  }
}