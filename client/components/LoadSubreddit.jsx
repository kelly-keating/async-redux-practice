import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subreddit: 'newzealand'
    }
    this.dispatch = props.dispatch
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      subreddit: e.target.value
    })
  }

  render(){
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.subreddit}/>
        <button onClick={() => this.dispatch(fetchPosts(this.state.subreddit))}>
          Fetch Posts
        </button>
      </div>
    )
  }
}

export default connect()(LoadSubreddit)
