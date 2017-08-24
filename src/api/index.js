//http://m.maizuo.com
//http://m.maizuo.com/v4/api/film/now-playing

// 首页的API
const bannerApi='/v4/api/billboard/home'
const homelistApi='/v4/api/film/now-playing'
const willcomeListApi='/v4/api/film/coming-soon'

const  filmdetailsApi='/v4/api/film/3828'

// 电影页面API
const flimplayListApi='/v4/api/film/now-playing?page=1&count=7'
const flimwillcomeApi='/v4/api/film/coming-soon?page=1&count=7'

// 卖座商
// ico
//http://aura.maizuo.com/
 const shopIconApi='/api/ad/list'

// 精选列表
  const  handpickApi='api/recommend/home?page=1&num=20'

// 影院
//http://m.maizuo.com/v4/api/cinema?__t=1503317067960
const cinemaApi='v4/api/cinema?__t=1503317067960'

//城市页面
const  cityApi='/v4/api/city'
export default{
    bannerApi,
    homelistApi,
    willcomeListApi,
    flimplayListApi,
    flimwillcomeApi,
    shopIconApi,
    handpickApi,
    cinemaApi,
    filmdetailsApi,
    cityApi
}