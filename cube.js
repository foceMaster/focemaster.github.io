document.getElementById('connectButton').addEventListener('click', connectToCube);

async function connectToCube() {
  try {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ services: ['your-cube-service-uuid'] }] // Replace with Giiker cube's service UUID
    });

    // Connect to the selected device
    const server = await device.gatt.connect();
    document.getElementById('status').textContent = 'Status: Connected to Cube';

    // You can now interact with the cube's services and characteristics
    const service = await server.getPrimaryService('your-cube-service-uuid');
    // Perform actions on the cube like reading data, sending commands, etc.
  } catch (error) {
    console.log('Connection failed', error);
    document.getElementById('status').textContent = 'Status: Connection Failed';
  }
}
