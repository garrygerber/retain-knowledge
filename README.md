# Retain Knowledge

An Agent Skill that turns a conversation's verified solutions, failed attempts, decisions and unresolved work into searchable records for future agents. It uses an available memory provider or permitted documentation; it does not install a memory server or guarantee future retrieval.

## Install

Requires Node.js 18 or later. Run one of:

```sh
npx --yes --package @garrygerber/retain-knowledge retain-knowledge-install codex --global
npx --yes --package @garrygerber/retain-knowledge retain-knowledge-install opencode --global
```

Use `--project` instead of `--global` to install in the current project. The installer copies the skill only on explicit invocation and never overwrites an existing skill directory. Codex uses `.agents/skills` in the home or current project directory; OpenCode uses `~/.config/opencode/skills` or `.opencode/skills` in the current project. Restart the session if discovery does not update.

Alternatively copy `skills/retain-knowledge` into a supported skills directory manually. Read the skill and installer before running code from any package.

## Use

At the end of a conversation, explicitly invoke `retain-knowledge` using the agent's skill selector, or ask it to use the retain-knowledge skill. In Codex, `$retain-knowledge` invokes the skill. OpenCode can load the skill by name; the exact UI depends on the version. This is a skill, not automatically a `/retain-knowledge` command.

Review the final report to confirm where the knowledge was saved and whether it was read back. Sharing between agents requires both to have access to the same storage and sufficient permissions. Compacted or inaccessible conversation history cannot be reconstructed reliably.

## Publishing

Inspect the files with `npm pack --dry-run`. After testing and signing in with a verified npm account and 2FA, use `npm publish --access public` for a public scoped package. See npm's current publishing and authentication documentation.

## License

MIT. See [LICENSE](LICENSE).
