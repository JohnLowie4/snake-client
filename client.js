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

    // setInterval is the same as setTimeout
    // but it executes the function every certain interval set by the user
    // setTimeout(function () { conn.write("Move: up") }, 3000);
    // setTimeout(function () { conn.write("Move: right") }, 6000);
    // setTimeout(function () { conn.write("Move: down") }, 9000);
    // setTimeout(function () { conn.write("Move: left") }, 12000);
  });

  conn.on('data', () => {
    console.log('you ded cuz you idled');
  });

  return conn;
};

module.exports = {connect};