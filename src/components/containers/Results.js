import React from 'react';
import { Item } from '../presentation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../actions';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                //name: '',
                //price: ''
                position:{lat: 40.7034017, lng: -73.9896719}
            }
        }
        this.updateItem= this.updateItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    updateItem(e){
        e.preventDefault();
        let updated = Object.assign({}, this.state.item)
        updated[e.target.name] = e.target.value
        this.setState({
            item: updated
        })

    }

    addItem(){
        console.log('ADD ITEM', JSON.stringify(this.state.item));
        let newItem = Object.assign({}, this.state.item);
        //{id: 1, key: '1',  price: 100,  defaultAnimation: 2,  label: 'Shashank Gupta',  position:{lat: 40.7224017, lng: -73.9896719}},
        newItem['id'] = this.props.item.all.length;
        newItem['key'] = this.props.item.all.length.toString();
        newItem['defaultAnimation'] = 2

        this.props.addItem(newItem);
    }
    render(){
        const items = this.props.item.all || []
        //console.log(this.state);
        return(
            <div className="container-fluid">
                    <div className="row">
                        {
                            items.map((item, i) =>{
                                return <Item key={item.id} item={item}/>
                            })
                        }

                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="content">
                                    <div className="footer">
                                        <h3>Add Item</h3>
                                        <input onChange={this.updateItem} type="text" name="label" style={localStyle.input} className="form-control" placeholder="Name" />
                                        <input onChange={this.updateItem} type="text" name="price" style={localStyle.input} className="form-control" placeholder="Price" />
                                        <hr />
                                        <div className="stats">
                                            <button onClick={this.addItem} className="btn btn-success"> Add Item</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
const localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    }
}

const stateToProps = (state) => {
    return {
        item : state.item
    }
}

const dispatchToProps = (dispatch) => {
    // return bindActionCreators({
    //     //addItem: (item) => dispatch(actions.addItem(item))
    //     addItem: actions.addItem
    // }, dispatch)
    return {
        addItem: (item) => dispatch(actions.addItem(item))
    }
}

export default connect(stateToProps, dispatchToProps)(Results);
