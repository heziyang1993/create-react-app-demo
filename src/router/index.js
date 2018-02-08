import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Home from '../components/page/home.jsx'
import Second from '../components/page/second.jsx'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps
class RouterMap extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={Home}></Route>
                <Route path='/second' component={Second}></Route>
            </Router>
        )
    }
}

export default RouterMap