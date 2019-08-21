# mqtt-middleware-samples
This repository contains samples to work with Cybus Connectware MQTT Middleware features

## 1. Create a data source

The ``simulator`` directory contains a simple modbus tcp server that can be used as a data source

## 2. Connect the modbus device

Use the `samples/modbus-source.yaml` commissioning file to connect the modbus raw data to your Cybus Connectware. Visit the Explorer and observe raw data flowing

## 3. Install the digital twin

Use the `samples/simple-digital-twin.yaml` to create a data mapping that creates a combined JSON with live process values from your modbus server

## 4. Play!
