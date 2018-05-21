import React from 'react';
import { Nav, Footter, Item, Map } from './presentation';
import { Search, Results } from './containers';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="wrapper">
        			<div className="sidebar" data-background-color="white" data-active-color="danger">
                        <Search />
        			</div>
        			<div className="main-panel">
        					<Nav />
        					<div className="content">
        							<Results />
        					</div>
                            <Footter />
        			</div>
        	</div>
        );
    }
}

export default Home;
