<template>
    <el-container style="width:100%;height: 850px;" class="add">
        <el-header>
            <div class="admintitle">
                <span>管理员▶添加电影和类目</span>
            </div>
        </el-header>
        <el-container style="height: 100%;width: 100%;" class="mytab">
            <el-tabs tab-position="left" style="height: 780px;width: 100%;" class="demo-tabs">
                <el-tab-pane label="添加电影">
                    <div class="movie_div">
                        <div style="margin-top: 10px;margin-left:100px;width:500px;height:680px;float: left;">
                            <el-form-item label="电影名称：" class="label">
                                <el-input v-model="movieData.movie.title" style="width:300px" placeholder="请输入电影名称" />
                            </el-form-item>
                            <el-form-item label="原名：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.movie.originalTitle" style="width:300px"
                                    placeholder="请输入电影原名" />
                            </el-form-item>
                            <el-form-item label="状态：" class="label" style="margin-left: 32px;">
                                <el-radio-group v-model="movieData.movie.status">
                                    <el-radio label="Released" size="large">已发行</el-radio>
                                    <el-radio label="NotReleased" size="large">未发行</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="国家：" class="label" style="margin-left: 32px;">
                                <!-- <el-select v-model="movieData.countryIdList" multiple filterable remote
                                    reserve-keywordreserve-keyword placeholder="请输入电影国家"
                                    :remote-method="transshipmentdepotremoteMethod" :focus="transshipmentdepotremoteMethod"
                                    :loading="loading" style="width:300px">
                                    <el-option v-for="item in countryOptions" :key="item.countryId"
                                        :label="item.countryName" :value="item.countryId" :popper-append-to-body="false">
                                    </el-option>
                                </el-select> -->
                                <el-autocomplete v-model="inputValue" :fetch-suggestions="querySearchAsync"
                                    :popper-class="'my-autocomplete-popper'" placeholder="请输入国家名" @select="handleSelect"
                                    style="width: 300px; height: auto;">
                                    <!-- <template slot-scope="{ item }">
                                        <div>{{ item.value }}</div>
                                    </template> -->
                                </el-autocomplete>
                                <el-tag v-for="(countriesName, index) in selected" :key="index" closable
                                    @close="handleTagClose(countriesName)">{{ countriesName }}</el-tag>
                            </el-form-item>

                            <el-form-item label="语言：" class="label" style="margin-left: 32px;">
                                <el-autocomplete v-model="inputLanguage" :fetch-suggestions="querySearchAsyncLanguage"
                                    :popper-class="'my-autocomplete-popper'" placeholder="请输入语言"
                                    @select="handleSelectLanguage" style="width: 300px; height: auto;">
                                </el-autocomplete>
                                <el-tag v-for="(languagesName, index) in selectedLanguage" :key="index" closable
                                    @close="handleTagCloseLanguage(languagesName)">{{ languagesName }}</el-tag>
                            </el-form-item>
                            <el-form-item label="官网主页：" class="label">
                                <el-input v-model="movieData.movie.homepage" style="width:300px" placeholder="请输入电影官网主页" />
                            </el-form-item>
                            <el-form-item label="导语：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.movie.tagline" style="width:300px" placeholder="请输入电影导语" />
                            </el-form-item>
                            <el-form-item label="电影概述：" class="label">
                                <el-input v-model="movieData.movie.overview" style="width:300px;" type="textarea" clearable
                                    :autosize="{ minRows: 10, maxRows: 20 }" maxlength="1000" placeholder="请输入电影概述" />
                            </el-form-item>
                        </div>
                        
                        <div style="margin-top: 10px;width:500px;height:680px;float: left;">
                            <el-form-item label="导演：" class="label" style="margin-left: 32px;">
                                <el-autocomplete v-model="inputDirector" :fetch-suggestions="querySearchAsyncDirector"
                                    :popper-class="'my-autocomplete-popper'" placeholder="请输入要搜索的导演" @select="handleSelectDirector"
                                    style="width: 300px; height: auto;">
                                </el-autocomplete>
                                <el-tag v-for="(directorsName, index) in selectedDirector" :key="index" closable
                                    @close="handleTagCloseDirector(directorsName)">{{ directorsName }}</el-tag>
                            </el-form-item>
                            <el-form-item label="导演：" class="label" style="margin-left: 32px;">
                                <el-input v-model="inputDirectorName" style="width:300px" placeholder="请输入要添加的导演"
                                    @keyup.enter="directorName" />
                                <el-tag v-for="(directorsName, index) in selectedDirectorName" :key="index" closable
                                    @close="handleTagCloseDirectorName(directorsName)">{{ directorsName }}</el-tag>
                            </el-form-item>
                            <el-form-item label="演员：" class="label" style="margin-left: 32px;">
                                <el-autocomplete v-model="inputActor" :fetch-suggestions="querySearchAsyncActor"
                                    :popper-class="'my-autocomplete-popper'" placeholder="请输入要搜索的演员" @select="handleSelectActor"
                                    style="width: 300px; height: auto;">
                                </el-autocomplete>
                                <el-tag v-for="(actorsName, index) in selectedActor" :key="index" closable
                                    @close="handleTagCloseActor(actorsName)">{{ actorsName }}</el-tag>
                            </el-form-item>
                            <el-form-item label="演员：" class="label" style="margin-left: 32px;">
                                <el-input v-model="inputActorName" style="width:300px" placeholder="请输入要添加的演员"
                                    @keyup.enter="actorName" />
                                <el-tag v-for="(actorsName, index) in selectedActorName" :key="index" closable
                                    @close="handleTagCloseActorName(actorsName)">{{ actorsName }}</el-tag>
                            </el-form-item>
                            <el-form-item label="时长：" class="label" style="margin-left: 32px;">
                                <el-time-picker v-model="movieData.movie.runtime" format="hh:mm:ss" value-format="hh:mm:ss"
                                    placeholder="请选择电影时长" style="width: 300px; height: auto;" />
                            </el-form-item>
                            <el-form-item label="发行时间：" class="label">
                                <el-date-picker v-model="movieData.movie.releaseDate" type="date" format="YYYY-MM-DD"
                                    value-format="YYYY-MM-DD" placeholder="请选择电影发行时间" style="width:300px" />
                            </el-form-item>
                            <el-form-item label="热度：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.movie.popularity" style="width:300px" placeholder="请输入电影热度" />
                            </el-form-item>
                            <el-form-item label="收入：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.movie.revenue" style="width:300px" placeholder="请输入电影收入" />
                            </el-form-item>
                            <el-form-item label="仅限成人：" class="label">
                                <el-radio-group v-model="movieData.movie.adult">
                                    <el-radio :label="true">是</el-radio>
                                    <el-radio :label="false">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="预算：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.movie.budget" style="width:300px" placeholder="请输入电影预算" />
                            </el-form-item>
                            <el-form-item label="平均评分：" class="label">
                                <el-input v-model="movieData.movie.voteAverage" style="width:300px"
                                    placeholder="请输入电影平均评分" />
                            </el-form-item>
                            <el-form-item label="评分人数：" class="label">
                                <el-input v-model="movieData.movie.voteCount" style="width:300px" placeholder="请输入电影评分人数" />
                            </el-form-item>
                        </div>

                        <button class="movie_btn" @click="addMovie">添加电影</button>
                    </div>

                </el-tab-pane>
                <el-tab-pane label="添加类目">
                    <div style="margin-left: 50px;margin-top: 10px;width:600px;height:200px;float: left;">
                        <span style="font-size: 25px;">★添加类目</span>
                        <div class="mycard">
                            <el-form-item label="类目：" class="label"
                                style="width:500px;height:30px;float: left;margin-left: 40px;margin-top: 10px;">
                                <el-input v-model="genre.genreName" style="width:300px" placeholder="请输入电影类目" />
                            </el-form-item>
                            <button class="genres_btn" @click="addGenres">添加类目</button>
                        </div>
                    </div>

                    <div style="margin-left: 20px;margin-top: 10px;width:600px;height:200px;float: left;">
                        <span style="font-size: 25px;">★添加电影到类目中</span>
                        <div class="mycard">
                            <div style="height:10px;"></div>
                            <el-form-item label="输入电影名：" class="label" style="margin-left: 40px;">
                                <el-select v-model="movieaddgenreData.movieId" filterable remote
                                    reserve-keywordreserve-keyword placeholder="请输入电影名"
                                    :remote-method="transshipmentdepotremoteMethod" :focus="transshipmentdepotremoteMethod"
                                    :loading="loading" style="width:300px">
                                    <el-option v-for="item in movieOptions" :key="item.movieId" :label="item.title"
                                        :value="item.movieId" :popper-append-to-body="false">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="输入类目名：" class="label" style="margin-left: 40px;">
                                <el-select v-model="movieaddgenreData.genreId" filterable remote
                                    reserve-keywordreserve-keyword placeholder="请输入类目名" :remote-method="genreMethod"
                                    :focus="genreMethod" :loading="loadinggenre" style="width:300px">
                                    <el-option v-for="item in genreOptions" :key="item.genreId" :label="item.genreName"
                                        :value="item.genreId" :popper-append-to-body="false">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <button class="genres_btn" @click="addMovieGenres">添加</button>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-container>
    </el-container>
