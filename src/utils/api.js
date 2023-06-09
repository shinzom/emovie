import {request1} from "./request";
import {request2} from "./request";

//用户登录请求
export function login_user(user) {
    console.log('login_user')
    console.log(user)
    console.log(JSON.stringify(user))
    return request1({
        url: '/user/login/',
        method: 'post',
        data: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
          },
    })
}

//管理员登录请求
export function login_admin(user_admin) {
    console.log('login_admin')
    return request1({
        url: '/admin/login/',
        method: 'post',
        data: JSON.stringify(user_admin),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

//用户注册请求
export function register_user(registerData) {
    console.log('register')
    return request1({
        url: '/user/register/',
        method: 'post',
        data: JSON.stringify(registerData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

//模糊查找电影国家
export function getcountry(countryKey,limit) {
    console.log('getcountry')
    return request1({
        url: '/country/',
        method: 'get',
        params:{
            countryKey: countryKey,
            limit:limit,
        }
    })
}

//模糊查找电影语言
export function getlanguage(languageKey,limit) {
    console.log('getlanguage')
    return request1({
        url: '/language/',
        method: 'get',
        params:{
            languageKey: languageKey,
            limit:limit,
        }
    })
}

//添加电影
export function movieadd(movieData) {
    console.log('movieadd')
    return request1({
        url: '/movie/',
        method: 'post',
        data: JSON.stringify(movieData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

//添加类目
export function genreadd(genre) {
    console.log('genreadd')
    return request1({
        url: '/genre/',
        method: 'post',
        data: JSON.stringify(genre),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

//模糊搜索电影名
export function getmovie(movieNameKey,limit) {
    console.log('getmovie')
    return request1({
        url: '/movie/',
        method: 'get',
        params:{
            movieNameKey: movieNameKey,
            limit:limit,
        }
    })
}

//模糊搜索类目
export function getgenre(genreKey,limit) {
    console.log('getgenre')
    return request1({
        url: '/genre/',
        method: 'get',
        params:{
            genreKey: genreKey,
            limit:limit,
        }
    })
}


//添加电影到类目
export function movieaddgenre(movieaddgenreData) {
    console.log('movieaddgenre')
    return request1({
        url: '/movieGenre/',
        method: 'post',
        data: JSON.stringify(movieaddgenreData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

//返回所有类目
export function getAllGenre() {
    console.log('getAllGenre')
    return request1({
        url: '/genre/',
        method: 'get',
    })
}

//得到常见语言
export function getMostLanguage(limit) {
    console.log('getMostLanguage')
    return request1({
        url: '/language/most/',
        method: 'get',
        params:{
            limit:limit,
        }
    })
}

//得到常见国家
export function getMostCountry(limit) {
    console.log('getMostCountry')
    return request1({
        url: '/country/most/',
        method: 'get',
        params:{
            limit:limit,
        }
    })
}

//搜索电影
export function searchMovie(searchData) {
    console.log('searchMovie')
    return request1({
        url: '/movie/page/',
        method: 'get',
        params:{
            current:searchData.current,
            size:searchData.size,
            movieNameKey:searchData.movieNameKey,
            countryName:searchData.countryName,
            genreName:searchData.genreName,
            languageIso:searchData.languageIso,
            year:searchData.year,
            rating:searchData.rating,
        }
    })
}

//高分热门电影
export function hotOrRatingMovie(current,size,status) {
    console.log('hotOrRatingMovie')
    return request1({
        url: '/movie/page/',
        method: 'get',
        params:{
            current:current,
            size:size,
            status:status,
        }
    })
}

//电影详情页，获取电影数据
export function getMovieData(movieId) {
    console.log('getMovieData')
    return request1({
        url: '/movie/'+movieId,
        method: 'get',
    })
}

//根据id查询用户
export function getUserData(userId) {
    console.log('getUserData')
    return request1({
        url: '/user/'+userId,
        method: 'get',
    })
}

//根据用户id查询评分信息
export function getUserRatingData(userId) {
    console.log('getUserRatingData')
    return request1({
        url: '/ratings/'+userId,
        method: 'get',
    })
}

//修改密码
export function modifyPwd(pwdData) {
    console.log('modifyPwd')
    return request1({
        url: '/user/modifyPwd',
        method: 'put',
        data: JSON.stringify(pwdData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

//查询用户对某个电影评分
export function searchUserMovieRating(userId,movieId) {
    console.log('searchUserMovieRating')
    return request1({
        url: '/ratings/',
        method: 'get',
        params:{
            userId:userId,
            movieId:movieId,
        }
    })
}

//新增评分或修改评分
export function addOrModifyRating(ratingData) {
    console.log('addOrModifyRating')
    return request1({
        url: '/ratings/',
        method: 'post',
        data: JSON.stringify(ratingData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

//调用推荐算法
export function callRecommendAlg(recommendData) {
    console.log('callRecommendAlg')
    return request2({
        url: '/recommend/',
        method: 'post',
        data: JSON.stringify(recommendData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
}