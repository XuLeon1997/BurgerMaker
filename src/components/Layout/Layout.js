import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import Toolbar from '../Navigation/Toolbar/Toolbar'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    sideDrawOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }


    render() {
        return (
            <Auxiliary>
                <Toolbar openMenu={this.sideDrawOpenHandler} />

                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    };
}

export default Layout;