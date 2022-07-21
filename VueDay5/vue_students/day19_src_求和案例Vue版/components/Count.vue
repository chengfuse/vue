<template>
  <div class="data-item">
    <h1>当前求和为:{{sum}}</h1>
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
      sum:0,
      selectNumber:1,
    }
  },
  methods:{
    increment(){
      this.sum+=this.selectNumber;
    },
    decrement(){
      this.sum-=this.selectNumber;
    },
    incrementOdd(){
      this.sum= this.sum%2===0?this.sum :this.sum+this.selectNumber;
    },
    incrementWait(){
        setTimeout(()=>{
          this.sum+=this.selectNumber;
        },2000)
    }
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>