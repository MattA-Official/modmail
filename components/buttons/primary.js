import { Client, ButtonInteraction } from 'discord.js';

// must be unique
export const id = 'primary';

/**
 * @param {Client} client - The instantiated client object
 * @param {ButtonInteraction} interaction - The Interaction object
 * @returns {void}
 */
export const execute = async (client, interaction) => {
	// reply to the button press
	await interaction.reply('You pressed the button');
};
