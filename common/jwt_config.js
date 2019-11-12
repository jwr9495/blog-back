module.exports = {
  jwtSecret: process.env.TOKEN_KEY || "woori",
  jwtSession: {
    session: false
  }
};
