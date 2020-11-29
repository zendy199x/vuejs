<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Default/Built in Derectives</h1>
        <p v-text="'Something else...'"></p>
        <p v-html="'<h1>This is heading one</h1>'"></p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-custom:background.delayed="'green'">
          Color style by directives Global
        </p>
        <p v-local-custom:background.delayed.blink="'green'">
          Color style by directives Local
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-custom": {
      bind(el, binding) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value;
          let secondColor = "blue";
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
