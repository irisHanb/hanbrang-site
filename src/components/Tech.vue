<template>
  <div class="tech">
    <ul class="tech__list">
      <li class="tech__item" v-for="(item, idx) in tech">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tech: [
        "HTML",
        "CSS",
        "CSS3",
        "Responsive",
        "Node.js",
        "Javascript",
        "Vue",
        "Vue-Router",
        "Vuex",
        "React"
      ]
    };
  }
};
</script>

<style lang="scss">
.tech {
  margin-top: 0.5em;
  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  &__item {
    display: inline-block;
    padding: 0.5em 0.8em;
    margin: 0.1em 0.3em;
    background-color: #e9ecef;
    color: #868e96;
    font-weight: 500;
    border-radius: 1em;
  }
}
</style>




