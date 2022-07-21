<template>
  <div class="data-item">
    <h1>当前求和为:{{$store.state.sum}}</h1>
    <select v-model.number="selectNumber">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为基数在加</button>
    <button @click="incrementWait">等一等在加</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Count",
  data(){
    return{
      selectNumber:1,
    }
  },
  methods:{
    increment(){
      this.$store.commit("Increment",this.selectNumber);
    },
    decrement(){
      this.$store.commit("Decrement",this.selectNumber);
    },
    incrementOdd(){
      // this.sum= this.sum%2===0?this.sum :this.sum+this.selectNumber;
      this.$store.dispatch("incrementOdd",this.selectNumber);
    },
    incrementWait(){
        // setTimeout(()=>{
        //   this.sum+=this.selectNumber;
        // },2000)
      this.$store.dispatch("incrementWait",this.selectNumber);
    }
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>