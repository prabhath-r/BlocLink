/**
 * IPFS Configuration.
 */

const IPFS = require('ipfs-core');

// Initialize IPFS node
const node = IPFS.create();

async function addFile(buffer) {
    const { cid } = await node.add(buffer);
    return cid.toString();
}

module.exports = { addFile };

/**
 * TODO:
 * - Add utility functions for fetching and managing datas
 */