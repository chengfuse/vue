<!--
  插槽
  1.作用：让父组件可以向子组件指定位置插入html 结构，也是一种组件间通信方式，适用于父组件==》子组件
  2.分类:，默认插槽，具名插槽 作用域插槽
  3.使用方式例如:
    3.1 默认插槽
         父组件:
         <Category title="游戏">
           <div>html结构</div>
         </Category>
         子组件:
          <template>
            <div class="data-item">
                定义插槽
                <slot>插槽内容</slot>
            </div>
         </template>
     3.2 具名插槽
         父组件:
          <Category title="游戏">
            <template slot="center">
                <div>html结构</div>
            </template>
            <template v-slot:footer> //注: v-slot 必须写在template 标签里其他标签报错
                <div>html结构</div>
            </template>
           </Category>
         子组件:
          <template>
            <div class="data-item">
                定义插槽
                <slot name="center">插槽内容</slot>
                <slot name="footer">插槽内容</slot>
            </div>
         </template>
      3.3 作用域插槽:
        3.3.1 理解: 数据在组件自身，但根据数据生成的结构需要组件的使用来决定。(games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定)
        3.3.2 组件编码:
          父组件
            <Category title="游戏">
              <template scope="{games}">
                <ul slot="content">
                  <li v-for="(item,index)  in games" :key="index">{{item}}</li>
                </ul>
              </template>
            </Category>
            <Category title="游戏">
              <template scope="content">
                <ol slot="content">
                  <li v-for="(item,index)  in content.games" :key="index">{{item}}</li>
                </ol>
              </template>
            </Category>
         子组件:
             <template>
                <div class="data-item">
                  <slot :games="games"></slot>
              </div>
             </template>
            <script>
              export default {
                // eslint-disable-next-line vue/multi-word-component-names
                name: "Category",
                data(){
                  return{
                    games:['红色警戒','gate5','战地风云','使命召唤'],
                  }
                },
                props:["title"]
              }
            </script>
-->

<template>
  <div class="bodey-title">
    <Category title="游戏">
<!--    作用域插槽  -->
      <template scope="{games}">
        <ul slot="content">
          <li v-for="(item,index)  in games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="content">
        <ol slot="content">
          <li v-for="(item,index)  in content.games" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
          <h5 v-for="(item,index)  in games" :key="index">{{item}}</h5>
      </template>
    </Category>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Category from "@/components/Count";
export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: {
    Category

  },

  data() {
    return {

    }
  },
}
</script>

<style>
#app {
  /*text-align: center;*/
}
.bodey-title,.foot{
  display:flex;
  justify-content: space-around;
}

</style>
