<template>
  <div class="bodey-title">
    <Category title="美食">
      <img slot="content" src="@/assets/5d83cd692f2670ce407840bd765f58e9.jpeg" class="cate-foods" />
      <a slot="footer"  href="https://www.bilibili.com/video/BV1QT41137M6?spm_id_from=333.788.top_right_bar_window_history.content.click">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="content">
        <li v-for="(item,index)  in games" :key="index">{{item}}</li>
      </ul>
      <div  class="foot" slot="footer">
        <a href="https://www.bilibili.com/video/BV1QT41137M6?spm_id_from=333.788.top_right_bar_window_history.content.click">单价游戏</a>
        <a href="https://www.bilibili.com/video/BV1QT41137M6?spm_id_from=333.788.top_right_bar_window_history.content.click">网络游戏</a>
      </div>
    </Category>
    <Category title="视频">
        <video slot="content" controls src="@/assets/11-.mp4" type="video/mp4" class="cate-films"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.bilibili.com/video/BV1QT41137M6?spm_id_from=333.788.top_right_bar_window_history.content.click">今典</a>
          <a href="https://www.bilibili.com/video/BV1QT41137M6?spm_id_from=333.788.top_right_bar_window_history.content.click">热门</a>
          <a href="https://www.bilibili.com/video/BV1QT41137M6?spm_id_from=333.788.top_right_bar_window_history.content.click">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
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
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','gate5','战地风云','使命召唤'],
      films:['《疯狂的外星人》','《大决战之辽沈战役》','《蝙蝠侠之黑暗骑士崛起》','《长津湖》'],
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
