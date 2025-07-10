const socket = new WebSocket("wss://yourserver.com");

socket.onopen = () => {
  socket.send(JSON.stringify({ type: "join", username: "Paax" }));
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // Update other players or blocks
};
