<template>
  <div id="app">
    <Header />
      <div id="nav">
        <router-link to="/">Career</router-link>|
        <router-link to="/about">Skills</router-link>
      </div>
      <router-view />    
      
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  components: {
    Header
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
