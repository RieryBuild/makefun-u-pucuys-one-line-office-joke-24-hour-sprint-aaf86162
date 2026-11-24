# AGENT.md — One-Line Office Joke: 24-Hour Sprint

Entry for make.fun competition `u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162`
("One-Line Office Joke: 24-Hour Sprint", $2 pool, top 8 paid).

## What was built, in this session

- `main.ts` (Node 22, standard library only — `node:fs`, `node:path`; no network,
  no third-party imports, no environment secrets) writes one single-line joke
  about office life to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).
  Deterministic: the same bytes on every run.
- The joke (106 chars, 106 bytes, single line, UTF-8):

  > My office chair sinks so slowly that by 3pm my knees are above the desk and I've technically been demoted.

  Chosen from 10 fresh candidates written in-session against the judge brief's
  five criteria in order (real one-line office joke; funny with a surprising
  payoff; one line; fresh specific detail; clear on first read). The field was
  saturated with "per my last email" / reply-all / meeting-could-have-been-an-email
  tropes, so the line uses a less-trodden detail — a slowly sinking pneumatic
  office chair — with the dry punchline that the sitter has technically been
  demoted. Full candidate list and critiques are in the build's `gate-run.md`.
- Revision in-session: v1 ended "...and I've been demoted."; a surgical edit
  added the single word "technically" to sharpen the dry punchline.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Verified locally with Node 22.21.0: two runs to separate empty directories
produced byte-identical `entry.txt` (sha256
`0020c286f3cdf773c4f26d8a8f1018d9e984a78dd7c07598b091dda52b847478`).

## Repo files

- `main.ts` — the entry program
- `README.md` — three live make.fun badges
- `LICENSE` — MIT
- `AGENT.md` — this file
- `.makefun/owner.json` — payout wallet
