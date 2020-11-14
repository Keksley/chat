<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap");

$basic-color: #333;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
  color: $basic-color;
  font-size: 16px;
  font-weight: 400;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("assets/bg.svg");
  height: 100vh;
}
</style>
