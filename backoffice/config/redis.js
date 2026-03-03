const redis = require("redis");

const client = redis.createClient({
  host: process.env.REDIS_HOST || "redis_server",
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD,
});

client.on("connect", () => {
  console.log("Connected to Redis");
});

client.on("error", (err) => {
  console.error("Redis error:", err);
});

module.exports = client;
