<template>
  <div id="app">
    <Header  @adddate="adddate"></Header>
    <Bodyer :hobbies="hobbies"  @deletedate="deletedate"></Bodyer>
    <Footer :hobbies="hobbies" :isRemoveAll="isRemoveAll" :checkRemove="checkRemove" :removeListCount="removeListCount" @removecheck="removecheck" @removealllist="removealllist"></Footer>
  </div>
</template>

<script>
import Bodyer from "@/components/Bodyer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  name: 'App',
  components: {
    Header,Footer,Bodyer
  },
  data() {
    return {
      hobbies: [
        {id:1,value:"打篮球",dot:false},
        {id:2,value:"唱歌",dot:false},
        {id:3,value:"自驾游",dot:false},
        {id:4,value:"游戏",dot:false},
      ],
      checkRemove:false,
      removeListCount:0,
      isRemoveAll:false,
    }
  },
  created() {
    //localStorage 获取本地存储
    this.hobbies=JSON.parse(localStorage.getItem("hobbies"));
  },
  watch:{
    hobbies:{
      deep:true,
      handler(newValue){
        let  count=0;
        for (let i = 0; i < newValue.length; i++) {
          if(newValue[i].dot)
            count++;
        }
        if(count==newValue.length){
          this.checkRemove=true;
          this.isRemoveAll=true;
        }else{
          this.checkRemove= count>0 ?true:false;
          this.isRemoveAll=false;
        }
        //localStorage 内存存储
        localStorage.setItem("hobbies",JSON.stringify(newValue));
      }
    }
  },
  methods:{
    adddate(v){
      this.value=v;
      let  lastId= this.hobbies[this.hobbies.length-1] !=null ? this.hobbies[this.hobbies.length-1].id+1:0;
      this.hobbies.push({id:lastId,value: this.value,dot: false});
    },
    deletedate(v){
      if(this.hobbies[v].dot)
      this.hobbies.splice(v,1);
      this.removeListCount=1;
    },
    removealllist(){
      let  oldCount=this.hobbies.length;
      this.hobbies=this.hobbies.filter((h)=>{
        return h.dot===false;
      });
      this.removeListCount=oldCount-this.hobbies.length;
    },
    removecheck(v){
      for (let i = 0; i < this.hobbies.length; i++) {
        this.hobbies[i].dot=v;
      }
    },
  },
  mounted() {
    this.$bus.$on('deletedate',this.deletedate);
  },
  beforeDestroy() {
    this.$bus.$off('deletedate');
  }
}
</script>

<style>
#app {
  /*text-align: center;*/
  padding: 5px;
  width: 300px;
  border:1px solid #858383;
  border-radius: 5px;
}
</style>
