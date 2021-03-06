# Learn RedwoodJS (TEST)

A multi-lingual docs site for learning RedwoodJS.

Bootstrapped with [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world)

### Translation status

Know a language? Help us translate over at our [Gitlocalize repo](https://gitlocalize.com/repo/5536)

[![gitlocalized ](https://gitlocalize.com/repo/5536/fr/badge.svg)](https://gitlocalize.com/repo/5536/fr?utm_source=badge)

### Run locally

`yarn start` to build pages from `src/content`

### Tech stack

- Gatsby
- Typescript
- Tailwind

### How it works

Page building logic can be found in `gatsby-node.js`.

#### Content structure

Markdowns are structured in a directory structure that becomes the url path.

The filename becomes the page slug. The language code becomes the meta language of the page and should match a valid [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

> Note on Chinese: figure out which language codes are suitable for traditional vs. simplified

```
src/
  content/
    en/
      tutorial/
        welcome.md
    ja/
      tutorial/
        welcome.md

```

Becomes:

```
..com/en/tutorial/welcome
..com/ja/tutorial/welcome

```

#### Sidebar

A sidebar nav is generated half-manually. We define translations for section titles, and the order we want markdown files to appear in each section via the `paths` array.

Titles for each page inside a section is automatically generated from the first header to appear in that markdown file, and links for each language are automatically supplied so you only define the paths once.

```ts
const linkPaths: SidebarLinkPaths = {
  Tutorial: {
    sectionTitle: {
      en: "Tutorial",
      fr: "Didacticiel",
    },
    paths: [
      "tutorial/welcome-to-redwood",
      "tutorial/installation-and-starting-development",
      "tutorial/our-first-page",
    ],
  },
}
```

#### Language switcher

A language switcher in the navbar updates the selected language in the global state, which can be accessed from any component using a `useLanguageContext()` hook.

`selectedLang` (get) and `changeLang` (set) are globally available via React Context API from `LanguageProvider`

the `useLanguageContext()` hook can be used from any component to get the currently selected language.

```tsx
import { PageProps } from "gatsby"
import React, { FC } from "react"
import { useLanguageContext } from "../context/languageContext"

const UselessComponent: FC<PageProps> = props => {
  const { selectedLang, changeLang } = useLanguageContext()
  console.log({ selectedLang }) //=> defaults to 'en'

  return (
    <div>
      <button onClick={() => changeLang("fr")}>
        Change language to French!
      </button>
    </div>
  )
}
```

### Translation

[Our Gitlocalize](https://gitlocalize.com/repo/5536) will be used keep locales synced with the content in `src/content/en`.

**Do not make direct PRs for translation to this repo.** All translation and edits to non-English content should be done through the Gitlocalize dashboard, which will generate PRs and notify when content has gone stale.

Any missing translations for any given language will default to the English text with a little "help us translate!" warning and link.

### Adding a new (English) page

1. Add page to appropriate subfolder in `content/en`
2. Add page to desired location in Sidebar component

### Adding a new language

1. Add gitlocalize workflow for that language, mapping source (English) content to directories prefixed with that language's code
2. Add that language code to the `Languages` union in `types.d.ts`
3. Add UI string translations in components
4. Add lang to `LanguageSwitcher` options
5. Add language code to `config.publishedLanguages` when ready to publish a language

### How is this different than redwoodjs.com?

In an effort to make getting started with Redwood more accessible to wider audiences, this site extracts 'core learning content' like tutorials so that it can be continuously localized. Kinda like https://www.learnstorybook.com/

[redwoodjs.com](https://redwoodjs.com/) is the official site for Redwood and is thus the beacon of truth. That site has much more goodies like news, cookbooks, roadmaps, contribution guidelines, and of course: [stickers](https://redwoodjs.com/stickers).

### Todos

- get iframes to show up (a matter of tailwind styling)
- add links to redwoodjs.com
- redirects for unused pages (index, each doc category root)
- UI string translation
- sidebar: highlight active page (slug match)
- SEO (react-helmet-async)
- responsive sidebar and nav
- style :)
- search
- "Next" button to navigate to next item in sidebar
- 404 page
- better favicon
