const dataUtils = {
    getMockStockData: function () {
        return [{
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
        }]
    },

    getStockData: function (tickers) {
        let data = []
        Object.keys(tickers).forEach((ticker) => {
            let times = Object.keys(tickers[ticker]).sort()
            data.push({
                 name: ticker,
                 type: 'scatter',
                 x: times,
                 y: times.map((time) => { return tickers[ticker][time] }),
            })
        })
        return data
    }
}

export { dataUtils }