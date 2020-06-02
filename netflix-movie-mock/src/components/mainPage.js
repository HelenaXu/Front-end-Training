import React from 'react';

import { getFirstRender} from '../actions';
import store from '../index'
import { connect } from 'react-redux'
import ListLayout from './ListLayout'
import {Fragment} from 'react';

/* this is the main content we design using data. the two lists (recommendation and mylist)
    use same layout template.
 */
class MainPage extends React.Component {

  componentDidMount() {
    store.dispatch(getFirstRender());
   }

  render(){
    const {myLists, removeItem, recommendation, addItem} = this.props
    return(
      <Fragment>
        <ListLayout
        listTitle="My List"
        renderList={myLists}
        handleFunction={removeItem}/>
        <ListLayout
        listTitle="Recommendations"
        renderList={recommendation}
        handleFunction={addItem}/>
        <h2>My list's title</h2>
        <ul style={{color:'white'}}>
        {myLists.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
        </ul>
      </Fragment>
    );
  }
}

// mapping the redux state and dispatch

const mapStateToProps = state => {
  return {
    myLists: state.myLists,
    recommendation: state.recommendation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: item => dispatch({ type: 'REMOVE_ITEM', item }),
    addItem: item => dispatch ({type:'ADD_ITEM', item })
  }
}


// connect function here is a HOC.
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
