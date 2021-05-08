import React from 'react'
import { Route } from 'react-router-dom'
import News from '../News'
import Index from '../Index'
import HouseList from '../HouseList'
import Profile from '../Profile'
import { TabBar } from 'antd-mobile'
import './index.css'

const tabItems = [
  {
    title:'首页',
    icon:'icon-ind',
    path:'/home'
  },
  {
    title:'找房',
    icon:'icon-findHouse',
    path:'/home/list'
  },
  {
    title:'资讯',
    icon:'icon-infom',
    path:'/home/news'
  },
  {
    title:'我的',
    icon:'icon-my',
    path:'/home/profile'
  }
]

export default class Home extends React.Component{

  state = {
    selectedTab: this.props.location.pathname
  }

  componentDidUpdate(prevProps) {
   if(prevProps.location.pathname !== this.props.location.pathname){
    this.setState({
      selectedTab: this.props.location.pathname
    })
   }
  }

  // 渲染item
  renderTabBarItem() {
   return tabItems.map(item => 
    <TabBar.Item
            title={item.title}
            key={item.title}
            icon={
              <i className={`iconfont ${item.icon}`}></i>
            }
            selectedIcon={
              <i className={`iconfont ${item.icon}`}></i>
            }
            selected={this.state.selectedTab === item.path}
            onPress={() => {
              this.setState({
                selectedTab: item.path,
              })
              this.props.history.push(item.path)
            }}
    ></TabBar.Item>
    )}

  render() {
      return (
          <div className="home">
          <Route path="/home/news" component={News}></Route>
          <Route exact path="/home" component={Index}></Route>
          <Route path="/home/list" component={HouseList}></Route>
          <Route path="/home/profile" component={Profile}></Route>

          {/* tabbar */}
        <TabBar
          noRenderContent
          unselectedTintColor="#888"
          tintColor="#21b97a"
          barTintColor="white"
        >
          {this.renderTabBarItem()}
        </TabBar>
      </div>
      )
  }
}