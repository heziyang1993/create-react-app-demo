import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as calc from '../../store/actions/index.js'
import { bindActionCreators } from 'redux'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'test',
      age: 18
    }
    this.times = this.times.bind(this)
  }
  times () {
    this.setState({
      age: 20
    })
    this.props.calc(this.props.age)
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <p>我是首页</p>
        {this.state.name}
        <p>{this.state.age}</p>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <button onClick={this.times}>点我</button>
      </div>
    )
  }
}

// 添加到state
function mapStateToProps(state) {
    return {
        name: state.userInfo.name,
        age: state.userInfo.age
    }
}

function mapDispatchToProps(dispatch) {
    return {
//      calcAge: () => { dispatch({type: 'CALCAGE'}) }
        ...bindActionCreators(calc, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
