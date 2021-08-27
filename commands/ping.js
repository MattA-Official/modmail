import { Client, CommandInteraction } from 'discord.js';

export const data = {
	name: 'ping',
	description: 'Replies with Pong!',
};

/**
 * @param {Client} client - The instantiated client object
 * @param {CommandInteraction} interaction - The Interaction object
 * @returns {void}
 */
export const execute = async (client, interaction) => {
	// Relpy with the client websocket ping
	await interaction.reply(`Pong! \`${client.ws.ping}\`ms`);
};
