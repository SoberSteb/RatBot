import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", () => 
{
    //let us know the bot is online
    console.log("Ready to go!");
})

client.on("message", msg => 
{
    //Ignore message is sent by bot
    if(msg.author.bot)
    {
        return;
    }

    //Ignore messages that dont start with prefix
    if(!msg.content.startsWith(ConfigFile.config.prefix))
    {
            return;
    }

    //handle the command
    handleCommand(msg);
    //msg.channel.send(`${msg.author.username} just summoned the rats`);
})

async function handleCommand(msg: Discord.Message)

{
    //split the string into command and all of the args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    //loop through loaded commands
    for(const commandClass of commands)
    {
        //Attempt to execute code but ready in case of error
        try
        {
            //Check if command class is correct one
            if(!commandClass.isThisCommand(command))
            {
                //go to next iteration of loop
                continue;
            }

            //pause execution while run command code
            await commandClass.runCommand(args, msg, client);
        }
        catch(exception)
        {
            //If there is an error, log the exception
            console.log(exception);
        }
    }
} 

function loadCommands(commandsPath: string)
{
    //Exit is there are no commands
    if(!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0)
    {
        return;
    }

    //loop through all commands in config
    for(const commandName of ConfigFile.config.commands as string[])
    {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}
client.login(ConfigFile.config.token);