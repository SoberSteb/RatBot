var commandsList = fs.readFileSync('C:\Users\kamju\ratbot\commands\commands.txt', 'utf8');
module.exports = {
	name: 'help',
	description: 'Heres what you can do',
	execute(message, args) {
		message.channel.send(commandsList);
	},
};