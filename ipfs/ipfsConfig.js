/**
 * IPFS Configuration.
 * 
 * This file sets up the IPFS node and provides utility functions for 
 * interacting with IPFS. IPFS provides decentralized storage, making it 
 * a crucial component for our application.
 * 
 */

const IPFS = require('ipfs-core');

// Initialize IPFS
const node = await IPFS.create();

// Sample function to add a file to IPFS
async function addFile(buffer) {
    const { cid } = await node.add(buffer);
    return cid.toString();
}

module.exports = { addFile };

/**
 * TODO:
 * - Add more utility functions for fetching and managing data on IPFS.
 * - Optimize data storage to reduce costs and increase efficiency.
 * - Implement mechanisms to ensure data availability and persistence.
 */