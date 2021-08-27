import { Client } from 'discord.js';
import 'dotenv/config';

// event name - required to bind event to function
export const name = 'ready';
// once - only execute the function once
export const once = true;

/**
 * @param {Client} client The instantiated client object
 * @returns {void}
 */
export const execute = async (client) => {
	console.log(`Logged in as ${client.user.tag}`);

	const cmds = await client.application.commands.fetch({
		guildId: process.env.GUILD_ID || undefined,
	});

	// delete/edit already registered commands
	cmds.each(async (command) => {
		const cmd = client.commands.get(command.name);
		if (!cmd)
			client.application.commands.delete(command, process.env.GUILD_ID || undefined);
		else {
			const c = await client.application.commands.create(
				cmd.data,
				process.env.GUILD_ID || undefined
			);
			if (cmd.permissions) c.permissions?.set({ permissions: cmd.permissions });
			client.commands.set(cmd.name, { ...cmd, registered: true });
		}
	});

	// register new commands
	client.commands
		.filter((c) => c.registered !== true)
		.each(async (command) => {
			const cmd = await client.application.commands.create(
				command.data,
				process.env.GUILD_ID || undefined
			);
			if (command.permissions) cmd.permissions?.set({ permissions: command.permissions });
		});

	console.log('Registered all commands');
};
