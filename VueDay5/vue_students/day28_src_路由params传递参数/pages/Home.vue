<template>
  <div>
    <h2>我是Home组件</h2>
    <b-navbar>
      <b-navbar-nav>
        <router-link to="/home/message" class="list-group-item" active-class="active">Message</router-link>
        <router-link to="/home/news" class="list-group-item" active-class="active">News</router-link>
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