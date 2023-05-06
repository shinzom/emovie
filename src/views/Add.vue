<template>
    <el-container style="width:100%;height: 720px;" class="add">
        <el-header>
            <div class="admintitle">
                <span>管理员▶添加电影和类目</span>
            </div>
        </el-header>
        <el-container style="height: 100%;width: 100%;" class="mytab">
            <el-tabs tab-position="left" style="height: 650px;width: 100%;" class="demo-tabs">
                <el-tab-pane label="添加电影">
                    <div class="movie_div">
                        <div style="margin-top: 10px;margin-left:100px;width:500px;height:500px;float: left;">
                            <el-form-item label="电影名称：" class="label">
                                <el-input v-model="movieData.name" style="width:300px" placeholder="请输入电影名称" />
                            </el-form-item>
                            <el-form-item label="原名：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.original_title" style="width:300px" placeholder="请输入电影原名" />
                            </el-form-item>
                            <el-form-item label="国家：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.country" style="width:300px" placeholder="请输入电影国家" />
                            </el-form-item>
                            <el-form-item label="语言：" class="label" style="margin-left: 32px;">
                                <el-radio-group v-model="movieData.language">
                                    <el-radio :label="1">中文</el-radio>
                                    <el-radio :label="2">英文</el-radio>
                                    <el-radio :label="3">韩文</el-radio>
                                    <el-radio :label="4">日文</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="导语：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.tagline" style="width:300px" placeholder="请输入电影导语" />
                            </el-form-item>
                            <el-form-item label="电影概述：" class="label">
                                <el-input v-model="movieData.overview" style="width:300px;" type="textarea" clearable
                                    :autosize="{ minRows: 10, maxRows: 20 }" maxlength="1000" placeholder="请输入电影概述" />
                            </el-form-item>
                        </div>
                        <div style="margin-top: 10px;width:500px;height:500px;float: left;">
                            <el-form-item label="时长：" class="label" style="margin-left: 32px;">
                                <el-time-picker v-model="movieData.runtime" :picker-options="{
                                    selectableRange: '00:00:00 - 6:30:00'
                                }" placeholder="请选择电影时长" />
                            </el-form-item>
                            <el-form-item label="状态：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.budget" style="width:300px" placeholder="请输入电影预算" />
                            </el-form-item>
                            <el-form-item label="发行时间：" class="label">
                                <el-date-picker v-model="movieData.releaseDate" type="date" placeholder="请选择电影发行时间"
                                    style="width:300px" />
                            </el-form-item>
                            <el-form-item label="官网主页：" class="label">
                                <el-input v-model="movieData.homepage" style="width:300px" placeholder="请输入电影官网主页" />
                            </el-form-item>
                            <el-form-item label="热度：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.popularity" style="width:300px" placeholder="请输入电影热度" />
                            </el-form-item>
                            <el-form-item label="收入：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.revenue" style="width:300px" placeholder="请输入电影收入" />
                            </el-form-item>
                            <el-form-item label="仅限成人：" class="label">
                                <el-radio-group v-model="movieData.adult">
                                    <el-radio :label="1">是</el-radio>
                                    <el-radio :label="2">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="预算：" class="label" style="margin-left: 32px;">
                                <el-input v-model="movieData.budget" style="width:300px" placeholder="请输入电影预算" />
                            </el-form-item>
                            <el-form-item label="平均评分：" class="label">
                                <el-input v-model="movieData.voteAverage" style="width:300px" placeholder="请输入电影平均评分" />
                            </el-form-item>
                            <el-form-item label="评分人数：" class="label">
                                <el-input v-model="movieData.voteCount" style="width:300px" placeholder="请输入电影评分人数" />
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
                                <el-input v-model="genres" style="width:300px" placeholder="请输入电影类目" />
                            </el-form-item>
                            <button class="genres_btn" @click="addGenres">添加类目</button>
                        </div>
                    </div>

                    <div style="margin-left: 20px;margin-top: 10px;width:600px;height:200px;float: left;">
                        <span style="font-size: 25px;">★添加电影到类目中</span>
                        <div class="mycard">
                            <div style="height:10px;"></div>
                            <el-form-item label="输入电影名：" class="label" style="margin-left: 40px;">
                                <el-input v-model="findMovie" style="width:300px" />
                            </el-form-item>
                            <el-form-item label="输入类目名：" class="label" style="margin-left: 40px;">
                                <el-input v-model="findGenres" style="width:300px" />
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
export default {
    data() {
        return {
            languageOptions: [
                { label: "中文", key: 1 },
                { label: "英文", key: 2 },
                { label: "韩文", key: 3 },
                { label: "日文", key: 4 },
            ],
            movieData: {
                name: "",
                original_title: "",
                language: 1,
                overview: "",
                popularity: 0,
                releaseDate: "",
                revenue: 0,
                runtime: 0,
                adult: 0,
                budget: 0,
                homepage: "",
                tagline: "",
                voteAverage: 0,
                voteCount: 0,
                country: "",
            },
            genres: "",//类目
            findMovie: "",
            findGenres: "",
        }
    },
    methods: {
        addMovie() { },
        addGenres() { },
        addMovieGenres() { },
    }
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
    height: 600px;
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