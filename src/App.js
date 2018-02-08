import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import configureStore from './store/configureStore'
import RouteMap from './router/index.js'
import Home from './components/page/home.jsx'
import rootReducers from './store/reducer/index.js'

// 创建 Redux 的 store 对象
const store = configureStore()
store.subscribe(() => {
    let state = store.getState() //这就是你获取到的数据state tree，由于使用了subscribe，当数据更改时会重新获取
})
class App extends Component {
render() {
    return ( 
      <Provider store={store}>
        <RouteMap history={browserHistory}/>
      </Provider>
    )
  }
}
export default App
