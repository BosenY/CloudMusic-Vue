import fetch from 'isomorphic-fetch'

const GET_OPTION = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export const getHotList = () => {
    let url = 'http://115.159.64.73:3003/top/list?idx=1'
    return fetch(url,GET_OPTION).then(checkStatus).then(res => res.json())

}