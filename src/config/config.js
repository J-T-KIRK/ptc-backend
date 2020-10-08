const { config } = require("dotenv");
config();

module.exports = {
  MONGODB_URI: process.env.DB || "mongodb://localhost/apicompany",
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET
};