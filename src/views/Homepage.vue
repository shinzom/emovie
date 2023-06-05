<template>
  <div class="homeMain">
    <div class="poster-wrapper">
      <el-carousel :interval="4000" height="450px">
        <el-carousel-item v-for="poster in posters" :key="poster.id" style="cursor: pointer;"
          @click="toDetails(poster.movieId)">
          <img :src="poster.src" alt="" class="poster-image" />
        </el-carousel-item>
      </el-carousel>
    </div>


    <!-- <div class="cards-wrapper">
      <div class="card" v-for="card in cards" :key="card.id" @click="toSearch(title)" style="cursor: pointer;">
        <div class="card-image">
          <img :src="card.imageSrc" alt="">
        </div>
        <div class="card-content">
          <div class="card-title">{{ card.title }}</div>
          <div class="card-subtitle">{{ card.subtitle }}</div>
        </div>
      </div>
    </div> -->

    <div style="display: block;text-align: center;">
      <span
        style="background:linear-gradient(to right,#97dea3,#5c8899);font-size: 110px;color: azure;font-style:oblique;width: 100%;">Welcome
        to eMovie</span>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      posters: [
        {
          movieId: 40278,
          src: "https://cos-lqyrmk-1312783534.cos.ap-beijing.myqcloud.com/resources/emovie/movie_poster/1/tt0418763.jpg",
        },
        {
          movieId: 1411,
          src: "https://cos-lqyrmk-1312783534.cos.ap-beijing.myqcloud.com/resources/emovie/movie_poster/1/tt0116477.jpg",
        },
        {
          movieId: 4422,
          src: "https://cos-lqyrmk-1312783534.cos.ap-beijing.myqcloud.com/resources/emovie/movie_poster/1/tt0069467.jpg",
        },
        {
          movieId: 173313,
          src: "https://cos-lqyrmk-1312783534.cos.ap-beijing.myqcloud.com/resources/emovie/movie_poster/1/tt0391774.jpg",
        },
        {
          movieId: 27396,
          src: "https://cos-lqyrmk-1312783534.cos.ap-beijing.myqcloud.com/resources/emovie/movie_poster/1/tt0260924.jpg",
        },
      ],
    };
  },
  methods: {
    toDetails(movieId) {
      this.$router.push('/moviedetails/' + movieId);
    },
  }
};
</script>
  
<style scoped>
.homeMain{
  width: 100%;
    height: 620px;
    background-image: url('../img/background_home.png');
    background-size: cover;
    margin-top: 5px;
}
.poster-wrapper {
  margin: 5px 0;
  margin-bottom: 20px;
}

/* 设置宽度并居中 */
.poster-image {
  max-width: 25%;
  display: block;
  margin: 0 auto;
}

.cards-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.card {
  width: 380px;
  height: 125px;
  margin: 0 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.card-image {
  width: 40%;
  height: 100%;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 裁剪不变形地填充 */
}

.card-content {
  width: 60%;
  height: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.card-subtitle {
  font-size: 16px;
  color: #666;
}
</style>




