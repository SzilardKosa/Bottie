import { Client, MessageEmbed } from 'discord.js'
import { emoji, random } from 'node-emoji'
import { config } from 'dotenv'
import Bottie from './Bottie'
import exactMatches from './Matches'
config()

const client = new Client()
let bottie = new Bottie()

// Set up Bottie
bottie.setMatches(exactMatches, [
  { keywords: ['who', 'favorite', 'your'], output: ['i love you'] },
  { keywords: ['i', 'love', 'you'], output: ['i love you'] },
])

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
  const text = content.substring(PREFIX_LENGTH)
  console.log(text)

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
  }
})

client.login(process.env.DISCORDJS_BOT_TOKEN)
