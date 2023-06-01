import ExampleElement from './lib/ExampleElement.svelte';

// ExampleElement is now a Svelte component and thus not compatible with customElements.define()
// NOTE: See 'workaround' branch for alternative.
customElements.define('example-element', ExampleElement);
