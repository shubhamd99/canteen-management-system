import React, { Component } from "react";
import { connect } from 'react-redux';

import Aux from '../Auxx/Auxx';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false

    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => { 
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        
        return(
            <Aux> {/* Wrapping root elements */}
        <Toolbar isAuth={this.props.isAuthenticated} drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer isAuth={this.props.isAuthenticated} open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className='Content'>
            {this.props.children}
        </main>
    </Aux>
        )
    }

} 

const mapToStateProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

export default connect(mapToStateProps)(Layout);