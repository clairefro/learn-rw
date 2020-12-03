## Prérequis

Ce didacticiel suppose que vous soyez déjà familier avec quelques concepts fondamentaux :

- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [The Jamstack](https://jamstack.org/)

Vous pouvez tout à fait compléter ce didacticiel sans savoir quoique ce soit sur ces technologies, mais il est possible que vous soyez un peu perdu par certains termes que nous utiliserons sans forcément les expliquer au préalable. D'une façon générale, il est toujours utile de savoir où se situe les frontières et pouvoir distinguer par exemple ce qui provient de React de ce qui est ajouté par Redwood.

### Node.js et Yarn

Pendant l’installation, RedwoodJS commence par verifier si votre système possède les versions requises de Node et Yarn :

- node: ">=12"
- yarn: ">=1.15"

👉 **Important:** Si votre système ne repond pas à ces prérequis, *l’installation se soldera par une ERREUR.* Vérifiez en exécutant les commandes suivantes dans un terminal:

```
node --version
yarn --version
```

Please do upgrade accordingly. Procédez aux mises à jour le cas échéant, puis relancez l’installation de RedwoodJS lorsque vous êtes prêt !

> **Installing Node and Yarn**
> 
> **Installer Node et Yarn** Il y a différentes façons d’installer Node.js et Yarn. Si vous procédez à leur installation pour la première fois, nous vous recommandons de suivre les points suivants : **Yarn** - Nous recommandons de suivre les instructions fournies sur [Yarnpkg.com](https://classic.yarnpkg.com/en/docs/install/).
> 
> **Yarn**
> 
> - We recommend following the [instructions via Yarnpkg.com](https://classic.yarnpkg.com/en/docs/install/).
> 
> **Node.js**
> 
> - **Node.js** - Pour les utilisateurs de **Linux** et **Mac**, `nvm` st un excellent outil pour gérer plusieurs versions de Node sur un même système. Dans les deux cas, utiliser la version la plus récente de [Nodejs.org](https://nodejs.org/en/)  fonctionne très bien. 
>     - - Pour les utilisateurs de **Mac**, si vous avez dejà installé Homebrew, vous pouvez l’utiliser pour [installer `nvm`](https://formulae.brew.sh/formula/nvm). Dans le cas contraire, suivez les [instructions d'installation pour `nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).
>     - - Pour les utilisateurs de **Linux**, ous pouvez suivre les [instructions d'installation pour `nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).
> - - Nous recommandons aux utilisateurs de **Windows** de visiter [Nodejs.org](https://nodejs.org/en/) pour savoir comment procéder.
> 
> If you're confused about which of the two current Node versions to use, we recommend using the most recent "even" LTS, which is currently v14.
