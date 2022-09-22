const app = Vue.createApp({
  // ES6 shorthand
  data() {
    return {
      product: "Socks",
      description: "They make your feet very comfy and warm.",
      image: "./assets/images/socks_blue.jpg",
      url: "https://google.com/search?q=socks",
    };
  },
});
