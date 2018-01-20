import {Db, MongoClient} from 'mongodb';
import config from './config';

const {
  mongoHost, mongoPort,
  mongoUser, mongoPass
} = config;
const connectionString = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}/storage`;

let conn : Db  = false;
export const getConnection  = async ()  => {
  console.log("connecting to db...");
  if (conn) return conn;

  conn = await MongoClient.connect(connectionString)
  .catch(error => {
    console.log("error blat")
    console.log(error)}
  );
  console.log("banana");
  return conn;

};