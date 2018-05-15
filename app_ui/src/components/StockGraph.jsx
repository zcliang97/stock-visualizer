import React from 'react';
import Plotly from 'plotly.js/dist/plotly';
import { stockAPIs } from '../api';
import { dataUtils } from '../../helper/dataUtils';

export default class StockGraph extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tickers: {},
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
                    this.state.tickers[ticker] = response.data
                    this.setState({ tickers: this.state.tickers }, () => { console.log(this.state.tickers)})
                })
        }
    }

    render() {
        let graphDiv = document.getElementById('graph');
        let data = dataUtils.getStockData(this.state.tickers)//dataUtils.getMockStockData()

        if (graphDiv !== null) {
            Plotly.newPlot(graphDiv, data,
                {
                    margin: { t: 20, b: 80, l: 70, r: 70 },
                    showlegend: true,
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
                        <div>
                        {
                            Object.keys(this.state.tickers).map((ticker) => {
                                return(
                                    <div>
                                        <input type='checkbox'></input> {ticker}
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <button className="btn btn-primary" style={{ float: 'right', marginTop: '10px' }} onClick={() => { this.setState({ tickers: {} })}}>
                        Clear
                    </button>
                </div>
            </div>
        )
    }
}