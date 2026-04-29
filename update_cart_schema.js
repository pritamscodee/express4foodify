import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();
const client = postgres(process.env.DATABASE_URL);

async function updateCartSchema() {
  try {
    console.log('Updating Cart table schema...');
    

    const idResult = await client`SELECT column_name FROM information_schema.columns WHERE table_name = 'cart' AND column_name = 'id'`;
    
    if (idResult.length === 0) {
      console.log('Adding id column...');
      await client`ALTER TABLE cart ADD COLUMN id serial PRIMARY KEY`;
      console.log('ID column added successfully');
    } else {
      console.log('ID column already exists');
    }
    

    const userIdResult = await client`SELECT column_name FROM information_schema.columns WHERE table_name = 'cart' AND column_name = 'userId'`;
    
    if (userIdResult.length === 0) {
      console.log('Adding userId column...');
      await client`ALTER TABLE cart ADD COLUMN userId integer NOT NULL DEFAULT 1`;
      console.log('UserId column added successfully');
    } else {
      console.log('UserId column already exists');
    }
    

    const finalSchema = await client`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'cart' ORDER BY ordinal_position`;
    console.log('Final Cart table schema:', finalSchema);
    
  } catch (error) {
    console.error('Error updating schema:', error);
  } finally {
    await client.end();
  }
}

updateCartSchema();
