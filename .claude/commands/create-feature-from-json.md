---
name: create-feature-from-json
allowed-tools: Read, Write, Edit, Exit, Grep, Glob, Task, Bash
description: Create Feature from user stories
---

Run `jq '[.userStories[] | {id, passes, jobs: [.jobs[] | {name, status, dependsOn}]}]' feature.json` to check status.

1. If all userStories have `passes: true`, output `<Promise>COMPLETED</Promise>`
2. Find the first story where `passes: false`
3. Find runnable jobs: `dependsOn` is null OR the dependency job's status is `done`
4. Invoke each runnable job's agent in parallel via Task tool (read the full story data with `jq '.userStories[INDEX]'` to pass to each)
5. After all jobs for the story are `done`, set `passes: true`