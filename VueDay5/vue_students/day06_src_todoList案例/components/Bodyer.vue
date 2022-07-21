<template>
  <span>
   <div v-for="(item,index) in  hobbies" :key="index">
    <input type="checkbox"  :value="item" v-model="item.dot" />{{item.value}}<button v-if="item.dot" style="text-align: right" @click="remove(index)">删除</button>
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
  props:["hobbies","deletedate"],
  created() {

  },

  methods:{
    remove(index){
      this.deletedate(index)
    }
  }
}
</script>

<style scoped>

</style>