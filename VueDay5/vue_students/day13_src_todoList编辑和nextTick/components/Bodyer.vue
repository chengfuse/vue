<template>
  <span>
   <div v-for="(item,index) in  hobbies" :key="index">
     <input type="checkbox"  :value="item" v-model="item.dot" />
     <span v-if="!item.isEtid">{{item.value}}</span>
     <input v-if="item.isEtid"  type="text" :value="item.value" placeholder="请修改" @keyup.enter="closeupdate(index)" ref="inputTitle" />
     <button v-if="!item.isEtid"   @click="isupdate(index)">编辑</button>
     <button v-if="item.dot" style="text-align: right" @click="remove(index)">删除</button>
  </div>
  </span>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Bodyer",
  data(){
    return {

    }
  },
  props:["hobbies"],
  created() {

  },

  methods:{
    remove(index){
      this.$bus.$emit("deletedate",index);
    },
    isupdate(index){
      this.$bus.$emit("opentext",index);
      this.$nextTick(()=>{
        this.$refs.inputTitle[index].focus();
      });
      // setTimeout(()=>{
      //   this.$refs.inputTitle[index].focus();
      // },200)
    },
    closeupdate(index){
      this.$bus.$emit("closeupdate",index);
    }
  }
}
</script>

<style scoped>

</style>