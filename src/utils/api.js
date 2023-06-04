import request from "./request";

//用户登录请求
export function login_user(user) {
    console.log('login_user')
    console.log(user)
    console.log(JSON.stringify(user))
    return request({
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
    return request({
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
    return request({
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
    return request({
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
    return request({
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
    return request({
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
    return request({
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
    return request({
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
    return request({
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
    return request({
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
    return request({
        url: '/genre/',
        method: 'get',
    })
}

//得到常见语言
export function getMostLanguage(limit) {
    console.log('getMostLanguage')
    return request({
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
    return request({
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
    return request({
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
    return request({
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
    return request({
        url: '/movie/'+movieId,
        method: 'get',
    })
}