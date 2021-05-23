const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk')
const fs = require('fs')

const yaml = require('js-yaml')

    let fileContents = fs.readFileSync('./config.yml', 'utf8');
    let config = yaml.load(fileContents);




client.on("ready", () => {

console.log(chalk.bold.greenBright("NUT BOT: MADE BY CHARWEEE"))



var command = ""

if (config.command === "true") command = "✔️";

if (config.command === "false") command = "❌"
  

var commandWord = config.commandWord

if (config.commandWord === "") commandWord = "❌"


  if (config.channels === "true") channels = "✔️";

  if (config.channels === "false") channels = "❌"
  

  if (config.atEveryone === "true") ae = "✔️";

    if (config.atEveryone === "false") ae = "❌"


  if (config.customAt === "true") ca = "✔️";

    if (config.customAt === "false") ca = "❌"


var personID = config.customAtID

if(config.customAtID === "") personID = "❌"


  console.log(chalk.bold.green(`Custom Command: ${command}\nCommand Word: ${commandWord}\nCreate Channels: ${channels}\n@everyone spam: ${ae}\nCustom Ping: ${ca}\nCustom Ping Id: ${personID}`))
})

client.on("message", (message) => {
 if (message.author.bot) return;
  var send = ""
  if (config.command === "true") send = config.commandWord;

  var ping = `<@${config.customAtID}>`

  if (config.atEveryone === "true") ping = "@everyone"


var cName = "nuked"

if (config.channelName !== "") cName = config.channelName 

  if (message.content.includes(`${send}`)) {
    message.guild.channels.create(`${cName}`, {
      type : 'text'
    }).then(async channel=> {
      channel.send(`${ping}`)
    })

    








  }
})

client.on("message", (message) => {
  
var ping = `<@${config.customAtID}>`

  if (config.atEveryone === "true") ping = "@everyone"


var cName = "nuked"

if (config.channelName !== "") cName = config.channelName 


if (message.content.includes(`${ping}`)) {
 
 message.guild.channels.create(`${cName}`, {
      type : 'text'
    }).then(async channel=> {
      channel.send(`${ping}`)
    })

}


})






client.login("ODQ1OTgzNDU4ODExNTc2MzQy.YKo5fg.fcA_WisENjq72t5A_UfdMkVHtyw")