import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "Kimi number two",
  },
});

export default app;
