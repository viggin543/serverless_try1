import {MongoClient} from 'mongodb';
import config from './config';

const {
  mongoHost, mongoPort,
  mongoUser, mongoPass 
} = config;
const connectionString = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}/storage`;

let db = null;
export const getConnection = async () => {
  if(!db) {
    db = await MongoClient.connect(connectionString);
  }
  return db;
};