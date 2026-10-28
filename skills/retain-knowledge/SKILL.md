---
name: retain-knowledge
description: Preserve practical lessons, verified solutions, and unresolved problems from the current conversation for future agents.
---

# Retain knowledge

Turn the current conversation into searchable, actionable knowledge for future agents. Review the available conversation, actions, and tool results systematically. If context was compacted or history is unavailable, disclose this limitation; do not invent missing details.

## Extract the knowledge

Identify significant problems and symptoms, exact error messages, verified causes, working solutions, commands and ordering, tests and results, failed approaches and why they failed, decisions and alternatives, constraints and prerequisites, useful techniques, explicit user preferences, and unfinished work. Prioritize reusable lessons over a chronological recap.

For each substantial lesson, record a searchable title, symptoms and conditions, scope, cause (distinguish verified facts from hypotheses), reproducible steps and relevant paths, verification and its limits, failed attempts, pitfalls, source or evidence, confidence, and a date when freshness matters. State what a future agent should check before applying the solution and when it may no longer apply. Do not imply a proposed or partially tested solution was proven to work.

Classify each record by its actual applicability: machine or user environment, project, or temporary task/session. Identify the machine or project where known. Choose the narrower scope if uncertain; don't turn temporary state into a general rule.

## Find and save

Discover available memory tools, MCP servers, skills and existing documentation. Check their real schemas, permissions, retention and scope where possible. Search for related knowledge before saving; update or supplement it if supported, avoid duplicate entries, and mark superseded or conflicting information without deleting prior knowledge merely because it differs.

If agentmemory is available, use its actual search and save tools and supported fields, including useful keywords, project and file references. Otherwise use an appropriate existing memory or documentation mechanism that future agents can access. If none exists, create suitable documentation in an authorized, accessible location, respecting project conventions. Separate machine-level from project-level knowledge when supported. Tags alone do not prove access isolation, machine scope, persistence, or cross-agent sharing. If an appropriate scope is unavailable, state the limitation and save only in a permitted, suitable location. Do not modify unrelated configuration or install software to make storage available.

Exclude credentials, tokens, API keys, passwords and unnecessary sensitive information; use placeholders for secrets. Follow existing permissions, workspace boundaries, and security rules. Do not perform unrelated system changes or deployments. Do not promise future agents will automatically retrieve knowledge; recommend searching prior records and checking current conditions before applying them.

## Verify and report

Read back or search a representative sample of saved records if supported and verify both contents and discoverability. Report in the user's language: topics saved; actual storage locations and scopes; which records were verified; failures, omissions and unresolved work; access or sharing limitations; and any unavailable conversation history. Never claim a save succeeded unless confirmed. If saving is impossible, provide the prepared knowledge and the steps needed to store it.
