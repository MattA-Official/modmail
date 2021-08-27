import { Client, CommandInteraction, MessageActionRow, MessageButton } from 'discord.js';

export const data = {
	name: 'button',
	description: 'Creates a button',
};

/**
 * @param {Client} client - The instantiated client object
 * @param {CommandInteraction} interaction - The Interaction object
 * @returns {void}
 */
export const execute = async (client, interaction) => {
	// create a button
	const button = new MessageButton()
		.setCustomId('primary')
		.setLabel('Press Me!')
		.setStyle('PRIMARY');

	// add button to an action row
	const row = new MessageActionRow().addComponents(button);

	// respond with the action row
	await interaction.reply({ content: 'This is a button:', components: [row] });
};
