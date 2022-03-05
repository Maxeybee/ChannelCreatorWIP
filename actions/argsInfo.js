module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	execute(message, args) {
        let concatenateElements = " "
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else {
            args.forEach(element => {
                concatenateElements += ' ' + element;
            });
            return message.channel.send("args : " + concatenateElements);
		}

		//message.channel.send(`First argument: ${args[0]}`);
	},
};