<template>
  <el-container style="width: 100%; height: 100%">
    <el-aside style="width: 350px">
      <el-card class="searchbox" style="margin-left: 10px; margin-top: 5px; width: 320px">
        <svg t="1681267743489" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2635" width="18px" height="18px">
          <path d="M121.964897 709.911936a416.481669 416.481669 0 1 1 589.035039 0 416.737493 416.737493 0 0 1-589.035039 0z
            m497.577915-498.857036a287.802136 287.802136 0 1 0 0 407.463868 287.802136 287.802136 0 0 0 0-407.463868z m405.481232
            696.289301l-117.039535 116.655799L704.604333 831.428393l127.91206-127.91206z" fill="#105421" p-id="2636">
          </path>
        </svg>
        <input class="search" id="search" v-model="searchData.movieNameKey" @keydown.enter="movieEnter" />
      </el-card>

      <el-card style="margin-left: 10px; margin-top: 5px; width: 320px">
        <el-collapse class="collapse" style="
            margin-left: -15px;
            margin-top: -20px;
            margin-bottom: -20px;
            width: 320px;
          ">
          <el-collapse-item title="筛选" name="1">
            <div style="margin: 5px">
              <div style="margin: 1px; font-size: 20px">国家</div>
              <el-radio-group v-model="countrySelected" size="small" fill="#1ec79a">
                <el-radio-button v-for="item in countryOptions" :key="item.countryId" :label="item.countryName"
                  :value="item.countryId" :popper-append-to-body="false">
                </el-radio-button>
              </el-radio-group>
            </div>
            <div style="margin: 5px">
              <div style="margin: 1px; font-size: 20px">语言</div>
              <el-radio-group v-model="languageSelected" size="small" fill="#1ec79a">
                <el-radio-button v-for="item in languageOptions" :label="item.languageName" :value="item.languageIso"
                  :popper-append-to-body="false">
                </el-radio-button>
              </el-radio-group>
            </div>
            <div style="margin: 5px">
              <div style="margin: 1px; font-size: 20px">年份</div>
              <el-radio-group v-model="yearSelected" size="small" fill="#1ec79a">
                <el-radio-button v-for="item in yearOptions" :key="item.key" :label="item.name" :value="item.key"
                  :popper-append-to-body="false">
                </el-radio-button>
              </el-radio-group>
            </div>
            <div style="margin: 5px">
              <div style="margin: 1px; font-size: 20px">类目</div>
              <el-radio-group v-model="genreSelected" size="small" fill="#1ec79a">
                <el-radio-button v-for="item in genreOptions" :key="item.genreId" :label="item.genreName"
                  :value="item.genreId" :popper-append-to-body="false">
                </el-radio-button>
              </el-radio-group>
            </div>
            <div style="margin: 5px" class="slider-demo-block">
              <div style="margin: 1px; font-size: 20px">评分</div>
              <el-slider style="margin-left: 8px;width: 285px;" step-color="#77cfbb" v-model="searchData.rating" :step="1"
                show-stops :max="5" />
            </div>
            <div style="margin: 5px">
              <button class="searchButton" @click="searchMovieButton"> 筛选 </button>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </el-aside>

    <el-main>
      <div style="display: flex;flex-direction: row;align-items: center;">
        <el-card style="width: 520px;height: 380px;" v-show="showMovie[0]" @click="clickMovie(0)">
          <div class="movieDesOut">
            <div class="movieDesIn">
              <el-image style="height: 200px;width: 150px;" :src=movieData[0].posterPath :fit="'scale-down'" />
              <div style="width: 350px;margin-left: 10px;">
                <el-descriptions :title=movieData[0].title :column="1">
                  <el-descriptions-item label="国家:">
                    <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                      v-for="item in movieData[0].country" :key=item.index>{{ item.countryName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="语言:">
                    <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[0].language }}
                    </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="类目:">
                    <el-tag size="small" style="background-color: rgb(179, 230, 230);" v-for="item in movieData[0].genre"
                      :key=item.index>{{ item.genreName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="发行时间:">
                    <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[0].time }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="评分:">
                    <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{ movieData[0].ratingAverage
                    }}</el-tag>
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
            <div style="height: 100px;">
              <el-descriptions>
                <el-descriptions-item label="简介:">
                  {{ movieData[0].overview }}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </div>
        </el-card>

        <el-card style="margin-left: 50px;width: 520px;height: 380px;" v-show="showMovie[1]" @click="clickMovie(1)">
          <div class="movieDesOut">
            <div class="movieDesIn">
              <el-image style="height: 200px;width: 150px;" :src=movieData[1].posterPath :fit="'scale-down'" />
              <div style="width: 350px;margin-left: 10px;">
                <el-descriptions :title=movieData[1].title :column="1">
                  <el-descriptions-item label="国家:">
                    <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                      v-for="item in movieData[1].country" :key=item.index>{{ item.countryName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="语言:">
                    <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[1].language }}
                    </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="类目:">
                    <el-tag size="small" style="background-color: rgb(179, 230, 230);" v-for="item in movieData[1].genre"
                      :key=item.index>{{ item.genreName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="发行时间:">
                    <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[1].time }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="评分:">
                    <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{ movieData[1].ratingAverage
                    }}</el-tag>
                  </el-descriptions-item>

                </el-descriptions>
              </div>
            </div>
            <div style="height: 100px;">
              <el-descriptions>
                <el-descriptions-item label="简介:">
                  {{ movieData[1].overview }}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </div>
        </el-card>
      </div>

      <div style="margin-top: 10px;display: flex;flex-direction: row;align-items: center;">
        <el-card style="width: 520px;height: 380px;" v-show="showMovie[2]" @click="clickMovie(2)">
          <div class="movieDesOut">
            <div class="movieDesIn">
              <el-image style="height: 200px;width: 150px;" :src=movieData[2].posterPath :fit="'scale-down'" />
              <div style="width: 350px;margin-left: 10px;">
                <el-descriptions :title=movieData[2].title :column="1">
                  <el-descriptions-item label="国家:">
                    <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                      v-for="item in movieData[2].country" :key=item.index>{{ item.countryName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="语言:">
                    <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[2].language }}
                    </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="类目:">
                    <el-tag size="small" style="background-color: rgb(179, 230, 230);" v-for="item in movieData[2].genre"
                      :key=item.index>{{ item.genreName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="发行时间:">
                    <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[2].time }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="评分:">
                    <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{ movieData[2].ratingAverage
                    }}</el-tag>
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
            <div style="height: 100px;">
              <el-descriptions>
                <el-descriptions-item label="简介:">
                  {{ movieData[2].overview }}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </div>
        </el-card>

        <el-card style="margin-left: 50px;width: 520px;height: 380px;" v-show="showMovie[3]" @click="clickMovie(3)">
          <div class="movieDesOut">
            <div class="movieDesIn">
              <el-image style="height: 200px;width: 150px;" :src=movieData[3].posterPath :fit="'scale-down'" />
              <div style="width: 350px;margin-left: 10px;">
                <el-descriptions :title=movieData[3].title :column="1">
                  <el-descriptions-item label="国家:">
                    <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                      v-for="item in movieData[3].country" :key=item.index>{{ item.countryName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="语言:">
                    <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[3].language }}
                    </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="类目:">
                    <el-tag size="small" style="background-color: rgb(179, 230, 230);" v-for="item in movieData[3].genre"
                      :key=item.index>{{ item.genreName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="发行时间:">
                    <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[3].time }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="评分:">
                    <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{ movieData[3].ratingAverage
                    }}</el-tag>
                  </el-descriptions-item>

                </el-descriptions>
              </div>
            </div>
            <div style="height: 100px;">
              <el-descriptions>
                <el-descriptions-item label="简介:">
                  {{ movieData[3].overview }}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </div>
        </el-card>
      </div>

      <div style="margin-top: 10px;display: flex;flex-direction: row;align-items: center;">
        <el-card style="width: 520px;height: 380px;" v-show="showMovie[4]" @click="clickMovie(4)">
          <div class="movieDesOut">
            <div class="movieDesIn">
              <el-image style="height: 200px;width: 150px;" :src=movieData[4].posterPath :fit="'scale-down'" />
              <div style="width: 350px;margin-left: 10px;">
                <el-descriptions :title=movieData[4].title :column="1">
                  <el-descriptions-item label="国家:">
                    <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                      v-for="item in movieData[4].country" :key=item.index>{{ item.countryName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="语言:">
                    <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[4].language }}
                    </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="类目:">
                    <el-tag size="small" style="background-color: rgb(179, 230, 230);" v-for="item in movieData[4].genre"
                      :key=item.index>{{ item.genreName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="发行时间:">
                    <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[4].time }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="评分:">
                    <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{ movieData[4].ratingAverage
                    }}</el-tag>
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
            <div style="height: 100px;">
              <el-descriptions>
                <el-descriptions-item label="简介:">
                  {{ movieData[4].overview }}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </div>
        </el-card>

        <el-card style="margin-left: 50px;width: 520px;height: 380px;" v-show="showMovie[5]" @click="clickMovie(5)">
          <div class="movieDesOut">
            <div class="movieDesIn">
              <el-image style="height: 200px;width: 150px;" :src=movieData[5].posterPath :fit="'scale-down'" />
              <div style="width: 350px;margin-left: 10px;">
                <el-descriptions :title=movieData[5].title :column="1">
                  <el-descriptions-item label="国家:">
                    <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                      v-for="item in movieData[5].country" :key=item.index>{{ item.countryName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="语言:">
                    <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[5].language }}
                    </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="类目:">
                    <el-tag size="small" style="background-color: rgb(179, 230, 230);" v-for="item in movieData[5].genre"
                      :key=item.index>{{ item.genreName }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="发行时间:">
                    <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[5].time }} </el-tag>
                  </el-descriptions-item>
                  <el-descriptions-item label="评分:">
                    <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{ movieData[5].ratingAverage
                    }}</el-tag>
                  </el-descriptions-item>

                </el-descriptions>
              </div>
            </div>
            <div style="height: 100px;">
              <el-descriptions>
                <el-descriptions-item label="简介:">
                  {{ movieData[5].overview }}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </div>
        </el-card>
      </div>

      <div style="width:350px;display: block;margin: 0 auto; margin-top: 10px;">
        <el-pagination @current-change="changePage" :current-page=curPage background layout="prev, pager, next"
          :page-count=totalPage v-show="showMovie[0]" />
      </div>
    </el-main>
  </el-container>
