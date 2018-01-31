import React from 'react';
import StockGraph from '../components/StockGraph.jsx';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='container' style={{width: '100', backgroundColor: '#1C2D35'}}>
                <div style={{height: '30px', fontSize: '30px', color: 'white', paddingBottom: '25px'}}>
                    Real Time Visualization
                </div>
                <StockGraph />
            </div>
        )
    }
}

export default HomePage;