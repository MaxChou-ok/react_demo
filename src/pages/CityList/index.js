import React from 'react'
import { NavBar,Icon } from 'antd-mobile'
import './index.css'
import axios from 'axios'
import { getCurrentCity } from '../../utils/index'
import { List, AutoSizer } from 'react-virtualized'

 // 格式化数据的方法
  const formatCityDate = (list)=> {
    const cityList = {}

    list.forEach(item => {
      const first = item.short.substr(0,1)
      if(cityList[first]){
        cityList[first].push(item)
      } else{
        cityList[first] = [item]
      }
    });

  const  cityIndex = Object.keys(cityList).sort()

      return {
        cityList,
        cityIndex
      }
  }
 const title_height = 36
 const name_height = 50
 const formatCityIndex =(letter)=>{
   switch (letter) {
     case '#':
       return '当前定位'
     case 'hot':
       return '热门城市'
     default:
       return letter.toUpperCase()
   }
 }
  
export default class CityList extends React.Component{
  constructor(props) {
 super(props)
 this.cityListComponent = React.createRef()
}
  state = {
    cityList:{},
    cityIndex:[],
    activeIndex:0
  }
 
 async componentDidMount(){
  await this.getCityList()
   this.cityListComponent.current.measureAllRows()
  }
 
  // 获取城市列表的方法
  async getCityList() {
    const res = await axios.get('http://localhost:8080/area/city?level=1')
    const { cityList , cityIndex } = formatCityDate(res.data.body)

    const hotRes = await axios.get('http://localhost:8080/area/hot')
    console.log(hotRes);
    cityList['hot'] = hotRes.data.body
    cityIndex.unshift('hot')

   const curCity = await getCurrentCity()

   cityList['#'] = [curCity]
   cityIndex.unshift('#')
   
   this.setState({
     cityList,
     cityIndex
   })

  }

  rowRenderer =({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  })=>{

    const { cityIndex,cityList } = this.state
    const letter = cityIndex[index]

    return (
      <div key={key} style={style} className="city">
      <div className="title">{formatCityIndex(letter)}</div>
      {
        cityList[letter].map(item => <div className="name" key={item.value}>{item.label}</div>)
      }
      </div>
    );
  }

  getRowHeight=({ index })=>{
    const {cityIndex,cityList} = this.state
    
    return title_height+cityList[cityIndex[index]].length*name_height
  }

  renderCityIndex() {
   return this.state.cityIndex.map((item,index) =>  <li className="city-index-item" key={item} onClick={()=>{
    this.cityListComponent.current.scrollToRow(index)
   }}>
    <span className={this.state.activeIndex === index?'index-active':''}>{item==='hot'?'热':item.toUpperCase()}</span>
  </li>)
  }

  onRowsRendered=({ startIndex })=>{
      if(this.state.activeIndex !== startIndex) {
        this.setState({
          activeIndex:startIndex
        })
      }
  }

  render() {
      return (
          <div className="cityList">
            <NavBar
            className="navbar"
            mode="light"
            icon={<i className="iconfont icon-back"/>}
            onLeftClick={() => console.log('onLeftClick')}
    >城市选择</NavBar>
    <AutoSizer>
      {
        ({width,height})=>
          (<List
    ref={this.cityListComponent}
    width={width}
    height={height}
    rowCount={this.state.cityIndex.length}
    rowHeight={this.getRowHeight}
    rowRenderer={this.rowRenderer}
    onRowsRendered={this.onRowsRendered}
    scrollToAlignment="start"
  />)
        
      }
    </AutoSizer>
            <ul className="city-index">
              {this.renderCityIndex()}
              </ul>     
          </div>
      )
  }
}