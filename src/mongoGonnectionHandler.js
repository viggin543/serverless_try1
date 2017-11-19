import { MongoClient } from 'mongodb';
import config from './config';

const {
  mongoHost, mongoPort,
  mongoUser, mongoPass
} = config;
const connectionString = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}/storage`;

let connection = false;
export const getConnection = async () => {
  console.log(connectionString);
  if (connection) return connection;

  connection = await MongoClient.connect(connectionString)
  .catch(error => {
    console.log("error blat")
    console.log(error)}
  );
  console.log("banana");
  return connection;

}