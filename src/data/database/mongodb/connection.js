const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const { MongoClient } = require('mongodb');

const host = process.env.MONGO_HOST || 'localhost';
const port = process.env.MONGO_PORT || 27017;
const user = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const database = process.env.MONGO_INITDB_DATABASE;

const uri = `mongodb://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}:${port}/${database}?authSource=admin`;

const client = new MongoClient(uri, { serverSelectionTimeoutMS: 3000 });
let connectPromise = null;

function getClient() {
  if (!connectPromise) {
    connectPromise = client.connect();
  }
  return connectPromise;
}

async function checkHealth() {
  const start = Date.now();
  try {
    await getClient();
    await client.db(database).command({ ping: 1 });
    return { status: 'up', latencyMs: Date.now() - start };
  } catch (err) {
    connectPromise = null;
    return { status: 'down', error: err.message };
  }
}

module.exports = { client, checkHealth };
