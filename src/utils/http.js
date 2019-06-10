import axios from 'axios'
import Storage from './storage'

function $http(options) {
    let token = Storage.get('token');
    let data  = Object.assign({
        token: token
    }, options.data || {});

    axios.get(`http://api.feng.com${options.url}`, {
        params: data
    }).then((res) => {
        options.success(res.data);
    });
    // axios.get('http://api.feng.com/admin/login/enter?name=admin&password=123456').then(function(res) {
    //     console.log(res);
    // })
}

export {
    $http
} 