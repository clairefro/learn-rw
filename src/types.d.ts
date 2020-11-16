// Global types here. No import/export statements in this file.
// Types/interfaces are automatically exported and can be used anywhere in 'src' folder without import
type Languages = "en" | "fr"

interface Translation {
  [key: string]: {
    [key in Languages]: string
  }
}
// to satify typescript for un-typed third party module
declare module "react-syntax-highlighter/src/styles/prism" {}
