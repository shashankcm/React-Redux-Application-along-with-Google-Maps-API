import React from 'react';
import { Item } from '../presentation';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        const items = [
            {id: 1, key: '1',  price: 100,  defaultAnimation: 2,  label: 'Shashank Gupta',  position:{lat: 40.7224017, lng: -73.9896719}},
            {id: 2, key: '2',   price: 200,  defaultAnimation: 2,  label: 'John Samonte',  position:{lat: 40.7124017, lng: -73.9896719}},
        ]
        return(
            <div className="container-fluid">
                    <div className="row">
                        {
                            items.map((item, i) =>{
                                return <Item key={item.id} item={item}/>
                            })
                        }

                    </div>
            </div>
        );
    }
}
export default Results;
