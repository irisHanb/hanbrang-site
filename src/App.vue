<template>
  <div id="app">
    <Header />
    <div class="wrap">
      <Tech />
      <Nav />
      <router-view />
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import Tech from "./components/Tech";
import Nav from "./components/Nav";
import metaInfo from "./metaInfo.js";

export default {
  metaInfo,
  components: {
    Header,
    Tech,
    Nav
  }
};
</script>


<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.wrap {
  max-width: 1000px;
  padding: 0 1.5em;
  margin: 0 auto;
  padding-bottom: 5rem;
}
</style>
