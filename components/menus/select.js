import { Client, SelectMenuInteraction } from 'discord.js';

// must be unique
export const id = 'select';

/**
 * @param {Client} client The instantiated client object
 * @param {SelectMenuInteraction} interaction The Interaction object
 * @returns {void}
 */
export const execute = async (client, interaction) => {
	// get the option selected
	const option = interaction.values[0];

	// reply with the selected option
	await interaction.reply(`${option} was selected!`);
};
