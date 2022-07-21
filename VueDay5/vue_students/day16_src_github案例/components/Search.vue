<template>
  <div class="search-head">
    <h1 style="color: #daedff">Search GitHun User</h1>
    <input type="text" class="search-input" placeholder="请查询你要搜索的信息" v-model="keyWord"/><button @click="searchUsers" style="height: 35px;">查询</button>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Search",
  data(){
    return{
      keyWord:"",
    }
  },
  methods:{
    searchUsers(){
      this.$bus.$emit("updateListData",{ isFirst:false,isLoading:true,errorMsg:"",userList:[],});
      axios.get("https://api.github.com/search/users",{
        params:{
          q:this.keyWord
        }
      }).then(
          response=>{
            this.$bus.$emit("updateListData",{ isFirst:false,isLoading:false,errorMsg:"",userList:response.data.items,});
          },
          error=>{
            this.$bus.$emit("updateListData",{ isFirst:false,isLoading:false,errorMsg:"查询出现问题！",userList:[],});
            console.log(error.message);
          }
      )
    }
  }
}
</script>

<style scoped>
  .search-head{
    background-color: #88afdc;
    border-radius: 15px;
    height: 249px;
    width: 100%;
    text-align: left;
  }
  .search-head h1{
    padding-top: 90px;
    padding-left: 4px;
  }
  .search-input{
    margin-left:5px ;
    margin-top: 6px;
    width: 400px;
    height: 35px;
    border-style: none;
    border-bottom:3px  solid  black ;
  }

</style>