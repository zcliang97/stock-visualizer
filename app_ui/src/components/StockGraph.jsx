import React from 'react';
import Plotly from 'plotly.js/dist/plotly';

export default class StockGraph extends React.Component {
    constructor(props){
        super(props);


    }

    render(){
        let graphDiv = document.getElementById('graph');
        
        if(graphDiv !== null){
            Plotly.newPlot(graphDiv,
                [{
                    type: 'scatter',
                    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    y: [2, 4, 1, 8, 12, 21, 2, 4, 12, 31, 5, 12, 45, 28, 60, 79]
                }],
                {
                    margin: { t: 20, b: 80, l: 70, r: 70},
                    showlegend: false,
                    paper_bgcolor: '#152935',
                    plot_bgcolor: '#152935',
                    xaxis: {
                        color: '#FFFFFF'
                    },
                    yaxis: {
                        color: '#FFFFFF'
                    }
                }
            );
            window.addEventListener("resize", function() { Plotly.Plots.resize(graphDiv)} );
        }
        
        return(
            <div style={{backgroundColor: '#152935'}}>
                <div id="graph" style={{width: '60%', height: '100%'}}></div>
            </div>
        )
    }
}