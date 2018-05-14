import React from 'react';
import StockGraph from '../components/StockGraph.jsx';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{backgroundColor: '#E8E8E8', height: '100vh'}}>
                <div className='container'>
                    <label style={{height: '30px', fontSize: '30px', marginBottom: '25px'}}>
                        Stock Visualization
                    </label>
                    <StockGraph />
                </div>
            </div>
        )
    }
}

export default HomePage;