# Build HTML Email using Vue + Markdown

A proof of concept [Nuxt](https://nuxt.com) website that... renders extremely compatible HTML email from Markdown + Vue components ([MDC]).

## Setup

Requirements: [Bun](https://bun.com) v1

1. Clone this repo
2. Run `bun install`
3. Start local dev with `bun run dev`
4. Navigate to `http://localhost:3000/markdown` to view the beautiful email compatible HTML

## How does it work?

### MJML

This project uses Nuxt and it's ecosystem's insane configurability to [build valid MJML](https://documentation.mjml.io/#overview) using [Nuxt Layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts), plugins, and configurations.

### Markdown?

[MDC] allows us to write Markdown and [customize the HTML the Markdown is converted to using Prose components](https://nuxt.com/modules/mdc#prose-components). In this project, Prose components are implemented using MJML components, so Markdown can be rendered to email compatible HTML with MJML.

## Why?

Because I can.

## Is this useful?

I don't know.

## Should I use this?

At your own risk.

## Limitations

- Doesn't support the fun MJML stuff
    - `mj-include`
    - custom components (probably just write them in Vue)
    - All the cool dynamic stuff
- Not all Prose components are implemented. Most aren't tbh.

## The Future

- [ ] Implement more Prose components
- [ ] Figure out `mj-head`
- [ ] Maybe just make this a nuxt module

[MDC]: https://nuxt.com/modules/mdc
