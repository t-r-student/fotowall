
import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions'; 
import { withRouter } from 'react-router';

//      Hi! I have an access to the STATE because of <Provider store={store}> 
//          store = createStore(reducer)
//                          reducer(state,action){
//      by default reducer  return state
//      }

function mapStateToProps(state){
    return {
        posts : state.posts, // what gets return is turns into an prop called posts
        comments: state.comments,

    }
}

function mapDispatchToProps(dispatch){
    debugger;
    return bindActionCreators(actions, dispatch)
    
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;