# ts-start-setup

A boilerplate for setup Typescript projects with: eslint, husky, lint-staged, prettier and jest

## Setup Steps

```
1 - git init
1.1 - configure .gitignore
2 - npm init -y
3 - yarn add -D typescript @types/node
4 - tsc --init
5 - yarn add -D ts-node
6 - yarn add -D nodemon
7 - yarn add -D prettier eslint eslint-config-prettier
  7.1 - npx eslint --init OR npm init @eslint/config
    ✔ How would you like to use ESLint? · problems
    ✔ What type of modules does your project use? · esm
    ✔ Which framework does your project use? · none
    ✔ Does your project use TypeScript? · No / Yes
    ✔ Where does your code run? · browser
    ✔ What format do you want your config file to be in? · JSON
    ✔ Would you like to install them now? · No / Yes
    ✔ Which package manager do you want to use? · yarn
  7.2 - Reload vscode : ctrl + shift + p
  7.3 - Test Lint: npx eslint --ext ".ts" --ignore-path .gitignore .
  7.4 - Configure .eslintrc.json
  7.5 - Configure .prettierrc.json
  7.6 - Configure Setting.json
  7.6.1 - Editor: Format On Save ✔
  7.6.2 - Editor: Default Formatter: Prettier Code-Fomarter
8 - yarn add -D husky lint-staged
  8.1 - add husky:prepare on package.json
  8.2 - execute yarn husky:prepare
  8.3 - Configure .lintstagedrs.json
  8.4 - Create pre-commit -> npx husky add .husky/pre-commit "yarn lint-staged"
  8.5 - set husk as executable -> chmod ug+x .husky/pre-commit
9 - yarn add -D jest @types/jest ts-jest
  9.1 - Configure jest.config.js
  9.2 - Add script on package.json -> test: -> jest --passWithNoTests
  9.2 - Add script on package.json -> test:watch -> yarn test --watch
  9.3 - Add script on package.json -> test:staged -> yarn test --findRelatedTests
  9.4 - Add script on package.json -> test:push -> yarn test --converage
  9.5 - Create pre-push -> npx husky add .husky/pre-push "yarn test:push"
  9.6 - set husk as executable -> chmod ug+x .husky/pre-push
10 - configure path mapper
  10.1 - configure tsconfig->
                                      "paths": {
                                          "@/*": ["*"]
                                        },
                                        "baseUrl": "src"
  10.2 - configure jest.config
                                        moduleNameMapper: {
                                          "@/(.*)": "<rootDir>/src/$1",
                                        },
  10.3 - yarn add -D tsconfig-paths
  10.4 - Configur tsconfig-paths for script dev on package.json ->   "-r tsconfig-paths/register"
  10.5 - yarn add -D tsc-alias
  10.4 - Configur tsconfig-paths for script build on package.json ->   "&& tsc-alias"
11 - install and configure express
  11.1 - yarn add express
  11.1 - yarn add -D @types/express
12 -  Configure conventional commits by git-commit-msg-linter
  12.1 - yarn add -D git-commit-msg-linter
  12.1 - execute npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1" 
```      
