# svelte-v4-custom-elements-define

Demos an issue with manually defining custom elements in Svelte 4 (pre-release) using `customElements.define()`.


## Get started

Init repo

```bash
git clone https://github.com/patricknelson/svelte-v4-custom-elements-define.git
cd svelte-v4-custom-elements-define
npm i
```

Reproduce bug

```bash
git checkout main
npm run dev
```

Test workaround

```bash
git checkout workaround
npm run dev
```

## From scratch

Init base files

```bash
# select Svelte + JavaScript
npm init vite

# Install but overwrite with Svelte v4
npm i -D svelte@4.0.0-next.0
```

Update Svelte compiler options in `vite.config.js` to enable custom elements, i.e. `customElement: true`.
