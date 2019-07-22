<template>
  <div id="nav">
    <div class="link">
      <router-link to="/">Education</router-link>
    </div>
    <div class="link">
      <router-link to="/experience">Experience</router-link>
    </div>
    <div class="link">
      <router-link to="/portFolio">PortFolio</router-link>
    </div>
  </div>
</template>
<style lang="scss">
#nav {
  margin-top: 3em;
  margin-bottom: 2em;
  display: flex;
  border-bottom: 0.2rem solid #f1685e;
  padding-bottom: 0.3em;

  .link {
    color: #adb5bd;
    font-size: 1.3rem;
    margin-right: 1em;
    line-height: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    a {
      // width: 100%;
      font-weight: 600;
      color: inherit;
      text-decoration: none;
      font-size: 1.3rem;

      &::before {
        content: "●";
        font-size: 1.3rem;
      }

      &.router-link-exact-active {
        color: #f1685e;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  #nav {
    .link {
      a {
      }
    }
  }
}
</style>

