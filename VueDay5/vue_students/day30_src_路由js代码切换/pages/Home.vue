<template>
  <div>
    <h2>我是Home组件</h2>
    <b-navbar>
      <b-navbar-nav>
        <!--
        <router-link>的replace的属性
        1.作用：控制路由跳转时操作浏览器历史记录的模式
        2.浏览器的历史记录有两种写入方式：分别为push和replace，push是追加历史记录，replace是替换当前记录，路由跳转时候默认为push
        3.如何开启replace模式：  <router-link replace ......>content</router-link>
        -->
        <router-link replace to="/home/message" class="list-group-item" active-class="active">Message</router-link>
        <router-link replace to="/home/news" class="list-group-item" active-class="active">News</router-link>
      </b-navbar-nav>
    </b-navbar>
    <router-view>

    </router-view>
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