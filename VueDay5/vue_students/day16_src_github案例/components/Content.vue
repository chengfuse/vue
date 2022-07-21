<template>
  <div class="data-item">
    <div  class="card" style="width: 12rem;" v-for="(item ) in  userList" :key="item.id">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" class="card-img-top">
        <div class="card-body">
          <p class="card-text">{{item.login}}</p>
        </div>
      </a>
    </div>
    <h1 v-if="isFirst">Welcome using</h1>
    <h1 v-else-if="isLoading">加载中。。。</h1>
    <h1 v-else-if="errorMsg">{{errorMsg}}</h1>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Content",
  data(){
    return{
      isFirst:true,
      isLoading:false,
      errorMsg:"",
      userList:[],
    }
  },
  mounted() {
    this.$bus.$on("updateListData",(Obj)=>{
      // console.log(data);
      this.userList=Obj.userList;
      this.isFirst=Obj.isFirst;
      this.isLoading=Obj.isLoading;
      this.errorMsg=Obj.errorMsg;
    });
  },
  beforeDestroy() {
    this.$bus.$off();
  }
}
</script>

<style scoped>
  .data-item{
    width: 980px;
    margin: 5px  auto;
  }
  .data-item div{
    float: left;
    margin-left:20px ;
    margin-top: 15px;
    padding: 3px;
  }
</style>