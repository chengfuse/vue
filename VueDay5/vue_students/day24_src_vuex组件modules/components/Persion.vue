<template>
  <div>
    <h5>最大数:{{bigSum}}</h5>
    <div><input type="text" placeholder="添加学生" v-model="studentName" /> <button @click="addPerson">添加</button></div>
    <ul>
      <li v-for="p in  persons" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Persion",
  data(){
    return{
      studentName:"",
    }
  },
  methods:{
    addPerson(){
      let  id =this.persons[this.persons.length-1].id!==null?this.persons[this.persons.length-1].id+1:0;
      let params={id:id,name:this.studentName}
      this.$store.commit("personAbout/ADD_PERSON",params);
      this.studentName="";
    }
  },
  computed:{
    persons(){
      return this.$store.state.personAbout.personList;
    },
    bigSum(){
      return this.$store.getters["countAbout/bigSum"];
    }
  }
}
</script>

<style scoped>

</style>