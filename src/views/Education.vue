<template>
  <div class="edu">
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
            >- {{desc}}</li>
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
  },
  created() {
    console.log(this.list);
    // this.list = this.list_;
  }
};
</script>
<style lang="scss">
.item {
  margin-top: 2em;
  display: flex;

  &-list {
    margin-left: 0.3em;
    // outline: 1px dotted red;
    text-align: left;
  }
  // 년월
  &__date {
    vertical-align: top;
    font-size: 1.1rem;
    font-weight: 500;
  }
  // 년월 외 정보
  &__data {
    margin-top: 1.7em;
    margin-left: -1em;
  }
  &__title {
    font-weight: 600;
    font-size: 1.2rem;
    &::before {
      content: "|";
      color: #adb5bd;
      font-size: 1rem;
      vertical-align: center;
      line-height: 1.2rem;

      width: 3px;
      margin-right: 0.5em;
      background-color: #adb5bd;
    }
  }
  &-field {
    margin-top: 0.7em;
    margin-left: 0.5em;
    &__item {
      margin-top: 0.5em;
    }
  }
}
</style>



