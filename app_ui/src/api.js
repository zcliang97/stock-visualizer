import axios from 'axios';

const stockAPIs = {
    getStockData: function () {
        return new Promise((resolve, reject) => {
            axios.get('api/stock_data')
                .then((response) => {
                    if (response.status === 200) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                }).catch((error) => {
                    console.log(error);
                    reject(error);
                })
        })
    },

    postStockData: function (data) {
        return new Promise((resolve, reject) => {
            console.log(data);
            axios.post('api/post_stock_data', data)
                .then((response) => {
                    if (response.status === 202) {
                        return resolve({ data: response.data, location: response.headers.location });
                    } else {
                        reject(new Error('postStockData'));
                    }
                })
                .catch((error) => {
                    reject(new Error(error));
                });
        });
    }
},

export { stockAPIs, }