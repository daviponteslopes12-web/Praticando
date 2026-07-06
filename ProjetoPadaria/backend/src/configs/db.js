import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
});