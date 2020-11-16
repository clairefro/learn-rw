# Bienvenue chez Redwood

Bienvenue chez Redwood! Si vous ne l’avez pas encore fait, prenez le temps de lire [Redwood README](https://github.com/redwoodjs/redwood/blob/main/README.md) pour en savoir un peu plus sur les origines de Redwood et les problèmes qu'il entend résoudre. Redwood assemble plusieurs technologies de façon inédite et qui correspond à ce que nous pensons être le futur des applications web avec base de données.

Dans ce didacticiel, nous allons construire un moteur de blog. En réalité, un blog n’est probablement pas le candidat idéal pour une application construite avec Redwood: les articles peuvent être enregistrés dans un CMS et générées statiquement sous la forme de fichiers HTML servis par un CDN. Ceci étant, la plupart des développeurs comprennent intuitivement ce que recouvre ce type d’application, et un blog présente toutes les caractéristiques que nous souhaitons mettre en lumière. Nous avons donc décidé d'en construire un malgré tout.

Peut-être souhaitez-vous voir ce didacticiel en vidéo? C’est ici :

<div class="relative pb-9/16">
  <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/tiF9SdM1i7M?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0" allowfullscreen></iframe>
</div>

<div class="relative pb-9/16 mt-4">
  <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/SP5vbsWf5Yg?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0" allowfullscreen></iframe>
</div>

<div class="relative pb-9/16 mt-4">
  <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/eT7iIy0F8Tk?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0" allowfullscreen></iframe>
</div>

<div class="relative pb-9/16 mt-4">
  <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/UpD3HyuZkvY?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0" allowfullscreen></iframe>
</div>

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

👉 **Important:** Si votre système ne repond pas à ces prérequis, _l’installation se soldera par une ERREUR._ Vérifiez en exécutant les commandes suivantes dans un terminal:

```
node --version
yarn --version
```

Procédez aux mises à jour le cas échéant, puis relancez l’installation de RedwoodJS lorsque vous êtes prêt !

> **Installer Node et Yarn**
>
> Il y a différentes façons d’installer Node.js et Yarn. Si vous procédez à leur installation pour la première fois, nous vous recommandons de suivre les points suivants :
>
> **Yarn**
>
> - Nous recommandons de suivre les instructions fournies sur [Yarnpkg.com](https://classic.yarnpkg.com/en/docs/install/).
>
> **Node.js**
>
> - Pour les utilisateurs de **Linux** et **Mac**, `nvm` est un excellent outil pour gérer plusieurs versions de Node sur un même système. Il demande un petit effort à mettre en place. Dans les deux cas, utiliser la version la plus récente de [Nodejs.org](https://nodejs.org/en/) fonctionne très bien.
>   - Pour les utilisateurs de **Mac**, si vous avez dejà installé Homebrew, vous pouvez l’utiliser pour [installer `nvm`](https://formulae.brew.sh/formula/nvm). Dans le cas contraire, suivez les [instructions d'installation pour `nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).
>   - Pour les utilisateurs de **Linux**, vous pouvez suivre les [instructions d'installation pour `nvm`](https://github.com/nvm-sh/nvm#installing-and-updating).
> - Nous recommandons aux utilisateurs de **Windows** de visiter [Nodejs.org](https://nodejs.org/en/) pour savoir comment procéder.
>
> Si vous êtes un peu perdu au moment de choisir quelle version de Node utiliser, nous vous recommandons la plus récente LTS avec un numéro de version pair, actuellement il s'agit de la v12.
