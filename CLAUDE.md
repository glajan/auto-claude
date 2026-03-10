# Project: MyApp

## Stack
Next.js 16, TypeScript 6, Tailwind CSS 4

## Rules
- Write tests for every feature (Jest)
- Run `npm run lint && npm test` before committing
- One issue per branch
- Branch names: `claude/issue-{number}`
- Commit format: conventional commits

## Coding Standards
Read and follow these skill documents when writing React/Next.js code:
- `.claude/skills/react-best-practices.md` — performance optimization rules
- `.claude/skills/composition-patterns.md` — component composition patterns

## Workflow
1. Pick an open GitHub Issue labeled `claude-todo`
2. Create a branch
3. Build the feature
4. Run lint and tests — fix all failures
5. Commit, push, open a PR that closes the issue
6. Label the PR `claude-built`
