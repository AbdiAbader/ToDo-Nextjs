import Pool from 'pg-pool';
const POSTGRES_DB = process.env.POSTGRES_DB || 'postgresnext';
const POSTGRES_USER = process.env.POSTGRES_USER || 'postgres';
const POSTGRES_PORT = process.env.POSTGRES_PORT || '5432';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'post';
const POSTGRES_HOST = process.env.POSTGRES_HOST || 'nextjs-db-1';


const pool = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: Number(POSTGRES_PORT),
});

const createTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS todos (
            id SERIAL PRIMARY KEY,
            todo TEXT NOT NULL
        )
    `;
    await pool
        .query(query)
        .then(() => console.log("Table created"))
        .catch((err: any) => console.log(err));
}

createTable();

export default pool;
