const IPFS = require('ipfs-core');

// Initialize IPFS
const node = await IPFS.create();

// Sample function to add a file to IPFS
async function addFile(buffer) {
    const { cid } = await node.add(buffer);
    return cid.toString();
}

module.exports = { addFile };
