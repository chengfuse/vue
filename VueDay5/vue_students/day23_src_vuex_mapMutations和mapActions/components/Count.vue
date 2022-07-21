<template>
  <div class="data-item">
    <h1>当前求和为:{{sum}}</h1>
    <div>求和大数:{{bigSum}} </div>
    <div>学生姓名:{{studentName}} </div>
    <div>学校名称:{{schoolName}} </div>
    <select v-model.number="selectNumber">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <button @click="increment(selectNumber)">+</button>
    <button @click="decrement(selectNumber)">-</button>
    <button @click="incrementOdd(selectNumber)">当前求和为基数在加</button>
    <button @click="incrementWait(selectNumber)">等一等在加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Count",
  data(){
    return{
      selectNumber:1,
    }
  },
  computed:{
    //计算属性写法
    // Sum(){
    //   return this.$store.state.sum;
    // },
    // StudentName(){
    //   return this.$store.state.studentName;
    // },
    // SchoolName(){
    //   return this.$store.state.schoolName;
    // },
    //vuex 提供只限于vuex中的使用
    //对象写法 第一种 ...对象中的每一个key value 放入到计算属性中
    // ...mapState({sum:'sum',studentName:'studentName',schoolName:'schoolName'}),
    //数组写法 第二种
    ...mapState(['sum',"studentName","schoolName"]),
    // ...mapGetters(['bigSum']),
    ...mapGetters({bigSum:'bigSum'})
  },
  methods:{
    //以前写法
    // increment(){
    //   this.$store.commit("Increment",this.selectNumber);
    // },
    // decrement(){
    //   this.$store.commit("Decrement",this.selectNumber);
    // },
    // incrementOdd(){
    //   // this.sum= this.sum%2===0?this.sum :this.sum+this.selectNumber;
    //   this.$store.dispatch("incrementOdd",this.selectNumber);
    // },
    // incrementWait(){
    //     // setTimeout(()=>{
    //     //   this.sum+=this.selectNumber;
    //     // },2000)
    //   this.$store.dispatch("incrementWait",this.selectNumber);
    // }
    //借助mapMutation生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({increment:'Increment',decrement:"Decrement"}),
    //借助mapMutation生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    // ...mapMutations(['Increment',"Decrement"]),
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
    ...mapActions({incrementOdd:"incrementOdd",incrementWait:"incrementWait"}),
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
    // ...mapActions(["incrementOdd","incrementWait"]),
    //mapMutations和mapActions中的函数 需要传递对象否者他会获取默认对象以及鼠标点击事件
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>