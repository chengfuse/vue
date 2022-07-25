<template>
  <b-container >
    <div>
      <h1>Vue Router Dome</h1>
      <div>
        <button @click="forward">前进</button>
        <button @click="back">后退</button>
        <button @click="two_back">后退2个</button>
      </div>
    </div>
    <hr/>
    <b-row>
      <b-col cols="5" md="2">
        <div class="list-group">
<!--          <a class="list-group-item active">about</a>-->
<!--          <a class="list-group-item ">home</a>-->
              <!--      Vue中借助route-link 标签实现路由的切换  active-class 却换选中时高亮   -->
              <router-link class="list-group-item " active-class="active"  to="/about" >About</router-link>
              <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </b-col>
      <b-col cols="1" md="10">
        <div class="panel">
<!--     指定位置呈现     -->
          <router-view>
                这是一个跳转对象
          </router-view>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: {
  },
  data() {
    return {
    }
  },
  methods:{
    //不借助浏览器实现页面的前后切换
    back(){
      this.$router.back(); //前进
    },
    forward(){
      this.$router.forward(); //后退
    },
    two_back(){
      this.$router.go(-2); //go 可以实现前后多个页面切换跳转 - 后退 + 前进
    }
  }
}
</script>

<style>
#app {
  /*text-align: center;*/
}
.bodey-title{

}

</style>
