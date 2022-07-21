<template>
  <div>
    <h2>我是Home组件</h2>
    <b-navbar>
      <b-navbar-nav>
        <router-link replace to="/home/message" class="list-group-item" active-class="active">Message</router-link>
        <router-link replace to="/home/news" class="list-group-item" active-class="active">News</router-link>
      </b-navbar-nav>
    </b-navbar>
<!-- <keep-alive> 开启路由缓存 没有include则是所有<router-link>下路径缓存全部开启  -->
<!--   include：指定某个路由的缓存 多个路由缓存['News','Message' ]  注:中的不是组件定义路由的名字  是组件自身的名字   -->
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home"
}
</script>

<style scoped>

</style>