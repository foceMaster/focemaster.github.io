document.getElementById('connectButton').addEventListener('click', connectToCube);

async function connectToCube() {
  try {
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true, // Allows discovering any Bluetooth device
      optionalServices: []   // You can specify empty or discover services later
    });

    console.log('Selected device:', device.name || 'Unnamed device');
    const server = await device.gatt.connect();
    console.log('Connected to GATT server:', server);

    // List all available services (UUIDs will be shown)
    const services = await server.getPrimaryServices();
    console.log('Available services:');
    for (const service of services) {
      console.log(`- ${service.uuid}`);
    }
  } catch (error) {
    console.error('Failed to connect:', error);
  }
}
