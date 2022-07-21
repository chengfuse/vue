<template>
  <div>
    <div>{{name}}</div>
    <div>{{address}}</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data(){
    return {
      name:"南京航天大学",
      address:"南京"
    }
  },
}
</script>

<style scoped>

</style>