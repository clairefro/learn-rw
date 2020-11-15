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

Page paths are determined by the file tree structure in `src/content`

So,

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

The filename becomes the page slug. The language code becomes the meta language of the page and should match a valid [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

> Note on Chinese: figure out which language codes are suitable for traditional vs. simplified

### Syncing English content

In the future, `src/content/en` docs should be synced from select redwoodjs.com content.

We will start with just `TUTORIAL.md`.

### Translation

[Gitlocalize](https://gitlocalize.com/) will be used keep locales synced with the content in `src/content/en`.

**Do not make direct PRs for translation to this repo.** All translation should be done through the Gitlocalize dashboard, which will generate PRs and notify when content has gone stale.

### How is this different than redwoodjs.com?

In an effort to make getting started with Redwood more accessible to wider audiences, this site extracts 'core learning content' like tutorials so that it can be continuously localized. Kinda like https://www.learnstorybook.com/

[redwoodjs.com](https://redwoodjs.com/) is the official site for Redwood and is thus the beacon of truth. That site has much more goodies like news, cookbooks, roadmaps, contribution guidelines, and of course: [stickers](https://redwoodjs.com/stickers).

### Accessing & updating selected language

Content language can be selected from a dropdown in the navbar.

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
