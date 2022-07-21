<template>
  <div>
    <div style="height: 30px;margin-top: 10px;">
      <input class="allchack" style="margin-right: 15px" type="checkbox" v-model="isRemove"/> 已完成 {{removeListCount||0}}/全部 {{hobbies.length||0}}
      <button v-if="checkRemove" @click="removeCheckList">选中删除</button>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data(){
    return{
      isShowRove:false,
    }
  },
  created() {

  },
  props:["checkRemove","hobbies","isRemoveAll","removealllist","removecheck","removeListCount"],
  methods:{
    removeCheckList(){
      this.removealllist();
    }
  },
  computed:{
    isRemove:{
      get(){
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.isShowRove=this.isRemoveAll;
      },
      set(v){
        this.isShowRove=v;
        this.removecheck(v);
      },
    }
  }
}
</script>

<style scoped>

</style>