import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();
const client = postgres(process.env.DATABASE_URL);

async function checkRoleColumn() {
  try {
    const result = await client`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'users' ORDER BY ordinal_position`;
    console.log('Users table columns:', result);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.end();
  }
}

checkRoleColumn();
