import sqlite from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new sqlite('./ecogo.sqlite');

const schema = `CREATE TABLE IF NOT EXISTS users(
	id INTEGER NOT NULL PRIMARY KEY, 
	username TEXT NOT NULL, 
	password TEXT NOT NULL,
	score INTEGER NOT NULL
)`;

db.exec(schema);

let sessions = [];

export const getUser = async (username) => {
	const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
	return Promise.resolve(row);
};

export const register = async (username, password) => {
	let user = await getUser(username);
	if (!user) {
		db.prepare('INSERT INTO users (username, password, score) VALUES (?, ?, ?)').run(
			username,
			password,
			0
		);
		return true;
	} else {
		return false;
	}
};

export const initSession = async (username) => {
	let user = await getUser(username);
	const session = {
		id: uuidv4(),
		username: user.username,
		score: user.score
	};
	sessions.push(session);
	return Promise.resolve(session);
};

export const getSession = (id) => {
	const session = sessions.find((session) => session.id === id);
	if (!session) return Promise.resolve(null);
	return Promise.resolve(session);
};

export const removeSession = (id) => {
	const session = sessions.find((session) => session.id === id);
	if (!session) return Promise.reject(new Error('Session not found'));
	sessions = sessions.filter((session) => session.id !== id);
	return Promise.resolve(session);
};
