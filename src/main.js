import svelteRetag from 'svelte-retag';
import ExampleElement from './lib/ExampleElement.svelte';

// Pull HTMLElement from .element property.
//customElements.define('example-element', ExampleElement.element);

// Define the custom element instead via svelte-retag and passing the Svelte component directly.
svelteRetag({
	component: ExampleElement,
	tagname: 'example-element',
});
