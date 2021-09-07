import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './database.sqlite',
});

export const Ticket = sequelize.define('Ticket', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	user: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	messages: {
		type: DataTypes.ARRAY(DataTypes.STRING),
	},
	status: {
		type: DataTypes.ENUM('OPEN', 'CLOSED'),
		defaultValue: 'OPEN',
	},
});

export const User = sequelize.define('User', {
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	tickets: {
		type: DataTypes.ARRAY(DataTypes.INTEGER),
	},
	blocked: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
});

sequelize.sync();
