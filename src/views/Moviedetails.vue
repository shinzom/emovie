<template>
  <el-card class="movie-details"
    style="box-shadow:  5px 5px 56px #bbddc1,-5px -5px 56px #e1ffe7;background-color: #f0f1f0;border-radius: 50px;">
    <div class="left-section">
      <el-image class="movie-poster" :src=movieData.posterPath fit="fill"></el-image>
    </div>
    <div class="right-section">
      <div class="movie-title-section">
        <h1 class="movie-title">{{ movieData.title }}</h1>
        <p class="movie-meta">{{ movieData.releaseDate }} ● {{ movieData.genre }} ● {{ movieData.runtime }}</p>
      </div>
      <div class="movie-info-section">
        <div class="movie-info-item">
          <span class="movie-info-label">国家：</span>
          <span class="movie-info-value">{{ movieData.country }}</span>
        </div>
        <div class="movie-info-item">
          <span class="movie-info-label">语言：</span>
          <span class="movie-info-value">{{ movieData.language }}</span>
        </div>
        <div class="movie-info-item">
          <span class="movie-info-label">评分：</span>
          <span class="movie-info-value">{{ movieData.ratingAverage }}</span>
        </div>
        <div class="movie-info-item">
          <span class="movie-info-label">我的评分：</span>
          <el-rate v-model="movieData.userRating" @change="updateRating" :allow-half="true" size="300"></el-rate>
          <span class="movie-info-value">{{ (movieData.userRating).toFixed(1) }}</span>
        </div>
        <div class="movie-info-item">
          <span class="movie-info-label">热度：</span>
          <span class="movie-info-value">{{ movieData.popularity }}</span>
        </div>
        <div class="movie-info-item">
          <span class="movie-info-label">仅限成人：</span>
          <span class="movie-info-value">{{ movieData.adult }}</span>
        </div>
        <div class="movie-info-item">
          <span class="movie-info-label">导语：</span>
          <span class="movie-info-value">{{ movieData.tagline }}</span>
        </div>
        <div class="movie-summary-section">
          <h2 class="movie-summary-title">剧情简介</h2>
          <p class="movie-summary-text">{{ movieData.overview }}</p>
        </div>

      </div>
      <!-- <div class="movie-summary-section">
        <h2 class="movie-summary-title">官网主页</h2>
        <p class="movie-summary-text"><a :href="movieData.movieLink" target="_blank">{{ movie.title }}</a></p>
      </div> -->

    </div>
  </el-card>

  <div style="display:flex;flex-direction: row;justify-content:space-between;">
    <el-card style="width:30%;margin-left: 50px;border-radius: 78px;background: #a5dab3;height: 500px;">
      <span class="movie_person">相关工作人员：</span>
      <el-scrollbar height="400px" style="margin-top: 10px;">
        <div v-for="item in movieData.director"
          style="display:flex;flex-direction: column;align-items: center;margin-top: 10px;">
          <span style="font-size: 20px;">{{ item.name }}</span>
          <span style="font-size: 15px;">{{ item.job }}</span>
        </div>
      </el-scrollbar>
    </el-card>

    <el-card style="width:55%;margin-right: 50px;border-radius: 78px;background: #a5dab3;height: 500px;">
      <span class="movie_person">主演：</span>
      <el-scrollbar height="400px" style="margin-top: 10px;">
        <div v-for="item in movieData.stars" style="margin-right: 40px;margin-left: 120px;">
          <span style="display: inline-block;width: 220px;font-size: 20px;">{{ item.name }}</span>
          <span
            style="display: inline-block;width: 90px;font-size: 15px;margin-left: 10px;margin-right: 10px;">PLAYS</span>
          <span style="display: inline-block;font-size: 20px;">{{ item.character }}</span>
        </div>
      </el-scrollbar>

    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
