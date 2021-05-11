import React from 'react'
import { Carousel, Flex , Grid, WingBlank} from 'antd-mobile'
import axios from 'axios'
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'

import './index.css'

const navs = [
    {
        id:1,
        img:Nav1,
        title:'整租',
        path:'/home/list'
    },
    {
        id:2,
        img:Nav2,
        title:'合租',
        path:'/home/list'
    },
    {
        id:3,
        img:Nav3,
        title:'地图找房',
        path:'/home/map'
    },
    {
        id:4,
        img:Nav4,
        title:'去出租',
        path:'/home/rent'
    }
]

// 获取地理位置
navigator.geolocation.getCurrentPosition(position =>{
   console.log(position);
})

export default class Index extends React.Component{
    state = {
        swipers:[],
        isSwiperLoaded:false,
        groups:[],
        news:[],
        curCityName:'北京' 
      }

   async getSwipers() {
      const res = await axios.get('http://localhost:8080/home/swiper')
      this.setState(()=>{
          return {
              swipers:res.data.body,
              isSwiperLoaded:true
          }
      })
    }

   async getGroups() {
    const res = await axios.get('http://localhost:8080/home/groups',{
        params:{
            area:'AREA%7C88cff55c-aaa4-e2e0'
        }
    })
    this.setState(()=>{
        return {
            groups:res.data.body
        }
    })
    }

   async getNews() {
    const res = await axios.get('http://localhost:8080/home/news',{
        params:{
            area:'AREA%7C88cff55c-aaa4-e2e0'
        }
    })
    this.setState(()=>{
        return {
            news:res.data.body
        }
    })
    }

    componentDidMount() {
       this.getSwipers()
       this.getGroups()
       this.getNews()
       const curCity =  new window.BMap.LocalCity()
       curCity.get(async res=>{
         const result = await axios.get(`http://localhost:8080/area/info?name=${res.name}`)
         this.setState({
            curCityName:result.data.body.label
         })
       })
      }
    
    renderSwipers(){
        return this.state.swipers.map(item => (
            <a
              key={item.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: 212
            }}
            >
              <img
                src={`http://localhost:8080${item.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
            </a>
          ))
    }

    renderNavs(){
        return navs.map(item => <Flex.Item key={item.id} onClick={()=>this.props.history.push(item.path)}>
            <img src={item.img} alt=""></img>
            <h2>{item.title}</h2>
        </Flex.Item>)
    }

    renderNews(){
      return this.state.news.map(item => (
          <div className="news-item" key={item.id}>
              <div className="imgwrap">
                  <img className="img" src={`http://localhost:8080${item.imgSrc}`} alt=""></img>
              </div>
            <Flex className="content" direction="column" justify="between">
                <h3 className="title">{item.title}</h3>
                <Flex className="info" justify="between">
                    <span className="left">{item.from}</span>
                    <span className="right">{item.date}</span>
                </Flex>
            </Flex>
          </div>
      ))
    }

    render(){
        return (
        <div className="index">
            {/* 轮播图 */}
        <div className="swiper">
        {this.state.isSwiperLoaded ?
            <Carousel autoplay infinite autoplayInterval={2500}>
          {this.renderSwipers()}
        </Carousel> : ''}
        </div>

        {/* 搜索框 */}
        <Flex className="search-box">
            <Flex className="search">
                <div className="location" onClick={()=>this.props.history.push('/citylist')}>
                    <span className="name">{this.state.curCityName}</span>
                    <i className="iconfont icon-arrow"></i>
                </div>
                <div className="form" onClick={()=>this.props.history.push('/search')}>
                    <i className="iconfont icon-seach"></i>
                    <span className="text">请输入小区或地址</span>
                </div>
            </Flex>
            <i className="iconfont icon-map" onClick={()=>this.props.history.push('/map')}></i>
        </Flex>

        {/* 导航菜单 */}
        <Flex className="nav">
       {this.renderNavs()}
        </Flex>

        {/* 租房小组 */}
        <div className="group">
      <h3 className="group-title">
          租房小组<span className="more">更多</span>
      </h3>
      <Grid data={this.state.groups} hasLine={false} square={false} columnNum={2} renderItem={(item)=>(
          <Flex className="group-item" justify="around" key={item.id}>
              <div className="desc">
                  <p className="title">{item.title}</p>
                  <span className="info">{item.desc}</span>
              </div>
            <img 
            src={`http://localhost:8080${item.imgSrc}`} alt=""></img>

          </Flex>
      )} />
        </div>

        {/*最新资讯  */}
        <div className="news">
            <h3 className="group-title">最新资讯</h3>
            <WingBlank size="md">{this.renderNews()}</WingBlank>
        </div>

  </div>
        )
    }
}