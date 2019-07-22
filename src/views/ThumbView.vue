<template>
  <div class="thumb-view">
    <ul class="item-list">
      <li class="item" v-for="(item, idx) in list" :key="idx">
        <a :href="item.url" target="_blank" :style="{ backgroundImage: 'url(' + item.img + ')' }">
          <div class="item__texts">
            <p class="item__title">{{item.title}}</p>
            <p class="item__desc">{{item.desc}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { portfolio } from "../data";
export default {
  data() {
    return {
      list: portfolio.reverse()
    };
  }
};
</script>
<style lang="scss">
.thumb-view {
  .item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .item {
    transition: all 0.3s;
    width: 100%;
    height: 200px;
    padding-top: 1em;

    &__texts {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40%;
      padding: 0.5em 1em;
      background: rgba(0, 0, 0, 0.5);
      text-align: left;
    }

    &__title {
      font-size: 1rem;
      font-weight: 700;
    }
    &__desc {
      opacity: 0.9;
      font-size: 0.8rem;
      margin-top: 0.3em;
    }
  }
  a {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    -webkit-box-shadow: 0px 1px 5px 0px rgba(50, 50, 50, 0.3);
    -moz-box-shadow: 0px 1px 5px 0px rgba(50, 50, 50, 0.3);
    box-shadow: 0px 1px 5px 0px rgba(50, 50, 50, 0.3);

    border-radius: 0.7em;
    overflow: hidden;

    text-decoration: none;

    background-size: cover;
    background-position: center center;
    color: #fff;
  }
}

@media screen and (min-width: 768px) {
  .thumb-view {
    .item {
      width: 50%;
      padding: 0.5em;
      &:nth-child(2n + 1) {
        padding-left: 0;
      }
      &:nth-child(2n) {
        padding-right: 0em;
      }
    }
  }
}
</style>


