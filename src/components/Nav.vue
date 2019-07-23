<template>
  <div id="nav">
    <!-- <div class="link">
      <router-link to="/about">About</router-link>
    </div>-->
    <div class="link">
      <router-link to="/education">Education</router-link>
    </div>
    <div class="link">
      <router-link to="/experience">Work Experience</router-link>
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
  padding-bottom: 0.5em;

  .link {
    color: #adb5bd;
    font-size: 1.3rem;
    margin-right: 0.5em;
    line-height: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    a {
      font-weight: 600;
      color: inherit;
      text-decoration: none;
      font-size: 1.2rem;

      &.router-link-exact-active {
        color: #f1685e;
      }
    }

    &:not(:last-child) {
      &::after {
        content: "";
        margin-top: 0.3em;
        width: 0.2em;
        height: 0.7em;
        background-color: #ced4da;
        font-size: 1rem;
        margin-left: 0.7em;
      }
    }
  }
}
</style>

