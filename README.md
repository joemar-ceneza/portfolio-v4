# Joemar Ceneza — Portfolio

## What This Does

Personal portfolio site for Joemar Ceneza, a full-stack developer. Showcases projects, skills,
experience, and a contact form for recruiters and clients to get in touch.

## Tech Stack

- Next.js (App Router), TailwindCSS, TypeScript
- Zod for input validation
- Resend for contact form emails
- GitHub API for the live commits stat on the homepage

## Prerequisites

- Node.js 18+

## Setup

1. Clone the repo
2. `cp .env.example .env.local` — fill in your Resend and GitHub credentials
3. `npm install`
4. `npm run dev`

## API Overview

| Method | Endpoint            | Description                                 |
| ------ | ------------------- | -------------------------------------------- |
| POST   | /api/contact        | Send a message from the contact form via email |
| GET    | /api/github-commits | Total commit count for the homepage stats     |

## Pages

| Route      | Description                          |
| ---------- | ------------------------------------- |
| /          | Home — hero, intro, and stats         |
| /about     | About me, experience, education, skills |
| /work      | Project showcase                      |
| /services  | Services offered                      |
| /contact   | Contact form and contact info         |

## Project Structure

See CLAUDE.md for full structure details.
