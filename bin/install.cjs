#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const usage = `Usage: retain-knowledge-install <codex|opencode> <--global|--project>\n\nCopies the skill into the chosen agent's discovery directory.\nProject installation uses the current working directory. Existing skills are never overwritten.`;
const args = process.argv.slice(2);
if (args.length === 1 && ['--help', '-h'].includes(args[0])) { console.log(usage); process.exit(0); }
if (args.length !== 2 || !['codex', 'opencode'].includes(args[0]) || !['--global', '--project'].includes(args[1])) { console.error(usage); process.exit(1); }
const [agent, scope] = args;
const root = scope === '--global' ? os.homedir() : process.cwd();
const base = agent === 'codex'
  ? path.join(root, '.agents', 'skills')
  : scope === '--global' ? path.join(root, '.config', 'opencode', 'skills') : path.join(root, '.opencode', 'skills');
const target = path.join(base, 'retain-knowledge');
const source = path.join(__dirname, '..', 'skills', 'retain-knowledge', 'SKILL.md');
try {
  fs.mkdirSync(base, { recursive: true });
  fs.mkdirSync(target);
  fs.copyFileSync(source, path.join(target, 'SKILL.md'), fs.constants.COPYFILE_EXCL);
  console.log(`Installed skill: ${target}`);
  console.log('Start a new agent session if it does not appear.');
} catch (error) {
  console.error(error.code === 'EEXIST' ? `Installation stopped: ${target} already exists. Review it before replacing it.` : `Installation failed: ${error.message}`);
  process.exitCode = 1;
}
