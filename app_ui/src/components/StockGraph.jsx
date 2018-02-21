import React from 'react';
import Plotly from 'plotly.js/dist/plotly';
import { stockAPIs } from '../api';

export default class StockGraph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currStocks: []
        }

        this.addStockToGraph = this.addStockToGraph.bind(this);
        this.postStockRequest = this.postStockRequest.bind(this);
    }
    postStockRequest(ticker, data) {
        console.log('Posted stock request');
        let obj = {
            'ticker': ticker,
            'data': data
        }
        stockAPIs.postStockData(obj);
    }

    addStockToGraph() {
        let input = document.getElementById('stock-input');

        if (input !== null) {
            let ticker = input.value;
            console.log('Adding stock: ' + input + ' to graph...');
            stockAPIs.getStockData(ticker)
                .then((response) => {
                    this.setState({ ticker: response.data })
                    console.log(response.data);
                })
        }
    }

    render() {
        let graphDiv = document.getElementById('graph');

        if (graphDiv !== null) {
            Plotly.newPlot(graphDiv,
                [{
                    name: 'Apple',
                    type: 'scatter',
                    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    y: [2, 4, 1, 8, 12, 21, 2, 4, 12, 31, 5, 12, 45, 28, 60, 79]
                },
                {
                    name: 'Google',
                    type: 'scatter',
                    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    y: [1, 8, 3, 4, 4, 2, 12, 16, 19, 20, 40, 35, 32, 36, 39, 42]
                }],
                {
                    margin: { t: 20, b: 80, l: 70, r: 70 },
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
            window.addEventListener("resize", function () { Plotly.Plots.resize(graphDiv) });
        }

        return (
            <div>
                <div id="graph" style={{ width: '75%', height: '450px', backgroundColor: '#152935', float: 'left' }}></div>
                <div className='container' style={{ width: '20%', float: 'right', backgroundColor: 'white', borderRadius: '10px', marginBottom: '20px', padding: '10px 10px 10px 10px' }}>
                    <div>
                        <label style={{ fontSize: '20px', marginRight: '2%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            Add Stock
                        </label>
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <input id='stock-input' type="text" className="form-control" placeholder="ex. GOOG" />
                        </div>
                        <button className="btn btn-primary" style={{ float: 'right', marginTop: '10px' }} onClick={this.addStockToGraph}>Add</button>
                    </div>
                </div>
                <div className='container' style={{ width: '20%', float: 'right', backgroundColor: 'white', borderRadius: '10px', padding: '10px 10px 10px 10px' }}>
                    <label className='txt_style' style={{ fontSize: '20px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        Current Stocks
                    </label>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}