import { getMovieData } from "../utils/api";
import { searchUserMovieRating } from "../utils/api";
import { addOrModifyRating } from "../utils/api";
import { callRecommendAlg } from "../utils/api";
export default {
  data() {
    return {
      movieData: {
        movieId: 0,
        posterPath: "",
        title: "",
        releaseDate: "",
        ratingAverage: "",
        popularity: "",
        overview: "",
        runtime: "",
        tagline: "",
        adult: "",
        userRating: 0,
        genre: "",
        director: [],
        stars: [],
        language: "",
      },
      token: 0,
      ratingData: {
        userId: 0,
        movieId: 0,
        rating: null,
      },
      recommendData: {
        user_id: 0,
        recommendNum: 24
      }
    }
  },
  created() {
    //电影详细信息
    getMovieData(this.$route.params.id).then((res) => {
      console.log(res)
      if (res.code == 1) {
        this.movieData.movieId = res.data.movieId;
        this.movieData.overview = res.data.overview;
        this.movieData.popularity = res.data.popularity;
        this.movieData.posterPath = "https://cos-lqyrmk-1312783534.cos.ap-beijing.myqcloud.com/resources/emovie/movie_poster/1/" + res.data.imdbId + ".jpg";
        this.movieData.ratingAverage = res.data.ratingAverage;
        this.movieData.releaseDate = res.data.releaseDate;
        this.movieData.runtime = res.data.runtime + "min";
        this.movieData.title = res.data.title;
        this.movieData.adult = res.data.adult;
        if (!res.data.tagline) {
          this.movieData.tagline = "none"
        } else {
          this.movieData.tagline = res.data.tagline;
        }

        //国家
        if (res.data.movieCountryList.length != 0) {
          this.movieData.country = res.data.movieCountryList[0].country.countryName;
        }
        for (let i = 1; i < res.data.movieCountryList.length; i++) {
          this.movieData.country = this.movieData.country + "/" + res.data.movieCountryList[i].country.countryName;
        }
        //类目
        if (res.data.movieGenreList.length != 0) {
          this.movieData.genre += res.data.movieGenreList[0].genre.genreName;
        }
        for (let i = 1; i < res.data.movieGenreList.length; i++) {
          this.movieData.genre = this.movieData.genre + "/" + res.data.movieGenreList[i].genre.genreName;
        }
        //语言
        if (res.data.movieLanguageList.length != 0) {
          this.movieData.language += res.data.movieLanguageList[0].language.languageName;
        }
        for (let i = 1; i < res.data.movieLanguageList.length; i++) {
          this.movieData.language = this.movieData.language + "/" + res.data.movieLanguageList[i].language.languageName;
        }
        //演员
        for (let i = 0; i < res.data.castList.length; i++) {
          this.movieData.stars.push({
            name: res.data.castList[i].castName,
            character: res.data.castList[i].characterInMovie
          });
        }
        //工作人员
        for (let i = 0; i < res.data.crewList.length; i++) {
          this.movieData.director.push({
            name: res.data.crewList[i].crewName,
            job: res.data.crewList[i].job
          });
        }


        //判断用户是否登录
        this.token = window.localStorage.getItem('token');
        //若用户登录，查询是否对显示的电影评分，若评分，则显示出来
        if (this.token != 0) {
          console.log(this.movieData.movieId)
          searchUserMovieRating(this.token, this.movieData.movieId).then((res) => {
            console.log(res)
            if (res.code == 1) {
              this.movieData.userRating = res.data.rating;
            } else {
              this.movieData.userRating = 0;
            }
          }).catch(err => {
            console.log(err.response)
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: '显示电影详情页失败',
          type: 'error'
        })
      }
    }).catch(err => {
      console.log(err.response)
    })

  },
  methods: {
    //更新评分
    updateRating() {
      //判断用户是否登录
      this.token = window.localStorage.getItem('token');
      if (this.token == 0) {
        this.$message({
          showClose: true,
          message: '用户未登录，请先登录',
          type: 'error'
        })
        this.$router.push('/login');
      } else {
        this.ratingData.movieId = this.movieData.movieId;
        this.ratingData.userId = this.token;
        this.ratingData.rating = this.movieData.userRating;
        addOrModifyRating(this.ratingData).then((res) => {
          console.log(res)
          if (res.code == 1) {
            this.$message({
              showClose: true,
              message: '添加或修改评分成功',
              type: 'success'
            })
            //调用推荐算法
            this.recommendData.user_id = this.token;
            callRecommendAlg(this.recommendData).then((res) => {
              console.log(res)
            }).catch(err => {
              console.log(err.response)
            });
          } else {
            this.$message({
              showClose: true,
              message: '添加或修改评分失败',
              type: 'error'
            })
          }
        }).catch(err => {
          console.log(err.response)
        });
      }


    }
  }
}
</script>

<style>
.movie-details {
  margin: 20px;
  height: 550px;
  border-radius: 25px;
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between; */
  box-shadow:
    16.7px 13.6px 8.5px -13px rgba(0, 0, 0, 0.145),
    28.5px 23.1px 28.6px -13px rgba(0, 0, 0, 0.193),
    64px 52px 128px -13px rgba(0, 0, 0, 0.23);
}

.left-section {
  width: 400px;
  height: 550px;
  float: left;
  margin-right: 50px;
}

.right-section {
  width: 100%;
}

.movie-poster {
  width: 350px;
  height: 450px;
  margin-left: 50px;
  border-radius: 14px;
}


.movie-title-section {
  margin-bottom: 200=px;
}

.movie-title {
  font-size: 26px;
}

.movie-meta {
  font-size: 14px;
  color: #999999;
}

.movie-info-section {
  margin-bottom: 2px;
}

.movie-info-label {
  display: inline-block;
  width: 120px;
  font-weight: bold;
  vertical-align: top;
}

.movie-info-value {
  display: inline-block;
  max-width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

}

.movie_person {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: rgb(3, 75, 3);
}

.movie-summary-section {
  margin-top: 20px;
}

.movie-summary-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.movie-summary-text {
  white-space: pre-line;
}

.el-rate__item {
  font-size: 36px;
  line-height: 36px;
}

.el-rate__decimal,
.el-rate__icon {
  font-size: 36px;
}
</style>