const initialState = {
    all: [
        {id: 1, key: '1',  price: 100,  defaultAnimation: 2,  label: 'Shashank Gupta',  position:{lat: 40.7224017, lng: -73.9896719}},
        {id: 2, key: '2',   price: 200,  defaultAnimation: 2,  label: 'Robert Samonte',  position:{lat: 40.7124017, lng: -73.9896719}},
        {id: 3, key: '3',   price: 300,  defaultAnimation: 2,  label: 'Amanda Willson',  position:{lat: 40.7334017, lng: -73.9896719}},
    ]
}

export default (state = initialState, action) => {
    let updated = Object.assign({}, state)
    switch(action.type){
        case 'ITEM_ADDED':
        console.log('ITEM ADDED:', JSON.stringify(action.data));
        let all = Object.assign([], updated.all)
        all.push(action.data);
        updated['all'] = all;
        
        return updated

        default:
            return updated
    }
}