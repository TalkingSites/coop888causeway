// Site: http://localhost:8140  SpaceDash with local files, no sign-in: http://localhost:8140/admin/
// Its real preview comes from SpaceClub's server on :8092 (run `npm run build` once so it has the site's assets)
module.exports = {
  apps: [
    { name: '888causeway-website', script: 'npm', args: 'start -- --port 8140', cwd: __dirname },
    { name: '888causeway-website-cms', script: 'npx', args: 'decap-server', cwd: __dirname, env: { PORT: '8141' } },
    { name: '888causeway-website-preview', script: 'node_modules/spaceclub/server/index.cjs', cwd: __dirname, env: { PORT: '8092', SPACEDASH_LOCAL: '1' } },
  ],
};
