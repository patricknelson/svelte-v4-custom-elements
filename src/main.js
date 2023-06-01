import ExampleElement from './lib/ExampleElement.svelte';

// Pull HTMLElement from .element property.
// BUG: Vite HMR doesn't work, changes to .svelte files still require manual refresh.
customElements.define('example-element', ExampleElement.element);
