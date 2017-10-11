import React from 'react'
import {Route, Redirect} from 'react-router'

class Auth extends React.Component {
    componentDidMount() {
        const { dispatch, currentURL } = this.props

        // if (!isLoggedIn) {

        //     dispatch(setRedirectUrl(currentURL))
        //     browserHistory.replace('/login')
        // }
    }
    render() {
        // if (isLoggedIn) {
        //     return this.props.children
        // } else {
        //     return null
        // }
        if(true){
            return <Redirect to={'/signup'} />
        } else{
            return <Redirect to={'/signup'} />
        }
        return null
    }
}

// mapStateToProps = (state, ownProps) => {
//     return {
//         isLoggedIn: state.isLoggedIn,
//         currentURL: ownProps.location.pathname
//     }
// }
//export default connect(mapStateToProps)(Auth)
export default Auth