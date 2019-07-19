<template>
  <div class="header">
    <div class="avatar"><span class="avatar__img"></span></div>
    <div class="ment">front-end developer</div>
  </div>
</template>

<style lang="scss">
.header {  
  width: 100%;
  height: 300px;
  overflow: hidden;
  // height: 250px;
  background: url(https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60) center center no-repeat;
  background-size: cover;

  &>div{
    text-align: center;
  }  

  .avatar {    
    padding-top: 100px;
    &__img{
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
    padding-bottom: 30px;
    text-transform: uppercase;
    color: #fff;
    font-size: 1rem;
  }
}
</style>
