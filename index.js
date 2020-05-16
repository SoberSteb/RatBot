//Kameron Jusseaume
//5/12/2020
//RatBot Version 1.0
//Includes all Commands in one .js file to be placed into individual .js files later

const Discord = require('discord.js');
const
{
    prefix,
    token,
} = require('./config.json');

var fs = require('fs');

var commandsList = fs.readFileSync('commands/commands.txt', 'utf8');

//Keeps track of if the rats have been summoned
//0 - no music will be played
//1 - music functionality 
var summoned = 0;

var inCall = 0;

//needed to play youtube vids
const ytdl = require('ytdl-core');

const client = new Discord.Client();

client.login(token);

client.once('ready', () => {
    console.log('RatBot is ready');
});
client.once('reconnecting', () => {
    console.log('RatBot is reconnecting');
});
client.once('disconnect', () => {
    console.log('RatBot is disconnected');
});

//Commands
client.on('message', message =>
{
    const voiceChannel = message.member.voice.channel;
    //if the bot sends a message with the prefix+command, it will ignore it in order to prevent infinite loop in some instances
    if(message.author.bot)
    {
        return;
    }
    //Displays all commands
    if(message.content.toLowerCase() === '!help' || message.content.toLowerCase() === '!commands')
        message.channel.send("```" + commandsList + "```");

    //Summons the rats(doesn't do anything special)
    if(message.content.toLowerCase() === '!summon')
    {
        if(summoned == 0)
        {
            message.channel.send("ᘛ⁐̤ᕐᐷ⁐̤ᕐᐷ⁐̤ᕐᐷ"+ message.member.displayName + " HAS SUMMONED THE RATSᘛ⁐̤ᕐᐷ⁐̤ᕐᐷ⁐̤ᕐᐷ");
            summoned = 1;
        }
        else
        {
            message.channel.send(message.member.displayName + " tried to summon more rats, but none came...");
        }
    }

    //Sends the rats away (disables the music playing functionality until they're summoned again)
    if(message.content.toLowerCase() === '!dust')
    {
        if(summoned == 0)
        {
            return message.channel.send("There are no rats here " + message.member.displayName);
        }
        else
        {
            message.channel.send(message.member.displayName + " sends the rats back to their holes");
            voiceChannel.leave();
            return summoned = 0;
        }
    }

    //This is where all of the music commands will go
    if(summoned)
    {
            
            if(!voiceChannel)
            {
                return message.channel.send("You have to be in a voice channel to use their full capabilities " + message.member.displayName);
            }

            const permissions = voiceChannel.permissionsFor(message.client.user);
            if(!permissions.has("CONNECT")|| !permissions.has("SPEAK"))
            {
                return message.channel.send("Why are you silencing the frens? (RatBot does not have permission to join the voice channel)");
            }
            
            client.on('message', message => 
            {
                //Disconnects bot from voice channel
                if(message.content.toLowerCase() == '!stop' && inCall)
                {
                    inCall = 0;
                    return voiceChannel.leave();
                }

                //OG Mixtape
                if(message.content.toLowerCase() === '!mixtape' && summoned)
                {                
                    message.member.voice.channel.join().then(connection => 
                    {
                        connection.play(ytdl('https://www.youtube.com/watch?v=vdVnnMOTe3Q', {volume: '0.5'}, {filter: 'audioonly'})).on("end", end => {
                            connection.channel.leave();
                        });
                    }).catch(console.error);
                    inCall = 1;
                }
                //All Star
                if(message.content.toLowerCase() === '!shrek' && summoned)
                {                
                    message.member.voice.channel.join().then(connection => 
                    {
                        connection.play(ytdl('youtube.com/watch?v=Ni5gDtogseI&list=PLm3DCZOWCOqxZKaaHT5BxdgXy1i2fWGGG&index=2', {volume: '0.5'}, {filter: 'audioonly'})).on("end", end => {
                            connection.channel.leave();
                        });
                    }).catch(console.error);
                    inCall = 1;
                }
                //YMCA
                if(message.content.toLowerCase() === '!village' && summoned)
                {                
                    message.member.voice.channel.join().then(connection => 
                    {
                        connection.play(ytdl('https://www.youtube.com/watch?v=BAYbgrNggX0&list=PLm3DCZOWCOqxZKaaHT5BxdgXy1i2fWGGG&index=3', {volume: '0.5'}, {filter: 'audioonly'})).on("end", end => {
                            connection.channel.leave();
                        });
                    }).catch(console.error);
                    inCall = 1;
                }
                //In the End
                if(message.content.toLowerCase() === '!edge' && summoned)
                {                
                    message.member.voice.channel.join().then(connection => 
                    {
                        connection.play(ytdl('https://www.youtube.com/watch?v=pvfLsJIOCIM&list=PLmtYYJsHYKLupNT6QvzRljGgfUKbQfq_a&index=14', {volume: '0.5'}, {filter: 'audioonly'})).on("end", end => {
                            connection.channel.leave();
                        });
                    }).catch(console.error);
                    inCall = 1;
                }
                //Stadium Rave
                if(message.content.toLowerCase() === '!sponge' && summoned)
                {                
                    message.member.voice.channel.join().then(connection => 
                    {
                        connection.play(ytdl('https://www.youtube.com/watch?v=QOb9I_g19rw&list=PLm3DCZOWCOqxZKaaHT5BxdgXy1i2fWGGG&index=7', {volume: '0.5'}, {filter: 'audioonly'})).on("end", end => {
                            connection.channel.leave();
                        });
                    }).catch(console.error);
                    inCall = 1;
                }
                //Fornite Death Sound
                if(message.content.toLowerCase() === '!fortnite' && summoned)
                {                
                    message.member.voice.channel.join().then(connection => 
                    {
                        connection.play(ytdl('https://www.youtube.com/watch?v=la2tCfiXZYw', {volume: '0.5'}, {filter: 'audioonly'})).on("end", end => {
                            connection.channel.leave();
                        });
                    }).catch(console.error);
                    inCall = 1;
                }
                 //Halo Main Theme
                 if(message.content.toLowerCase() === '!xbox' && summoned)
                 {                
                     message.member.voice.channel.join().then(connection => 
                     {
                         connection.play(ytdl('https://www.youtube.com/watch?v=0jXTBAGv9ZQ', {volume: '0.5'}, {filter: 'audioonly'})).on("end", end => {
                             connection.channel.leave();
                         });
                     }).catch(console.error);
                     inCall = 1;
                 }
                  //Me? Gongaga
                  if(message.content.toLowerCase() === '!he' && summoned)
                  {                
                      message.member.voice.channel.join().then(connection => 
                      {
                          connection.play(ytdl('https://www.youtube.com/watch?v=kKnkhAQxLKI', {volume: '0.5'}, {filter: 'audioonly'})).on("end", end => {
                              connection.channel.leave();
                          });
                      }).catch(console.error);
                      inCall = 1;
                  }
                 //Rat Movie
                if(message.content.toLowerCase() === '!movie' && summoned)
                {                
                    message.member.voice.channel.join().then(connection => 
                    {
                        connection.play(ytdl('https://youtu.be/jAXioRNYy4s', {volume: '0.5'}, {filter: 'audioonly'})).on("end", end => {
                            connection.channel.leave();
                        });
                    }).catch(console.error);
                    inCall = 1;
                }
                //Rat Movie 2
                if(message.content.toLowerCase() === '!movie2' && summoned)
                {                
                    message.member.voice.channel.join().then(connection => 
                    {
                        connection.play(ytdl('https://youtu.be/mNy9HIo3shs', {volume: '0.5'}, {filter: 'audioonly'})).on("end", end => {
                            connection.channel.leave();
                        });
                    }).catch(console.error);
                    inCall = 1;
                }
            });
    }
});

