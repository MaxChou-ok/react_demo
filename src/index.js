// // 1 导入react
// import React from 'react'
// import ReactDOM from 'react-dom'
// import './css/index.css'
// // import Hello from './Hello'

// // 2 创建react元素
// // const sayHi = () => 'hi'
// // const dv = <div>divdivdiv</div>

// // const isLoading = true
// // const loadData = () => {
// //     if(isLoading) {
// //         return <div>loading...</div>
// //     }
// //     return <div>数据加载完成</div>
// // }

// // const loadData = () => {
// //    return isLoading?(<div>loading...</div>):(<div>数据加载完成</div>)
// // }

// // const loadData = () => {
// //     return isLoading && (<div>loading...</div>)
// //  }


// // const title = (
// // <h1 className="title" style={{color:'red',backgroundColor:'skyblue'}}>
// //     hello JSX 
// //     <span></span>
// //     <p>{1 + 2}</p>
// //     <p>{'a'}</p>
// //     <p>{3>5? 'dy':'xy'}</p>
// //     <p>{sayHi()}</p>
// //     {dv}
// //     <p>{}</p>
// //     <p>{loadData()}</p>
// // </h1>
// // )

// // function Hello(){
// //     return (
// //         <div>组件</div>
// //     )
// // }

// // const Hello =()=><div>组件</div>

// // class Hello extends React.Component {
// //     render() {
// //         return (
// //             <div>类组件</div>
// //         )
// //     }
// // }

// // class App extends React.Component {
// //     handleClick(){
// //         console.log('click');
// //     }
// //     render(){
// //         return(
// //             <button onClick={this.handleClick}>click</button>
// //         )
// //     }
// // }

// // function App(){
// //     function handleClick(){
// //         console.log('click');
// //     }
// //     return (
// //         <button onClick={handleClick}>click</button>
// //     )
// // }

// // class App extends React.Component {
// //     handleClick(e){
// //      e.preventDefault()
// //         console.log('click');
// //     }
// //     render () {
// //         return (
// //             <a href="http://itcast.cn/" onClick={this.handleClick}>baidu</a>
// //         )
// //     }
// // }

// // class Hello extends React.Component {
  
// //     state = {
// //         count : 0,
// //     }

// //     // constructor () {
// //     //     super()
// //     //     this.state = {
// //     //         count:0
// //     //     }

// //     //    this.onIncrement = this.onIncrement.bind(this)
// //     // }
   
// //      onIncrement=()=>{
// //         this.setState({
// //             count:this.state.count+1,
// //             })
// //     }
// //     // onIncrement(){
// //     //     this.setState({
// //     //         count:this.state.count+1,
// //     //         })
// //     // } 

// //     render() {
// //         return (
// //             <div>
// //                 <h1>计数器:{this.state.count}</h1>
// //                 <h1>{this.state.test}</h1>
// //                 <button onClick={this.onIncrement}>+1</button>


// //                 {/* <button onClick={() => this.onIncrement()}>+1</button> */}
// //                 {/* <button onClick={()=>{this.setState({
// //                     count:this.state.count+1,
// //                     test:'aa'
// //                     })}}>+1</button> */}
// //             </div>
// //         )
// //     }
// // }


// // class Hello extends React.Component{
    
// //     state = {
// //         txt :'2',
// //         content:'',
// //         city:'bj',
// //         isChecked:false
// //     }
// //      handleForm=(e)=>{
// //          const target = e.target

// //          const value = target.type === 'checkbox' ? target.checked :target.value

// //          const name = target.name
// //         this.setState({
// //            [name]:value
// //         })
// //     }

//     // handleChange=(e)=>{
//     //     this.setState({
//     //         txt:e.target.value
//     //     })
//     // }
//     // handleContent =(e)=>{
//     //     this.setState({
//     //         content:e.target.value
//     //     })
//     // }
//     // handleCity=(e)=>{
//     //     this.setState({
//     //         city:e.target.value
//     //     })
//     // }
//     // handleChecked=(e)=>{
//     //     this.setState({
//     //         isChecked:e.target.checked
//     //     })
//     // }

// //     render () {
// //         return (
// //         <div>
// //             <input type="text" name="txt" value={this.state.txt} onChange={this.handleForm}></input>

// //             <textarea value={this.state.content} name="content" onChange={this.handleForm}></textarea>

// //             <select value={this.state.city} name="city" onChange={this.handleForm}>
// //                 <option value="bj">北京</option>
// //                 <option value="sh">shsh</option>
// //                 <option value="hz">hzhz</option>
// //             </select>

// //             <input type="checkbox" name="isChecked" checked={this.state.handleForm} onChange={this.handleChecked}></input>
// //         </div>
// //         )
// //     }
// // }


// class Hello extends React.Component{
//     constructor(){
//         super()
//         this.txtRef = React.createRef()
//     }

//    getTxt=()=>{
//        console.log('获取',this.txtRef.current.value);
//    }

//     render(){
//         return(
//             <div>
//                 <input type="text" ref={this.txtRef}></input>
//                 <button onClick={this.getTxt}>获取</button>
//             </div>
//         )
//     }
// }



// // 3 渲染react元素
// // ReactDOM.render(title, document.getElementById('root'))
// ReactDOM.render(<Hello/>,document.getElementById('root'))
// // ReactDOM.render(<App/>,document.getElementById('root'))


import React from 'react'
import ReactDOM from 'react-dom'

/* 
  评论列表案例

  comments: [
    { id: 1, name: 'jack', content: '沙发！！！' },
    { id: 2, name: 'rose', content: '板凳~' },
    { id: 3, name: 'tom', content: '楼主好人' }
  ]
*/

import './css/index.css'

class App extends React.Component {

  state = {
    comments: [
        { id: 1, name: 'jack', content: '沙发！！！' },
        { id: 2, name: 'rose', content: '板凳~' },
        { id: 3, name: 'tom', content: '楼主好人' }
    ],
    userName:'',
    userContent:''
  }

  renderList(){
    if(this.state.comments.length === 0){
        return <div className="no-comment">暂无评论，快去评论吧~</div>
    }else{
        return (
            <ul>
            {this.state.comments.map(item=>(
               <li key={item.id}>
               <h3>评论人：{item.name}</h3>
               <p>评论内容：{item.content}</p>
             </li>
            ))
        }
           </ul>  
        )
    }
  }

  handleForm = e =>{
  const {name,value} = e.target

  this.setState({
      [name]:value
  })
  }

  addComments =e =>{
    const {comments,userName,userContent} = this.state
    if(userName.trim() === ''|| userContent.trim() === ''){
        alert('请输入评论人和评论内容')
        return
    }
   const newComments = [{
       id:Math.random(),
       name:userName,
       content:userContent
   },...comments]

   this.setState({
       comments:newComments,
       userName:'',
       userContent:''
   })
  }

  render() {
      const {userName,userContent} =this.state
    return (
      <div className="app">
        <div>
          <input value={userName} name="userName" className="user" type="text" placeholder="请输入评论人" onChange={this.handleForm} />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={userContent}
            name="userContent"
            onChange={this.handleForm}
          />
          <br />
          <button onClick={this.addComments}>发表评论</button>
        </div>

    {this.renderList()}


      {/* {this.state.comments.length === 0
     ? (<div className="no-comment">暂无评论，快去评论吧~</div>)
     : (
    <ul>
        {this.state.comments.map(item=>(
           <li key={item.id}>
           <h3>评论人：{item.name}</h3>
           <p>评论内容：{item.content}</p>
         </li>
        ))
    }
   </ul>
   )} */}

      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