</template>

<script>
import { getAllGenre } from "../utils/api";
import { getMostLanguage } from "../utils/api";
import { getMostCountry } from "../utils/api";
import { searchMovie } from "../utils/api";
export default {
  data() {
    return {
      countryOptions: [],
      countryNames: [],
      countrySelected: "ALL",

      languageOptions: [],
      languageNames: [],
      languageSelected: "ALL",

      yearOptions: [
        {
          key: 0,
          name: "ALL",
        },
        {
          key: 2023,
          name: 2023,
        },
        {
          key: 2022,
          name: 2022,
        },
        {
          key: 2021,
          name: 2021,
        },
        {
          key: 2020,
          name: 2020,
        },
        {
          key: 2019,
          name: 2019,
        },
        {
          key: 2018,
          name: 2018,
        },
      ],
      yearSelected: "ALL",
      genreOptions: [],
      genreNames: [],
      genreSelected: "ALL",

      searchData: {
        current: 1,
        size: 6,
        movieNameKey: "",
        countryName: "",
        genreName: "",
        languageIso: "",
        year: "",
        rating: 0,
      },

      movieData: [
        {
          movieId: null,
          title: "",
          country: [],
          genre: [],
          language: "",
          time: "",
          overview: "",
          ratingAverage: "",
          posterPath: "",
        },
        {
          movieId: null,
          title: "",
          country: [],
          genre: [],
          language: "",
          time: "",
          overview: "",
          ratingAverage: "",
          posterPath: "",
        },
        {
          movieId: null,
          title: "",
          country: [],
          genre: [],
          language: "",
          time: "",
          overview: "",
          ratingAverage: "",
          posterPath: "",
        },
        {
          movieId: null,
          title: "",
          country: [],
          genre: [],
          language: "",
          time: "",
          overview: "",
          ratingAverage: "",
          posterPath: "",
        },
        {
          movieId: null,
          title: "",
          country: [],
          genre: [],
          language: "",
          time: "",
          overview: "",
          ratingAverage: "",
          posterPath: "",
        },
        {
          movieId: null,
          title: "",
          country: [],
          genre: [],
          language: "",
          time: "",
          overview: "",
          ratingAverage: "",
          posterPath: "",
        },
      ],
      showMovie: [
        false, false, false, false, false, false
      ],
      curPage: 1,
      totalPage: 0,
    };
  },
  created() {
    //得到常见国家
    getMostCountry(8)
      .then((res) => {
        if (res.code == 1) {
          this.countryNames = res.data;
          this.countryOptions.push({
            countryId: 0,
            countryName: "ALL",
          });
          for (let i = 0; i < this.countryNames.length; i++) {
            this.countryOptions.push({
              countryId: i + 1,
              countryName: this.countryNames[i].countryName,
            });
          }
        } else if (res.code == 0) {
          this.countryOptions = [];
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
    //得到常见语言
    getMostLanguage(8)
      .then((res) => {
        if (res.code == 1) {
          this.languageNames = res.data;
          this.languageOptions.push({
            languageIso: "ALL",
            languageId: 0,
            languageName: "ALL",
          });
          for (let i = 0; i < this.languageNames.length; i++) {
            this.languageOptions.push({
              languageIso: this.languageNames[i].iso,
              languageId: i + 1,
              languageName: this.languageNames[i].languageName,
            });
          }
        } else if (res.code == 0) {
          this.languageOptions = [];
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
    //得到所有类目
    getAllGenre()
      .then((res) => {
        if (res.code == 1) {
          this.genreNames = res.data;
          this.genreOptions.push({
            genreId: 0,
            genreName: "ALL",
          });
          for (let i = 0; i < this.genreNames.length; i++) {
            this.genreOptions.push({
              genreId: i + 1,
              genreName: this.genreNames[i].genreName,
            });
          }
        } else if (res.code == 0) {
          this.genreOptions = [];
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  methods: {
    //搜索框回车键
    movieEnter() {
      if (this.searchData.movieNameKey == "") {
        this.$message({
          showClose: true,
          message: '请输入要搜索电影的关键字',
          type: 'error'
        })
      }
      else {
        this.searchData.current = 1;
        this.curPage = 1;
        searchMovie(this.searchData).then(res => {
          console.log(res)
          if (res.code == 1) {
            if (res.data.records.length == 0) {
              this.$message({
                showClose: true,
                message: '未找到符合搜索条件的电影',
                type: 'error'
              })
            } else {
              this.totalPage = res.data.pages;
              const resData = res.data.records;
              console.log(resData)
              this.movieData[0].country = [];
              this.movieData[1].country = [];
              this.movieData[2].country = [];
              this.movieData[3].country = [];
              this.movieData[4].country = [];
              this.movieData[5].country = [];

              this.movieData[0].genre = [];
              this.movieData[1].genre = [];
              this.movieData[2].genre = [];
              this.movieData[3].genre = [];
              this.movieData[4].genre = [];
              this.movieData[5].genre = [];

              for (let i = 0; i < resData.length; i++) {
                this.movieData[i].movieId = resData[i].movieId;
                this.movieData[i].title = resData[i].title;
                this.movieData[i].language = resData[i].originalLanguage;
                this.movieData[i].overview = resData[i].overview;
                this.movieData[i].ratingAverage = resData[i].ratingAverage;
                this.movieData[i].time = resData[i].releaseDate;
                this.movieData[i].posterPath = "https://image.tmdb.org/t/p/original" + resData[i].posterPath;

                for (let j = 0; j < resData[i].movieCountryList.length; j++) {
                  this.movieData[i].country.push({
                    countryName: resData[i].movieCountryList[j].country.countryName,
                    index: resData[i].movieCountryList[j].country.countryId,
                  });
                }
                for (let j = 0; j < resData[i].movieGenreList.length; j++) {
                  this.movieData[i].genre.push({
                    genreName: resData[i].movieGenreList[j].genre.genreName,
                    index: resData[i].movieGenreList[j].genre.genreId,
                  });
                }
                this.showMovie[i] = true;
              }
              console.log(this.movieData)

              this.$message({
                showClose: true,
                message: '搜索电影成功',
                type: 'success'
              })

            }

          } else {
            this.$message({
              showClose: true,
              message: '搜索电影失败',
              type: 'error'
            })
          }
        }).catch(err => {
          console.log(err.response)
        })
      }
    },

    //筛选按钮
    searchMovieButton() {
      if (this.countrySelected == "ALL") {
        this.searchData.countryName = "";
      } else {
        this.searchData.countryName = this.countrySelected;
      }

      if (this.languageSelected == "ALL") {
        this.searchData.languageIso = "";
      } else {
        for (let i = 1; i < this.languageOptions.length; i++) {
          if (this.languageOptions[i].languageName == this.languageSelected) {
            this.searchData.languageIso = this.languageOptions[i].languageIso;
            break;
          }
        }
      }

      if (this.genreSelected == "ALL") {
        this.searchData.genreName = "";
      } else {
        this.searchData.genreName = this.genreSelected;
      }

      if (this.yearSelected == "ALL") {
        this.searchData.year = "";
      } else {
        this.searchData.year = this.yearSelected;
      }

      console.log(this.searchData)
      this.searchData.current = 1;
      this.curPage = 1;
      searchMovie(this.searchData).then(res => {
        console.log(res)
        if (res.code == 1) {
          if (res.data.records.length == 0) {
            this.$message({
              showClose: true,
              message: '未找到符合搜索条件的电影',
              type: 'error'
            })
          } else {
            this.totalPage = res.data.pages;
            const resData = res.data.records;
            console.log(resData)
            this.movieData[0].country = [];
            this.movieData[1].country = [];
            this.movieData[2].country = [];
            this.movieData[3].country = [];
            this.movieData[4].country = [];
            this.movieData[5].country = [];

            this.movieData[0].genre = [];
            this.movieData[1].genre = [];
            this.movieData[2].genre = [];
            this.movieData[3].genre = [];
            this.movieData[4].genre = [];
            this.movieData[5].genre = [];

            for (let i = 0; i < resData.length; i++) {
              this.movieData[i].movieId = resData[i].movieId;
              this.movieData[i].title = resData[i].title;
              this.movieData[i].language = resData[i].originalLanguage;
              this.movieData[i].overview = resData[i].overview;
              this.movieData[i].ratingAverage = resData[i].ratingAverage;
              this.movieData[i].time = resData[i].releaseDate;
              this.movieData[i].posterPath = "https://cos-lqyrmk-1312783534.cos.ap-beijing.myqcloud.com/resources/emovie/movie_poster/1/" + resData[i].imdbId + ".jpg";

              for (let j = 0; j < resData[i].movieCountryList.length; j++) {
                this.movieData[i].country.push({
                  countryName: resData[i].movieCountryList[j].country.countryName,
                  index: resData[i].movieCountryList[j].country.countryId,
                });
              }
              for (let j = 0; j < resData[i].movieGenreList.length; j++) {
                this.movieData[i].genre.push({
                  genreName: resData[i].movieGenreList[j].genre.genreName,
                  index: resData[i].movieGenreList[j].genre.genreId,
                });
              }
              this.showMovie[i] = true;
            }
            console.log(this.movieData)

            this.$message({
              showClose: true,
              message: '搜索电影成功',
              type: 'success'
            })
          }

        } else {
          this.$message({
            showClose: true,
            message: '搜索电影失败',
            type: 'error'
          })
        }
      }).catch(err => {
        console.log(err.response)
      })
    },

    //页码改变
    changePage(val) {
      console.log(val)
      this.showMovie = [false, false, false, false, false, false];
      this.searchData.current = val;
      this.curPage = val;
      searchMovie(this.searchData).then(res => {
        console.log(res)
        if (res.code == 1) {
          if (res.data.records.length == 0) {
            this.$message({
              showClose: true,
              message: '未找到符合搜索条件的电影',
              type: 'error'
            })
          } else {
            this.totalPage = res.data.pages;
            const resData = res.data.records;
            console.log(resData)
            this.movieData[0].country = [];
            this.movieData[1].country = [];
            this.movieData[2].country = [];
            this.movieData[3].country = [];
            this.movieData[4].country = [];
            this.movieData[5].country = [];

            this.movieData[0].genre = [];
            this.movieData[1].genre = [];
            this.movieData[2].genre = [];
            this.movieData[3].genre = [];
            this.movieData[4].genre = [];
            this.movieData[5].genre = [];

            for (let i = 0; i < resData.length; i++) {
              this.movieData[i].movieId = resData[i].movieId;
              this.movieData[i].title = resData[i].title;
              this.movieData[i].language = resData[i].originalLanguage;
              this.movieData[i].overview = resData[i].overview;
              this.movieData[i].ratingAverage = resData[i].ratingAverage;
              this.movieData[i].time = resData[i].releaseDate;
              this.movieData[i].posterPath = "https://cos-lqyrmk-1312783534.cos.ap-beijing.myqcloud.com/resources/emovie/movie_poster/1/" + resData[i].imdbId + ".jpg";

              for (let j = 0; j < resData[i].movieCountryList.length; j++) {
                this.movieData[i].country.push({
                  countryName: resData[i].movieCountryList[j].country.countryName,
                  index: resData[i].movieCountryList[j].country.countryId,
                });
              }
              for (let j = 0; j < resData[i].movieGenreList.length; j++) {
                this.movieData[i].genre.push({
                  genreName: resData[i].movieGenreList[j].genre.genreName,
                  index: resData[i].movieGenreList[j].genre.genreId,
                });
              }
              this.showMovie[i] = true;
            }
            console.log(this.movieData)

            this.$message({
              showClose: true,
              message: '搜索电影成功',
              type: 'success'
            })
          }

        } else {
          this.$message({
            showClose: true,
            message: '搜索电影失败',
            type: 'error'
          })
        }
      }).catch(err => {
        console.log(err.response)
      })
    },

    //点击电影，跳转到电影详情页
    clickMovie(val) {
      this.$router.push('/moviedetails/' + this.movieData[val].movieId)
    }

  }
};
</script>

<style>
/* 电影名搜索输入框 */
.search {
  width: 230px;
  height: 28px;
  margin-left: 10px;
  color: rgb(0, 0, 0);
  border: 0;
  border-bottom: 2px solid #056630;
}

.search:focus {
  border-top: 2px solid #000000;
  border: 2px solid #000000;
  border-bottom: 2px solid #000000;
}

.search:hover {
  border-bottom: 2px solid #033f1e;
}

/* 折叠面板 */
.collapse .el-collapse-item__header {
  border-bottom: 2px solid #056630;
  background-color: #ffffff;
  font-size: 25px;
}

/* 单选框按钮 */
.el-radio-button {
  border: 0.5px solid #494949;
  border-radius: 8%;
}

.el-radio-button .el-radio-button__inner {
  font-size: 20px;
  width: 100px;
  border: 0.5px solid #77cfbb;
  border-radius: 5%;
}

/* 滑动条颜色 */
.slider-demo-block .el-slider__bar {
  background-color: #52b89d;
}

/* 滑块颜色 */
.slider-demo-block .el-slider__button {
  border: 2px solid #04522d;
}

.searchButton {
  width: 100px;
  border: 1px solid seagreen;
  border-radius: 5px;
  background: rgb(255, 255, 255);
  color: seagreen;
  font-style: italic;
  padding: 10px;
  padding-right: 14px;
  padding-left: 12px;
  font-size: 17px;
  display: block;
  margin: 0 auto;
}

.searchButton:hover {
  background-color: seagreen;
  color: white;
  border: 1px solid seagreen;
}

.movieDesOut {
  display: flex;
  flex-direction: column;
}

.movieDesIn {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