</template>

<script>
import axios from 'axios';
import { movieadd } from '../utils/api'
import { genreadd } from '../utils/api'
import { getmovie } from '../utils/api'
import { getgenre } from '../utils/api'
import { movieaddgenre } from '../utils/api'
import { number } from 'echarts';
export default {
    data() {
        return {
            //模糊查询国家
            inputValue: '',
            suggestions: [],
            selected: [],

            //模糊查询语言
            inputLanguage: '',
            suggestionsLanguage: [],
            selectedLanguage: [],

            //模糊查询演员
            inputActor: '',
            suggestionsActor: [],
            selectedActor: [],
            inputActorName: '',
            selectedActorName: [],

            //模糊查询导演
            inputDirector: '',
            suggestionsDirector: [],
            selectedDirector: [],
            inputDirectorName: '',
            selectedDirectorName: [],

            //添加电影时的数据
            movieData: {
                movie: {
                    title: "",
                    originalTitle: "",
                    originalLanguage: "",
                    tagline: "",
                    overview: "",
                    runtime: "",
                    status: "",
                    releaseDate: "",
                    homepage: "",
                    popularity: "",
                    revenue: "",
                    adult: "",
                    budget: "",
                    voteAverage: "",
                    voteCount: "",
                },
                countryIdList: [],
                languageIdList: [],
                castIdList: [],
                newCastNameList: [],
                directorIdList: [],
                newDirectorNameList: [],
            },

            //添加类目时的数据
            genre: {
                genreName: "",//类目
            },

            //模糊查询电影
            movieOptions: [],
            movieAll: [],
            loading: false,

            //模糊查询类目
            genreOptions: [],
            genreAll: [],
            loadinggenre: false,

            movieaddgenreData: {
                movieId: null,
                genreId: null,
            },
        }
    },
    created() {
        const movieKey = "";
        getmovie(movieKey, 10).then(res => {
            if (res.code == 1) {
                console.log(res);
                this.movieOptions = res.data;
                this.movieAll = res.data;
            } else if (res.code == 0) {
                this.movieOptions = [];
            }
        }).catch(err => {
            console.log(err.response)
        })

        const genreKey = "";
        getgenre(genreKey, 10).then(res => {
            if (res.code == 1) {
                console.log(res);
                this.genreOptions = res.data;
                this.genreAll = res.data;
            } else if (res.code == 0) {
                this.genreOptions = [];
            }
        }).catch(err => {
            console.log(err.response)
        })
    },
    methods: {
        //模糊查询国家
        querySearchAsync(queryString, callback) {
            axios.get(`http://43.143.247.127:8088/country?countryKey=${queryString}&limit=15`)
                .then(response => {
                    const countries = response.data.data;
                    const suggestionNames = [];
                    // 读取数据，获取每个国家的countryName
                    for (let i = 0; i < countries.length; i++) {
                        suggestionNames.push({
                            label: countries[i].countryId,
                            value: countries[i].countryName,
                        });
                    }
                    this.suggestions = suggestionNames;
                    // console.log(suggestionNames)
                    callback(this.suggestions);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        handleSelect(item) {
            this.inputValue = '';
            // 不能重复添加
            if (!this.selected.includes(item.value)) {
                this.selected.push(item.value);
                // 添加id到countryIdList中
                this.movieData.countryIdList.push(item.label);
                console.log(this.movieData.countryIdList)
            }
        },
        handleTagClose(countryName) {
            const index = this.selected.indexOf(countryName);
            if (index !== -1) {
                this.selected.splice(index, 1);
            }
        },

        //模糊查询语言
        querySearchAsyncLanguage(queryString, callback) {
            axios.get(`http://43.143.247.127:8088/language?languageKey=${queryString}&limit=15`)
                .then(response => {
                    const languages = response.data.data;
                    const suggestionNames = [];
                    console.log(languages)
                    // 读取数据，获取每个国家的languageName
                    for (let i = 0; i < languages.length; i++) {
                        suggestionNames.push({
                            label: languages[i].languageId,
                            value: languages[i].languageName,
                        });
                    }
                    this.suggestionsLanguage = suggestionNames;
                    callback(this.suggestionsLanguage);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        handleSelectLanguage(item) {
            this.inputLanguage = '';
            // 不能重复添加
            if (!this.selectedLanguage.includes(item.value)) {
                this.selectedLanguage.push(item.value);
                // 添加id到languageIdList中
                this.movieData.languageIdList.push(item.label);
                console.log(this.movieData.languageIdList)
            }
        },
        handleTagCloseLanguage(languagesName) {
            const index = this.selectedLanguage.indexOf(languagesName);
            if (index !== -1) {
                this.selectedLanguage.splice(index, 1);
            }
            // console.log(this.selectedLanguage)
            // this.movieData.languageIdList = [];
            // for(let i = 0;i<this.selectedLanguage.length;i++){
            //     this.movieData.languageIdList.push(this.selectedLanguage[i]);
            // }
        },

        //模糊查询导演
        querySearchAsyncDirector(queryString, callback) {
            axios.get(`http://43.143.247.127:8088/person?personKey=${queryString}&limit=15`)
                .then(response => {
                    const directors = response.data.data;
                    const suggestionNames = [];
                    console.log(directors)
                    // 读取数据，获取每个导演的directorName
                    for (let i = 0; i < directors.length; i++) {
                        suggestionNames.push({
                            label: directors[i].personId,
                            value: directors[i].castName,
                        });
                    }
                    this.suggestionsDirector = suggestionNames;
                    callback(this.suggestionsDirector);
                })
                .catch(error => {
                    console.log(error);
                });
        },

        handleSelectDirector(item) {
            this.inputDirector = '';
            // 不能重复添加
            if (!this.selectedDirector.includes(item.value)) {
                this.selectedDirector.push(item.value);
                // 添加id到castIdList中
                this.movieData.directorIdList.push(item.label);
                console.log(this.movieData.directorIdList)
            }
        },
        handleTagCloseDirector(directorsName) {
            const index = this.selectedDirector.indexOf(directorsName);
            if (index !== -1) {
                this.selectedDirector.splice(index, 1);
            }
        },
        directorName() {
            if (this.inputDirectorName != "") {
                this.movieData.newDirectorNameList.push(this.inputDirectorName);
                this.selectedDirectorName.push(this.inputDirectorName);
                this.inputDirectorName = "";
            }
        },
        handleTagCloseDirectorName(directorsName) {
            const index = this.selectedDirectorName.indexOf(directorsName);
            if (index !== -1) {
                this.selectedDirectorName.splice(index, 1);
            }
        },

        //模糊查询演员
        querySearchAsyncActor(queryString, callback) {
            axios.get(`http://43.143.247.127:8088/person?personKey=${queryString}&limit=15`)
                .then(response => {
                    const actors = response.data.data;
                    const suggestionNames = [];
                    console.log(actors)
                    // 读取数据，获取每个演员的actorName
                    for (let i = 0; i < actors.length; i++) {
                        suggestionNames.push({
                            label: actors[i].personId,
                            value: actors[i].castName,
                        });
                    }
                    this.suggestionsActor = suggestionNames;
                    callback(this.suggestionsActor);
                })
                .catch(error => {
                    console.log(error);
                });
        },

        handleSelectActor(item) {
            this.inputActor = '';
            // 不能重复添加
            if (!this.selectedActor.includes(item.value)) {
                this.selectedActor.push(item.value);
                // 添加id到castIdList中
                this.movieData.castIdList.push(item.label);
                console.log(this.movieData.castIdList)
            }
        },
        handleTagCloseActor(actorsName) {
            const index = this.selectedActor.indexOf(actorsName);
            if (index !== -1) {
                this.selectedActor.splice(index, 1);
            }
        },
        actorName() {
            if (this.inputActorName != "") {
                this.movieData.newCastNameList.push(this.inputActorName);
                this.selectedActorName.push(this.inputActorName);
                this.inputActorName = "";
            }
        },
        handleTagCloseActorName(actorsName) {
            const index = this.selectedActorName.indexOf(actorsName);
            if (index !== -1) {
                this.selectedActorName.splice(index, 1);
            }
        },

        //模糊查询电影名
        transshipmentdepotremoteMethod(query) {
            if (query) {
                this.loading = true
                this.movieOptions = this.movieAll
                getmovie(query, 10).then(res => {
                    this.loading = false
                    if (res.code == 1) {
                        console.log(res);
                        this.movieOptions = res.data;
                        return (this.movieOptions)
                    } else if (res.code == 0) {
                        this.movieOptions = [];
                    }
                }).catch(err => {
                    console.log(err.response)
                })
            } else {
                this.movieOptions = []

            }
            // if (query !== '') {
            //     this.loading = true;
            //     setTimeout(() => {
            //         this.loading = false;
            //         this.countryOptions = this.countryAll.filter(item => {
            //             return item.countryName.indexOf(query) > -1;
            //         });
            //     }, 200);
            // } else {
            //     this.countryOptions = this.countryAll;
            // }
        },

        //模糊查询类目名
        genreMethod(query) {
            if (query) {
                this.loadinggenre = true
                this.genreOptions = this.genreAll
                getgenre(query, 10).then(res => {
                    this.loadinggenre = false
                    if (res.code == 1) {
                        console.log(res);
                        this.genreOptions = res.data;
                        return (this.genreOptions)
                    } else if (res.code == 0) {
                        this.genreOptions = [];
                    }
                }).catch(err => {
                    console.log(err.response)
                })
            } else {
                this.genreOptions = []
            }
        },

        //添加电影按钮
        addMovie() {
            console.log(this.movieData);
            if (this.movieData.movie.budget == "" || this.movieData.movie.homepage == "" || this.movieData.movie.originalTitle == ""
                || this.movieData.movie.overview == "" || this.movieData.movie.popularity == "" || this.movieData.movie.releaseDate == "" || this.movieData.movie.revenue == "" || this.movieData.movie.runtime == ""
                || this.movieData.movie.tagline == "" || this.movieData.movie.title == "" || this.movieData.movie.voteAverage == "" || this.movieData.movie.voteCount == "") {
                this.$message({
                    showClose: true,
                    message: '添加的电影有未填写或选择的信息',
                    type: 'error'
                })

            } else {
                movieadd(this.movieData).then(res => {
                    console.log(res)
                    if (res.code == 1) {
                        this.$message({
                            showClose: true,
                            message: '添加电影成功',
                            type: 'success'
                        })
                    } else {
                        this.$message({
                            showClose: true,
                            message: '添加电影失败',
                            type: 'error'
                        })
                    }
                }).catch(err => {
                    console.log(err.response)
                })
            }
        },

        //添加类目按钮
        addGenres() {
            if (this.genre.genreName == "") {
                this.$message({
                    showClose: true,
                    message: '请输入要添加类目名',
                    type: 'error'
                })
            } else {
                genreadd(this.genre).then(res => {
                    console.log(res)
                    if (res.code == 1) {
                        this.$message({
                            showClose: true,
                            message: '添加类目成功',
                            type: 'success'
                        })
                    } else if (res.code == 0) {
                        this.$message({
                            showClose: true,
                            message: '类目已存在，添加失败',
                            type: 'error'
                        })
                    } else {
                        this.$message({
                            showClose: true,
                            message: '添加类目失败',
                            type: 'error'
                        })
                    }
                }).catch(err => {
                    console.log(err.response)
                })
            }
        },

        //添加电影到类目中按钮
        addMovieGenres() {
            if (this.movieaddgenreData.movieId == null) {
                this.$message({
                    showClose: true,
                    message: '请输入要添加的电影名',
                    type: 'error'
                })
            } else if (this.movieaddgenreData.genreId == null) {
                this.$message({
                    showClose: true,
                    message: '请输入要添加的类目名',
                    type: 'error'
                })
            } else {
                movieaddgenre(this.movieaddgenreData).then(res => {
                    console.log(res)
                    if (res.code == 1) {
                        this.$message({
                            showClose: true,
                            message: '添加电影到类目中成功',
                            type: 'success'
                        })
                        this.movieaddgenreData.genreId = null;
                        this.movieaddgenreData.movieId = null;
                        this.movieOptions = this.movieAll;
                        this.genreOptions = this.genreAll;
                    } else if (res.code == 0) {
                        this.$message({
                            showClose: true,
                            message: res.msg,
                            type: 'error'
                        })
                    }
                    else {
                        this.$message({
                            showClose: true,
                            message: '添加电影到类目中失败',
                            type: 'error'
                        })
                    }
                }).catch(err => {
                    console.log(err.response)
                })
            }
        },
    },
    // watch: {
    //     SelectData: function (newVal) {
    //         this.countryOptions = newVal

    //     }
    // },
}
</script>

<style>
/* .add{
    width: 100%;
    height:720px;
    background-image: url('../img/addbackground6.jpg');
    background-size: cover;
} */

.admintitle {
    font-size: 35px;
    height: 50px;
    width: 100%;
    color: rgb(12, 81, 58);
    display: block;
    text-align: center;
}

.mytab .el-tabs__item.is-active {
    color: #177444;
    font-size: 25px;
}

.mytab .el-tabs__item.focus {
    color: #177444;
}

.mytab .el-tabs__active-bar {
    background-color: #177444;
}

.el-tabs--left .el-tabs__content {
    height: 100%;
}

.movie_btn {
    padding: 1.3em 3em;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    -webkit-box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    display: block;
    margin: 0 auto;
}

.movie_btn:hover {
    background-color: #134c35;
    -webkit-box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    -webkit-transform: translateY(-7px);
    -ms-transform: translateY(-7px);
    transform: translateY(-7px);
}

.movie_btn:active {
    -webkit-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
}

.genres_btn {
    background-color: #00BFA6;
    padding: 14px 40px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px dashed #00BFA6;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .4s;
    display: block;
    margin: 0 auto;
    font-size: 15px;
}

.genres_btn span:last-child {
    display: none;
}

.genres_btn:hover {
    transition: .4s;
    border: 2px dashed #00BFA6;
    background-color: #fff;
    color: #00BFA6;
}

.genres_btn:active {
    background-color: #87dbd0;
}

.movie_div {
    margin-left: 150px;
    width: 1100px;
    height: 760px;
    margin-top: 10px;
    border-radius: 24px;
    background: #8ac7a4;
    box-shadow: -11px -11px 9px #628d74,
        11px 11px 9px #b2ffd4;
}

.mycard {
    width: 500px;
    height: 200px;
    margin-top: 10px;
    border-radius: 24px;
    background: #8ac7a4;
    box-shadow: -11px -11px 9px #628d74,
        11px 11px 9px #b2ffd4;
}

.path-0 {
    animation: pathAnim-0 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes pathAnim-0 {
    0% {
        d: path("M 0,600 C 0,600 0,200 0,200 C 78.5263157894737,216.82296650717706 157.0526315789474,233.64593301435409 240,218 C 322.9473684210526,202.35406698564591 410.3157894736843,154.23923444976074 525,165 C 639.6842105263157,175.76076555023926 781.684210526316,245.3971291866029 876,254 C 970.315789473684,262.6028708133971 1016.9473684210527,210.17224880382776 1103,191 C 1189.0526315789473,171.82775119617224 1314.5263157894738,185.91387559808612 1440,200 C 1440,200 1440,600 1440,600 Z");
    }

    25% {
        d: path("M 0,600 C 0,600 0,200 0,200 C 74.76555023923447,203.55980861244018 149.53110047846894,207.1196172248804 267,221 C 384.46889952153106,234.8803827751196 544.6411483253588,259.08133971291863 629,235 C 713.3588516746412,210.91866028708134 721.9043062200956,138.55502392344496 810,135 C 898.0956937799044,131.44497607655504 1065.7416267942585,196.69856459330146 1184,219 C 1302.2583732057415,241.30143540669854 1371.1291866028707,220.65071770334927 1440,200 C 1440,200 1440,600 1440,600 Z");
    }

    50% {
        d: path("M 0,600 C 0,600 0,200 0,200 C 111.0622009569378,192.4019138755981 222.1244019138756,184.80382775119617 307,194 C 391.8755980861244,203.19617224880383 450.5645933014355,229.1866028708134 558,213 C 665.4354066985645,196.8133971291866 821.6172248803829,138.44976076555025 914,131 C 1006.3827751196171,123.55023923444976 1034.9665071770335,167.01435406698565 1112,187 C 1189.0334928229665,206.98564593301435 1314.5167464114834,203.49282296650716 1440,200 C 1440,200 1440,600 1440,600 Z");
    }

    75% {
        d: path("M 0,600 C 0,600 0,200 0,200 C 93.83732057416267,178.85167464114832 187.67464114832535,157.70334928229664 286,149 C 384.32535885167465,140.29665071770336 487.1387559808612,144.03827751196175 581,158 C 674.8612440191388,171.96172248803825 759.7703349282298,196.14354066985646 843,208 C 926.2296650717702,219.85645933014354 1007.77990430622,219.38755980861245 1107,216 C 1206.22009569378,212.61244019138755 1323.11004784689,206.3062200956938 1440,200 C 1440,200 1440,600 1440,600 Z");
    }

    100% {
        d: path("M 0,600 C 0,600 0,200 0,200 C 78.5263157894737,216.82296650717706 157.0526315789474,233.64593301435409 240,218 C 322.9473684210526,202.35406698564591 410.3157894736843,154.23923444976074 525,165 C 639.6842105263157,175.76076555023926 781.684210526316,245.3971291866029 876,254 C 970.315789473684,262.6028708133971 1016.9473684210527,210.17224880382776 1103,191 C 1189.0526315789473,171.82775119617224 1314.5263157894738,185.91387559808612 1440,200 C 1440,200 1440,600 1440,600 Z");
    }
}

.path-1 {
    animation: pathAnim-1 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes pathAnim-1 {
    0% {
        d: path("M 0,600 C 0,600 0,400 0,400 C 111.76076555023923,433.1004784688995 223.52153110047846,466.20095693779905 310,473 C 396.47846889952154,479.79904306220095 457.67464114832535,460.2966507177033 562,438 C 666.3253588516747,415.7033492822967 813.7799043062201,390.6124401913876 912,395 C 1010.2200956937799,399.3875598086124 1059.2057416267942,433.2535885167464 1139,439 C 1218.7942583732058,444.7464114832536 1329.3971291866028,422.3732057416268 1440,400 C 1440,400 1440,600 1440,600 Z");
    }

    25% {
        d: path("M 0,600 C 0,600 0,400 0,400 C 115.96172248803825,374.3444976076555 231.9234449760765,348.68899521531097 333,348 C 434.0765550239235,347.31100478468903 520.2679425837322,371.5885167464115 588,393 C 655.7320574162678,414.4114832535885 705.0047846889953,432.9569377990431 811,416 C 916.9952153110047,399.0430622009569 1079.712918660287,346.5837320574163 1194,338 C 1308.287081339713,329.4162679425837 1374.1435406698565,364.7081339712919 1440,400 C 1440,400 1440,600 1440,600 Z");
    }

    50% {
        d: path("M 0,600 C 0,600 0,400 0,400 C 90.55502392344496,399.3875598086124 181.11004784688993,398.77511961722485 288,422 C 394.8899521531101,445.22488038277515 518.1148325358852,492.2870813397129 604,468 C 689.8851674641148,443.7129186602871 738.4306220095696,348.0765550239235 839,333 C 939.5693779904304,317.9234449760765 1092.1626794258375,383.4066985645933 1201,408 C 1309.8373205741625,432.5933014354067 1374.9186602870814,416.29665071770336 1440,400 C 1440,400 1440,600 1440,600 Z");
    }

    75% {
        d: path("M 0,600 C 0,600 0,400 0,400 C 96.05741626794261,385.8468899521531 192.11483253588523,371.6937799043062 276,384 C 359.8851674641148,396.3062200956938 431.5980861244018,435.07177033492826 540,458 C 648.4019138755982,480.92822966507174 793.4928229665072,488.0191387559809 896,462 C 998.5071770334928,435.9808612440191 1058.4306220095693,376.8516746411483 1142,361 C 1225.5693779904307,345.1483253588517 1332.7846889952152,372.57416267942585 1440,400 C 1440,400 1440,600 1440,600 Z");
    }

    100% {
        d: path("M 0,600 C 0,600 0,400 0,400 C 111.76076555023923,433.1004784688995 223.52153110047846,466.20095693779905 310,473 C 396.47846889952154,479.79904306220095 457.67464114832535,460.2966507177033 562,438 C 666.3253588516747,415.7033492822967 813.7799043062201,390.6124401913876 912,395 C 1010.2200956937799,399.3875598086124 1059.2057416267942,433.2535885167464 1139,439 C 1218.7942583732058,444.7464114832536 1329.3971291866028,422.3732057416268 1440,400 C 1440,400 1440,600 1440,600 Z");
    }
}
</style>