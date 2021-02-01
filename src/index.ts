import { Client, MessageEmbed } from 'discord.js'
import { emoji, random } from 'node-emoji'
import { config } from 'dotenv'
import Bottie from './Bottie'
import matches from './Matches'
config()

const client = new Client()
let bottie = new Bottie()

// Set up Bottie
bottie.setMatches(matches)

client.on('ready', () => {
  console.log(`${client.user!.username} has logged in.`)
})

// Set the prefix
const PREFIX1 = '#'
const PREFIX2 = '$'
const PREFIX_LENGTH = 1
client.on('message', (message) => {
  // Return if user is a bot
  if (message.author.bot) return
  const content = message.content.trim()
  const prefix = content.substr(0, PREFIX_LENGTH)
  const text = content.substring(PREFIX_LENGTH).trim().toLowerCase()

  switch (prefix) {
    case PREFIX1:
      // version 1.0
      if (text.startsWith('ping')) {
        message.channel.send('pong!')
      } else if (text.startsWith('Hello there')) {
        message.channel.send('General Kenobi')
      } else if (text.startsWith('Well done bottie')) {
        message.channel.send('「(•⌒▽⌒•)ゞ')
      } else if (text.startsWith('(づ￣ ³￣)づ')) {
        message.channel.send('(づ￣ ³￣)づ')
      } else if (text.startsWith('Bye bottie')) {
        message.channel.send('(づ￣ ³￣)づ')
      } else {
        message.channel.send(random().emoji)
      }
      break
    case PREFIX2:
      // version 2.0
      const answer = bottie.reply(message.author.username, text)
      message.channel.send(answer)
      break
    default:
      // random eastereggs
      if (content.toLowerCase().startsWith('bottie')) {
        message.channel.send(bottie.randomReply(['Heh?', 'What?', '*confusion*', '*blushing*']))
      }
      if (content === 'Say hello bottie!' && message.author.username === 'Konstantin97') {
        const embed = new MessageEmbed()
          .setTitle('Happy Birthday Sim!!!')
          .setColor(0xff0000)
          .setImage('https://media1.tenor.com/images/3c65a13b27cf269245232e4c5e5a19e4/tenor.gif')
        message.channel.send(embed)
      }
  }
})

// reaction - The reaction object
// user - The user that applied the guild or reaction emoji
client.on('messageReactionAdd', (messageReaction) => {
  const author = messageReaction.message.author.username
  // if its no a reaction to bottie then return
  if (author !== 'Bottie') return
  const reaction = messageReaction.emoji.name

  switch (reaction) {
    case '👍':
      messageReaction.message.channel.send('https://tenor.com/view/wally-wall-e-gif-8866061')
      break
    case '❤️':
      messageReaction.message.channel.send(
        'https://tenor.com/view/glow-in-the-dark-it-wall-e-star-gazing-gif-13616438'
      )
      break
    case '🌱':
      messageReaction.message.channel.send(
        'https://tenor.com/view/earth-day-earth-life-hope-gif-11680085'
      )
      break
    default:
      break
  }
})

client.login(process.env.DISCORDJS_BOT_TOKEN)
