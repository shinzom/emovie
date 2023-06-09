<template>
    <div style="display: flex;flex-direction: row;align-items: center;margin-left: 20px;margin-top: 10px;">
        <el-card style="width: 715px;height: 310px;" v-show="showMovie[0]" @click="clickMovie(0)">
            <div class="movieDesOut">
                <div class="movieDesIn">
                    <el-image style="height: 200px;width:150px;" :src=movieData[0].posterPath :fit="'scale-down'" />
                    <div style="width: 605px;margin-left: 10px;">
                        <el-descriptions :title=movieData[0].title :column="3">
                            <el-descriptions-item label="发行时间:">
                                <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[0].time }}
                                </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="评分:">
                                <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{
                                    movieData[0].ratingAverage
                                }}</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="语言:">
                                <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[0].language
                                }}
                                </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                        <el-descriptions :column="1">
                            <el-descriptions-item label="国家:">
                                <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                                    v-for="item in movieData[0].country" :key=item.index>{{ item.countryName }} </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="类目:">
                                <el-tag size="small" style="background-color: rgb(179, 230, 230);"
                                    v-for="item in movieData[0].genre" :key=item.index>{{ item.genreName }} </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                    </div>
                </div>
                <div style="height: 100px;">
                    <el-descriptions :column="1">
                        <el-descriptions-item label="简介:">
                            {{ movieData[0].overview }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
        </el-card>

        <el-card style="margin-left: 50px;width: 715px;height: 310px;" v-show="showMovie[1]" @click="clickMovie(1)">
            <div class="movieDesOut">
                <div class="movieDesIn">
                    <el-image style="height: 200px;width: 150px;" :src=movieData[1].posterPath :fit="'scale-down'" />
                    <div style="width: 605px;margin-left: 10px;">
                        <el-descriptions :title=movieData[1].title :column="3">
                            <el-descriptions-item label="发行时间:">
                                <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[1].time }}
                                </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="评分:">
                                <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{
                                    movieData[1].ratingAverage
                                }}</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="语言:">
                                <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[1].language
                                }}
                                </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                        <el-descriptions :column="1">
                            <el-descriptions-item label="国家:">
                                <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                                    v-for="item in movieData[1].country" :key=item.index>{{ item.countryName }} </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="类目:">
                                <el-tag size="small" style="background-color: rgb(179, 230, 230);"
                                    v-for="item in movieData[1].genre" :key=item.index>{{ item.genreName }} </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                    </div>
                </div>
                <div style="height: 100px;">
                    <el-descriptions :column="1">
                        <el-descriptions-item label="简介:">
                            {{ movieData[1].overview }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
        </el-card>
    </div>

    <div style="display: flex;flex-direction: row;align-items: center;margin-left: 20px;margin-top: 10px;">
        <el-card style="width: 715px;height: 310px;" v-show="showMovie[2]" @click="clickMovie(2)">
            <div class="movieDesOut">
                <div class="movieDesIn">
                    <el-image style="height: 200px;width:150px;" :src=movieData[2].posterPath :fit="'scale-down'" />
                    <div style="width: 605px;margin-left: 10px;">
                        <el-descriptions :title=movieData[2].title :column="3">
                            <el-descriptions-item label="发行时间:">
                                <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[2].time }}
                                </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="评分:">
                                <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{
                                    movieData[2].ratingAverage
                                }}</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="语言:">
                                <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[2].language
                                }}
                                </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                        <el-descriptions :column="1">
                            <el-descriptions-item label="国家:">
                                <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                                    v-for="item in movieData[2].country" :key=item.index>{{ item.countryName }} </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="类目:">
                                <el-tag size="small" style="background-color: rgb(179, 230, 230);"
                                    v-for="item in movieData[2].genre" :key=item.index>{{ item.genreName }} </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                    </div>
                </div>
                <div style="height: 100px;">
                    <el-descriptions :column="1">
                        <el-descriptions-item label="简介:">
                            {{ movieData[2].overview }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
        </el-card>

        <el-card style="margin-left: 50px;width: 715px;height: 310px;" v-show="showMovie[3]" @click="clickMovie(3)">
            <div class="movieDesOut">
                <div class="movieDesIn">
                    <el-image style="height: 200px;width: 150px;" :src=movieData[3].posterPath :fit="'scale-down'" />
                    <div style="width: 605px;margin-left: 10px;">
                        <el-descriptions :title=movieData[3].title :column="3">
                            <el-descriptions-item label="发行时间:">
                                <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[3].time }}
                                </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="评分:">
                                <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{
                                    movieData[3].ratingAverage
                                }}</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="语言:">
                                <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[3].language
                                }}
                                </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                        <el-descriptions :column="1">
                            <el-descriptions-item label="国家:">
                                <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                                    v-for="item in movieData[3].country" :key=item.index>{{ item.countryName }} </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="类目:">
                                <el-tag size="small" style="background-color: rgb(179, 230, 230);"
                                    v-for="item in movieData[3].genre" :key=item.index>{{ item.genreName }} </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                    </div>
                </div>
                <div style="height: 100px;">
                    <el-descriptions :column="1">
                        <el-descriptions-item label="简介:">
                            {{ movieData[3].overview }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
        </el-card>
    </div>

    <div style="display: flex;flex-direction: row;align-items: center;margin-left: 20px;margin-top: 10px;">
        <el-card style="width: 715px;height: 310px;" v-show="showMovie[4]" @click="clickMovie(4)">
            <div class="movieDesOut">
                <div class="movieDesIn">
                    <el-image style="height: 200px;width:150px;" :src=movieData[4].posterPath :fit="'scale-down'" />
                    <div style="width: 605px;margin-left: 10px;">
                        <el-descriptions :title=movieData[4].title :column="3">
                            <el-descriptions-item label="发行时间:">
                                <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[4].time }}
                                </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="评分:">
                                <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{
                                    movieData[4].ratingAverage
                                }}</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="语言:">
                                <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[4].language
                                }}
                                </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                        <el-descriptions :column="1">
                            <el-descriptions-item label="国家:">
                                <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                                    v-for="item in movieData[4].country" :key=item.index>{{ item.countryName }} </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="类目:">
                                <el-tag size="small" style="background-color: rgb(179, 230, 230);"
                                    v-for="item in movieData[4].genre" :key=item.index>{{ item.genreName }} </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                    </div>
                </div>
                <div style="height: 100px;">
                    <el-descriptions :column="1">
                        <el-descriptions-item label="简介:">
                            {{ movieData[4].overview }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
        </el-card>

        <el-card style="margin-left: 50px;width: 715px;height: 310px;" v-show="showMovie[5]" @click="clickMovie(5)">
            <div class="movieDesOut">
                <div class="movieDesIn">
                    <el-image style="height: 200px;width: 150px;" :src=movieData[5].posterPath :fit="'scale-down'" />
                    <div style="width: 605px;margin-left: 10px;">
                        <el-descriptions :title=movieData[5].title :column="3">
                            <el-descriptions-item label="发行时间:">
                                <el-tag size="small" style="background-color: rgb(226, 207, 254);">{{ movieData[5].time }}
                                </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="评分:">
                                <el-tag size="small" style="background-color: rgb(223, 199, 206);">{{
                                    movieData[5].ratingAverage
                                }}</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="语言:">
                                <el-tag size="small" style="background-color: rgb(184, 230, 211);">{{ movieData[5].language
                                }}
                                </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                        <el-descriptions :column="1">
                            <el-descriptions-item label="国家:">
                                <el-tag size="small" style="background-color: rgb(230, 226, 179);"
                                    v-for="item in movieData[5].country" :key=item.index>{{ item.countryName }} </el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="类目:">
                                <el-tag size="small" style="background-color: rgb(179, 230, 230);"
                                    v-for="item in movieData[5].genre" :key=item.index>{{ item.genreName }} </el-tag>
                            </el-descriptions-item>
                        </el-descriptions>
                    </div>
                </div>
                <div style="height: 100px;">
                    <el-descriptions :column="1">
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
</template>

<script>
import { hotOrRatingMovie } from "../utils/api";
export default {
    data() {
        return {
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
        }
    },
    created() {
        this.curPage = this.$route.params.page;
        hotOrRatingMovie(this.curPage, 6, 3).then((res) => {
            console.log(res)
            if (res.code == 1) {
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
            } else {
                this.$message({
                    showClose: true,
                    message: '搜索高分电影失败',
                    type: 'error'
                })
            }
        }).catch(err => {
            console.log(err.response)
        })
    },
    methods: {
        //页码改变
        changePage(val) {
            console.log(val)
            this.showMovie = [false, false, false, false, false, false];
            this.curPage = val;
            this.$router.push('/recommend/'+this.curPage)
            hotOrRatingMovie(this.curPage, 6, 3).then((res) => {
                console.log(res)
                if (res.code == 1) {
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
                } else {
                    this.$message({
                        showClose: true,
                        message: '搜索高分电影失败',
                        type: 'error'
                    })
                }
            }).catch(err => {
                console.log(err.response)
            })
        },

        //点击电影，跳转到电影详情页
        clickMovie(val){
            this.$router.push('/moviedetails/' + this.movieData[val].movieId)
        }
    }
}
</script>

<style>
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
