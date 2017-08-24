import React, {Component} from 'react'

import Homeservice from '../services/homeService.js'
import ShopicoList from '../../views/common/ShopicoList.js'
import ShopremList from '../../views/common/shopremlist.js'
import ShopHandpick from '../../views/common/shophandpick.js'
import '../css/shop.css'
var mySwiper=null;
export default class Shop extends Component{
	constructor(){
		super();
		this.state={
			bannerdate:[],
			iconlist:[],
			recommend:[],
			rcpiclist:[],
			srcpiclist:[],
			shophandpick:[]
		}
		
	}
	render(){
		return (
				<div class="shoppage">
					
					<div ref='banner' class='shopbanner swiper-container'>
						<div class="swiper-wrapper">
						
							{this.state.bannerdate.map((item,index)=>{
								return(
								
									<div class="swiper-slide" key={index}>
										<img src={item.imageSrc}/>
									</div>
								) 

							})}	
						</div>
						<div class="swiper-pagination"></div>
					</div>
					<ShopicoList iconlist={this.state.iconlist} />
					<div class='recommend'>
						{
							this.state.recommend.map((item,index)=>{
								return(
									<img src={item.imageSrc} key={index}/>
								)
								
							})	
						}
					</div>
					<ShopremList rcpiclist={this.state.rcpiclist} srcpiclist={this.state.srcpiclist}/>
					<ShopHandpick shophandpick={this.state.shophandpick}/>
		</div>
			
		)
	}
	componentWillMount(){
		Homeservice.getshopDate()
		.then((res)=>{
			//console.log(res)
		this.setState({bannerdate:res.banner})
		this.setState({iconlist:res.iconlist})
		this.setState({recommend:res.recommend})
		this.setState({rcpiclist:res.rcpiclist})
		this.setState({srcpiclist:res.srcpiclist})
			mySwiper.update();
		})
	Homeservice.gethandpickDate()
		.then((res)=>{
			console.log(res)
		this.setState({shophandpick:res})	
			
		})
	
	}
	componentDidMount(){
		 mySwiper = new Swiper (this.refs.banner, {
			direction: 'horizontal',
			pagination: '.swiper-pagination',
			autoplay : 1000,
			speed:300
	})
	}
	
}