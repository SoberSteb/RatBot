module.exports = {
	name: 'test',
	description: 'TestCommand',
	execute(message, args) {
		message.channel.send('Rats are being experimented on');
	},
};