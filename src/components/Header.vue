<template>
  <div class="header">
    <div class="avatar">
      <span class="avatar__img"></span>
    </div>
    <div class="ment">JavaScript Developer</div>
    <div class="links">
      <p>
        <a href="mailto:fortrulymylife@gmail.com">fortrulymylife@gmail.com</a>
      </p>
      <p>
        <a href="https://hanbnara.tistory.com" target="_blank">https://hanbnara.tistory.com</a>
      </p>
      <p>
        <a href="https://github.com/irisHanb" target="_blank">https://github.com/irisHanb</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  width: 100%;
  overflow: hidden;
  background: url(https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60)
    center center no-repeat;
  background-size: cover;

  & > div {
    text-align: center;
  }

  .avatar {
    padding-top: 100px;
    &__img {
      display: inline-block;
      width: 170px;
      height: 170px;
      border-radius: 50%;
      background: url(https://images.unsplash.com/photo-1501549686742-d8ecd80a26ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60)
        center -70px no-repeat;
      background-size: cover;
    }
  }
  .ment {
    padding-top: 15px;
    color: #fff;
    font-weight: 600;
    font-size: 1.3rem;
  }
  .links {
    color: #fff;
    margin-top: 0.5em;
    padding-bottom: 30px;
    opacity: 0.8;
    p {
      display: block;
      margin-top: 0.3em;
    }
    a {
      display: inline-block;
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }
  }
}
@media screen and (min-width: 768px) {
  .header {
    .links {
      p {
        display: inline-block;
        margin: 0 0.5em;
        &:not(:last-child) {
          &::after {
            margin-left: 1em;
            display: inline-block;
            content: "|";
          }
        }
      }
    }
  }
}
</style>
