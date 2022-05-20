import { createClient } from "redis";

const user = process.env.REDIS_CASINO_USER;
const pass = process.env.REDIS_CASINO_PASSWORD;
const customUrl = `redis://${user}:${pass}@redis-19817.c17.us-east-1-4.ec2.cloud.redislabs.com:19817`;

// const client = createClient({
//   url: customUrl,
// });

const masterUrl = `redis://@redis-19817.c17.us-east-1-4.ec2.cloud.redislabs.com:19817`;
const client = createClient({
  url: masterUrl,
  password: process.env.MASTER_PASS,
});

export default client;
