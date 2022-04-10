import sqlite from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';

const db = new sqlite('./ecogo.sqlite');

const usersSchema = `CREATE TABLE IF NOT EXISTS users(
	id INTEGER NOT NULL PRIMARY KEY, 
	username TEXT NOT NULL, 
	password TEXT NOT NULL,
	score INTEGER NOT NULL
)`;

db.exec(usersSchema);

const eventsSchema = `CREATE TABLE IF NOT EXISTS events(
	id INTEGER NOT NULL PRIMARY KEY, 
	title TEXT NOT NULL,
	lat FLOAT NOT NULL,
	long FLOAT NOT NULL,
	description TEXT NOT NULL,
	owner TEXT NOT NULL,
	date DATETIME,
	capacity INTEGER
)`;

db.exec(eventsSchema);

let sessions = [];

export const getUser = async (username) => {
	const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
	return Promise.resolve(row);
};

export const getUserScores = async () => {
	const users = db.prepare('SELECT * FROM users ORDER BY score DESC').all();
	return Promise.resolve(users);
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

export const updateScore = async (username, score) => {
	db.prepare('UPDATE users SET score=? WHERE username=?').run(score, username);
	return getUser(username);
}

export const initSession = async (username) => {
	let user = await getUser(username);
	const session = {
		id: uuidv4(),
		username: user.username
	};
	sessions.push(session);
	return Promise.resolve(session);
};

export const getSession = async (id) => {
	const session = sessions.find((session) => session.id === id);
	if (!session) return Promise.resolve(null);
	const user = await getUser(session.username);
	const newSession = {
		id: session.id,
		username: session.username,
		score: user.score
	}
	return Promise.resolve(newSession);
};

export const removeSession = async (id) => {
	const session = sessions.find((session) => session.id === id);
	if (!session) return Promise.reject(new Error('Session not found'));
	sessions = sessions.filter((session) => session.id !== id);
	return Promise.resolve(session);
};

export const getAllEvents = async () => {
	const events = db.prepare('SELECT * FROM events').all();
	return Promise.resolve(events);
};

export const addEvent = (title, lat, long, description, owner, date, capacity) => {
	console.log(title, lat, long, description, owner, date, capacity);
	db.prepare(
		'INSERT INTO events (title, lat, long, description, owner, date, capacity) VALUES (?, ?, ?, ?, ?, ?, ?)'
	).run(title, lat, long, description, owner, date, capacity);
};
