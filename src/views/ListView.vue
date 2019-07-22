<template>
  <div class="list-view">
    <ul class="item-list">
      <li class="item" v-for="(item, idx) in list" :key="idx">
        <div class="item__date">{{item.startDate + ' ~ ' + item.endDate}}</div>
        <div class="item__data">
          <div class="item__title">{{item.title}}</div>
          <ul class="item-field">
            <li
              class="item-field__item"
              v-for="(desc, descIdx) in item.descList"
              :key="descIdx"
            >{{desc}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// import { education } from "../data";

export default {
  props: ["list"],
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.list-view {
  .item {
    margin-top: 2em;

    &-list {
      margin-left: 0.3em;
      text-align: left;
    }

    // 년월
    &__date {
      font-size: 1.1rem;
      font-weight: 500;
    }
    // 년월 외 정보
    &__data {
      margin-top: 0.5em;
    }
    &__title {
      font-weight: 700;
      font-size: 1.2rem;
      &::before {
        content: "|";
        color: #adb5bd;
        font-size: 1rem;
        vertical-align: center;
        line-height: 1.2rem;

        width: 3px;
        margin-right: 0.5em;
        margin-top: -1em;
        background-color: #adb5bd;
      }
    }
    &-field {
      margin-top: 0.7em;
      margin-left: 1em;
      &__item {
        margin-top: 0.5em;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .list-view {
    .item {
      display: flex;
      justify-content: flex-start;
      align-items: top;
      &__date {
        width: 18%;
      }
      &__data {
        margin-top: 0;
      }
    }
  }
}
</style>



