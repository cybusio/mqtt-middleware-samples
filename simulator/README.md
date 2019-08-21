# Modbus Simulator

This project implements a simple modbus server that provides the following
datapoints:

## Function Code 3 (read holding register)

|---------|---------------------------------------------|----------|
| Address | Description                                 | Datatype |
|---------|---------------------------------------------|----------|
| 0       | Linear Counter that increments every 100ms  | uint16BE |
| 1       | Linear Counter that increments every second | uint16BE |
| 2       | Sine Wave                                   | uint16BE |
| 3       | Sine Wave with double frequency             | uint16BE |
| 4       | Random Number                               | uint16BE |
|---------|---------------------------------------------|----------|


## Installation

```
npm install
```

## Usage

```
node index.js [port]
```

default port is `8502`

