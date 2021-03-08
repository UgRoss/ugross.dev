# [ugross.dev](https://ugross.dev)

![license](https://img.shields.io/github/license/ugross/ugross.dev)
![dependencies](https://img.shields.io/david/ugross/ugross.dev)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9ac535ad84b14490a3719360dd41fa20)](https://www.codacy.com/app/ugr.ross/ugross.dev?utm_source=github.com&utm_medium=referral&utm_content=UgRoss/ugross.dev&utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/UgRoss/ugross.dev.svg?branch=master)](https://travis-ci.org/UgRoss/ugross.dev)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ca91ffe5-00a5-4045-9fc9-6db2a18e18db/deploy-status)](https://app.netlify.com/sites/ugross/deploys)

My personal blog and information about me.

## 🚀 Quick start

Install dependencies:

```bash
npm i
```

Start a development server:

```bash
npm run dev
```

Visit `https://localhost:8000`

## Folder structure

```txt
.
├── content                 # Markdown files. Blog Posts and Pages content
│   ├── pages               # Pages content that is used by `src/pages`
│   ├── posts               # Blog posts that are generated by Gatsby
├── src                     # Source files (react code, styles...)
│   ├── @types              # Global TypeScript typings
│   ├── components          # React components + their styles
│   ├── config              # Configuration files
│   ├── hooks               # React hooks
│   ├── images              # Images that are imported inside ts/tsx files
│   ├── pages               # Gatsby pages
│   ├── styles              # Global styles (class-less styles + utilities)
│   ├── templates           # Gatsby templates for programmatically creating pages
│   ├── types               # Non-global TypeScript typings
│   ├── html.tsx            # Gatsby custom default HTML
│   └── utils.ts            # Global utilities
├── static                  # Global static files
├── .husky                  # Husky git hooks
├── .editorconfig           # Consistent coding styles config
├── .eslintrc               # ESLint config
├── .graphqlconfig          # GraphQL IntelliJ Plugin config (generates schema.graphql)
├── .prettierrc             # Prettier config
├── .stylelintrc            # Stylelint config
├── .travis.yml             # Travis CI configuration
├── gatsby-config.js        # Gatsby plugins and general configuration
├── gatsby-node.js          # Gatsby data layer control
├── graphql-codegen.yml     # GraphQL codegen config (generates TypeScript typings for GraphQL operations)
├── schema.graphql          # GraphQL schema automatically generated based on .graphqlconfig
├── LICENSE
└── README.md
```

## License

The following directories and their contents are Copyright Rostyslav Ugryniuk. You may not reuse anything therein without my permission:

```bash
content/
static/
```

All other directories and files are MIT Licensed (where applicable).

---

_If you noticed any kind of error please let me know [here](https://github.com/UgRoss/ugross.space/issues/new)._
