# Learn RedwoodJS (TEST)

A multi-lingual docs site for learning RedwoodJS.

Bootstrapped with [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world)

### Run locally

`yarn start` to build pages from `src/content`

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
    ja/
      page-1.md
      page-2.md
```

Becomes:

```
..com/en/page-1
..com/en/page-2
..com/ja/page-1
..com/ja/page-2
```

The filename becomes the page slug. The language code because the meta language of the page and should match a valid [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

> Note on Chinese: figure out which language codes are suitable for traditional vs. simplified

### Translation

Gitlocalize

### Roadmap

- language switcher
- dynamic side menu navigation
- SEO (react-helmet-async)
- style :)
