import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer};
        });
    }


    render() {
        return (
            <Auxiliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}  />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    };
}

export default Layout;