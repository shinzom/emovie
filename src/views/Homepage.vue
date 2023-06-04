<template>
    <div class="poster-wrapper">
      <el-carousel :interval="4000" height="450px">
        <el-carousel-item 
          v-for="poster in posters" 
          :key="poster.id" 
          style="cursor: pointer;"
          @click="toDetails(posters.movieId)"
        >
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
      <span style="background:linear-gradient(to right,#97dea3,#5c8899);font-size: 110px;color: azure;font-style:oblique;width: 100%;">Welcome to eMovie</span>
    </div>


  </template>
  
  <script>
  export default {
    data() {
      return {
        posters: [
          {
            movieId: 1,
            src: "https://pic3.zhimg.com/v2-a3cab7b5bb88b9eb83370f1ec3db6f86_r.jpg",
          },
          {
            movieId: 2,
            src: "https://pic3.zhimg.com/v2-d8e1c695f6f11a6ba6e1d9c465a541c6_r.jpg",
          },
          {
            movieId: 3,
            src: "https://pic1.zhimg.com/v2-c92f360f5bdef802ada95de18b49bc90_r.jpg",
          },
          {
            movieId: 4,
          src: "https://pic4.zhimg.com/v2-562b58966de2e73064ce46899754ca85_r.jpg",
        },
        ],


        movie_tableData: [
        {
          movieId: 1,
          title: "阳光灿烂的日子",
          imgSrc:
            "https://th.bing.com/th/id/OIP.GOdspcEPqvY7FCsJeNZ0FAHaJh?w=141&h=181&c=7&r=0&o=5&pid=1.7",
          tagline:
            "20世纪70年代初的北京，忙着“闹革命”大人无空理会小孩，加上学校停课无事可做，以军队大院男孩为突出代表的少年人便自找乐子，靠起哄、打架、闹事、拍婆子等方式挥霍过量的荷尔蒙。",
          ratingAverage: "8.8分",
          runtime: "129min",
          voteAverage: "8.8",
          voteCount: "1976",
        },

        {
          movieId: 2,
          title: "太阳照常升起",
          imgSrc:
            "https://th.bing.com/th/id/OIP.B7dADaqp1uFuhzgGZPEbJgAAAA?w=142&h=189&c=7&r=0&o=5&pid=1.7",
          tagline:
            "电影改編自作家葉彌的短篇小說《天鵝絨》。[1]电影讲述了四段分别发生于1958年至1976年期间，地点在中国南部、东部、西部，看似分散实又相连的人物故事。",
          ratingAverage: "9.2分",
          runtime: "129min",
          voteAverage: "8.8",
          voteCount: "1976",
        },
      ],

      cards: [
        {
          movieId: 1,
          imageSrc: "https://puui.qpic.cn/vcover_vt_pic/0/iuqjzco94vf6onl1567133727/0",
          title: "蜘蛛侠系列",
          subtitle: "动作 / 科幻 / 冒险",
        },
        {
          movieId: 2,
          imageSrc: "http://5b0988e595225.cdn.sohucs.com/images/20190901/154ef4d40d894973a107bcbf64ac16da.jpeg",
          title: "浴血黑帮系列",
          subtitle: "动作 / 犯罪 / 剧情",
        },
        {
          movieId: 3,
          imageSrc: "https://th.bing.com/th/id/OIP.zTfbQE-Jm3o_od_7YFcgqAHaMl?w=198&h=323&c=7&r=0&o=5&pid=1.7",
          title: "复仇者联盟系列",
          subtitle: "动作 / 科幻 / 冒险",
        },
        {
          movieId: 4,
          imageSrc: "https://th.bing.com/th?id=OIP.vBFcuSvsxAFkPe3H_YCjnwHaKb&w=210&h=296&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
          title: "姜文电影系列",
          subtitle: "奇幻 / 喜剧 / 动作",
        },
      ],
      };
    },
    methods:{
      toDetails(movieId) {
      this.$router.push({
        path: "/moviedetails",
        query: {
          movieId: movieId,
        },
      });
      },

      toSearch(title){
        this.$router.push("/search");
      },
    }
  };
  </script>
  
  <style scoped>
  .poster-wrapper {
    margin: 24px 0;
  }
  
/* 设置宽度并居中 */
  .poster-image {
    max-width: 85%;
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
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
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
  object-fit: cover; /* 裁剪不变形地填充 */
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




