import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../header/components/header'
import Results from '../../results/containers/results'
import Menu from '../../menu/components/menu'
import Content from '../../content/components/content'

class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          <Menu></Menu>
        </Header>
        <Content>
          <Results></Results>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    menu: state.get('menu')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
