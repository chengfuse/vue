<template>
  <div>
    <h5>我是Message组件</h5>
    <ol>
      <li v-for="item  in  messageList" :key="item.id">
        <!--  router跳转带参数query写法1   -->
<!--        <router-link :to="`/home/message/detail?id=${item.id}&content=${item.content}`" >{{item.content}}</router-link>-->
        <!--  router带参数query写法2    to对象写法  -->
<!--        <router-link :to="{-->
<!--          // patch:'/home/message/detail',-->
<!--          name:'detail',-->
<!--          query:{-->
<!--            id:item.id,-->
<!--            content:item.content,-->
<!--          }-->
<!--        }" >{{item.content}}</router-link>-->
<!--  router带参数params写法     -->
        <!--  router跳转带参数params写法1   -->
<!--                <router-link :to="`/home/message/detail/${item.id}/${item.content}`" >{{item.content}}</router-link>-->
        <!--  router跳转带参数params写法2 对象形式 注:params to对象写法时不能用path 必须使用name配置  -->
        <router-link :to="{
          // patch:'/home/message/detail',
          name:'detail',
          params:{
            id:item.id,
            content:item.content,
          }
        }" >{{item.content}}</router-link>
      </li>
    </ol>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Message",
  data(){
    return {
      messageList:[
        {id:1,content:"是兄弟就来砍我呀！"},
        {id:2,content:"你的！大大的坏。"},
        {id:3,content:"我吵你！"},
        {id:4,content:"他妈的刁民！敢杀我的马。"},
      ]
    }
  }
}
</script>

<style scoped>

</style>