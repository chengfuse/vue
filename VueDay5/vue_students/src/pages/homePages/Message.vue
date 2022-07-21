<template>
  <div>
    <h5>我是Message组件</h5>
    <ol>
      <li v-for="item  in  messageList" :key="item.id" >
        <router-link :to="{
          name:'detail',
          query:{
            id:item.id,
            content:item.content,
          }
        }" style="width: 500px" >{{item.content}}</router-link>
          <button @click="pushShow(item)">push查看</button>
          <button @click="replaceShow(item)">replace查看</button>
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
  },
  methods:{
    //不通过<router-link> 使用js代买跳转
    pushShow(val){
      this.$router.push({
        name:'detail',
        query:{
          id:val.id,
          content:val.content,
        }
      });
    },
    replaceShow(val){
      this.$router.replace({
        name:'detail',
        query:{
          id:val.id,
          content:val.content,
        }
      });
    },
  },
  destroyed() {
  }
}
</script>

<style scoped>

</style>