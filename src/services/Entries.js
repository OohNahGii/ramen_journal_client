const hostname = 'http://localhost:3000'; // For local testing
const entriesPath = '/entries';
const entryPath = entriesPath + '/{id}';

export default {
  async getEntries() {
    const response = await fetch(hostname + entriesPath);
    return await response.json();
  },
  async getEntry(entryId) {
    const url = hostname + entryPath.replace('\{id\}', entryId);
    const response = await fetch (url);
    return await response.json();
  }
};