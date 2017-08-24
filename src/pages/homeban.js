import React, {Component} from 'react'





var mySwiper=null;
export default class Home extends Component{
	constructor(){
		super();
		this.state={
			
		}
	}
	
	render(){
		return (
			
				<div ref='banner' class='homebanner swiper-container'>
					<div class="swiper-wrapper">
					
						{this.props.bannerData.map((item,index)=>{
							return(
							
								<div class="swiper-slide" key={index}>
									<img src={item.imageUrl}/>
								</div>
							) 

						})}	
					</div>
				</div>
				
		)
	}
	componentWillMount(){
			
			// mySwiper.slideTo(1, 0);	
	}
	componentDidMount(){
		 mySwiper = new Swiper (this.refs.banner, {
			direction: 'horizontal',
			loop: true,
			autoplay : 1000,
			speed:300
        })
         mySwiper.update();
	}
	
}


import React, {Component} from 'react'

import Homeservice from '../services/homeService.js'

import Homeban from './homeban.js'


export default class Home extends Component{
	constructor(){
		super();
		this.state={
			bannerData:[]
		}
	}
	
	render(){
		return (
			<div class="page">
				<Homeban bannerData={this.state.bannerData}/>
				
			</div>
		)
	}
	componentWillMount(){
		Homeservice.getbannerDate()
		.then((res)=>{
			// console.log(res)
			var data=res
			data.push(res.slice(0,1)[0])
			data.unshift(res.slice(-2)[0])
			this.setState({bannerData:data})

			
		})

	
	}
	componentDidMount(){
	
	}
	
}