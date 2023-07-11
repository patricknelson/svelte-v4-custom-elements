# svelte-v4-custom-elements

Special repo setup strictly for demoing bugs or other issues with custom elements in Svelte 4 (for use in Github issues).


## Get started

Init repo

```bash
git clone https://github.com/patricknelson/svelte-v4-custom-elements.git
cd svelte-v4-custom-elements
npm i
```

Reproduce bug

```bash
git checkout BRANCH_NAME
npm run dev
```


## From scratch

Init base files

```bash
# select Svelte + JavaScript
npm init vite

# Install Svelte v4 (if not already present)
npm i -D svelte@4.0.0
```

Update Svelte compiler options in `vite.config.js` to enable custom elements, i.e. `customElement: true`.
