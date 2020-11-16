# Learn RedwoodJS (TEST)

A multi-lingual docs site for learning RedwoodJS.

Bootstrapped with [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world)

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
      page-1.md
      page-2.md
      somedir/
        another.md
    ja/
      page-1.md
      page-2.md
      somedir/
        another.md
```

Becomes:

```
..com/en/page-1
..com/en/page-2
..com/en/somedir/another
..com/ja/page-1
..com/ja/page-2
..com/ja/somedir/another
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

### Syncing English content

In the future, `src/content/en` docs should be synced from select redwoodjs.com content.

We will start with just `TUTORIAL.md`.

### Translation

[Gitlocalize](https://gitlocalize.com/) will be used keep locales synced with the content in `src/content/en`.

**Do not make direct PRs for translation to this repo.** All translation should be done through the Gitlocalize dashboard, which will generate PRs and notify when content has gone stale.

### How is this different than redwoodjs.com?

In an effort to make getting started with Redwood more accessible to wider audiences, this site extracts 'core learning content' like tutorials so that it can be continuously localized. Kinda like https://www.learnstorybook.com/

[redwoodjs.com](https://redwoodjs.com/) is the official site for Redwood and is thus the beacon of truth. That site has much more goodies like news, cookbooks, roadmaps, contribution guidelines, and of course: [stickers](https://redwoodjs.com/stickers).

### Roadmap

- language switcher
- handle untranslated content (default to EN?)
- dynamic side menu navigation
- UI string translation
- SEO (react-helmet-async)
- script for syncing `/content/en` with desired docs from redwoodjs.com
- special handling for TUTORIAL.md (break long md file into several pages by titles)
- style :)
- search
