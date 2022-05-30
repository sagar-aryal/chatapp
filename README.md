# chatapp
Live chat application using socket.io.

## Introduction
Sockets have traditionally been the solution around which most real-time chat systems are architected, providing a bi-directional communication channel between a client and a server. Whenever we write a chat message, the idea is that the server will get it and push it to all other connected clients.
This chatapp is build under this library that enables low-latency, bidirectional and event-based communication between a client and a server that is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection.

## Learning outcomes
How can we use socket io with nodejs and expressjs to provide live communication?

## Goals
The goal is to set up a simple HTML webpage that serves out a form and a list of messages by using nodejs, expressjs and socket io to the end that connect client and server with real-time chat bi-directional communication.
