import { Client } from 'discord.js';
import { commands, components, events } from './utils/registry.js';
import 'dotenv/config';

const client = new Client({
	intents: ['GUILDS', 'DIRECT_MESSAGES', 'GUILD_MESSAGES'],
});

client.commands = await commands('./commands');
client.buttons = await components('./components/buttons');
client.menus = await components('./components/menus');

await events(client, './events');

client.login(process.env.BOT_TOKEN);
