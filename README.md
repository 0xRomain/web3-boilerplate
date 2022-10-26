# web3-boilerplate

## Motivation 

- Most existing boilerplates bring too many dependencies, or are not maintained anymore
- Let anyone choose their dependencies by documenting all the steps done to build the boilerplate 

## Stacks

- ReactJS 
- TypeScript 
- Tailwind
- React Router

## Dev stacks

- ESLint
- Prettier

## Steps 

- Init the react app with typescript: `npx create-react-app@latest my-app --template typescript`
- Install ESLint: `npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript`
- Install Tailwind: 
    - `npm install -D tailwindcss postcss autoprefixer`
    - `npx tailwindcss init -p`

## VSCode useful plugins

- Tailwind CSS IntelliSense: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss