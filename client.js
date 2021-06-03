const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to the game server');

    conn.write("Name: JZL");
    conn.write("Say: Hi!");
  });

  conn.on('data', () => {
    console.log('you ded cuz you idled');
  });

  return conn;
};

module.exports = { connect };