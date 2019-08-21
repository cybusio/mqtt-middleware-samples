'use strict'

const net = require('net')
const modbus = require('jsmodbus')
const netServer = new net.Server()
const holding = Buffer.alloc(10000)
const server = new modbus.server.TCP(netServer, {
  holding: holding
})

server.on('connection', function (client) {
  console.log('New Connection')
})

setInterval(() => {
  // 0 linear counter
  const counter = server.holding.readUInt16BE(0)
  server.holding.writeUInt16BE(counter + 1, 0)

  // 2 10 times slower counter
  server.holding.writeUInt16BE(Math.floor((counter + 1) / 10), 2)

  // 4 sine wave
  server.holding.writeUInt16BE(Math.floor(500 + 100 * Math.sin(counter / 20)), 4)

  // 6 faster sine wave
  server.holding.writeUInt16BE(Math.floor(500 + 100 * Math.sin(counter / 10)), 6)

  // 8 random value
  server.holding.writeUInt16BE(Math.floor(Math.random() * Math.pow(2, 16)), 8)

  // 100 control loop setPoint
  // 10 control loop output
  const targetValue = server.holding.readUInt16BE(100)
  const currentValue = server.holding.readUInt16BE(10)

  server.holding.writeUInt16BE(
    Math.round(currentValue + (targetValue - currentValue) * 0.1),
    10
  )
}, 100)

netServer.listen(process.argv[2] || 8502)
