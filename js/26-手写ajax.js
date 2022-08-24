const xhr = new XMLHttpRequest()
xhr.open('GET', '/data/test.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(JSON.prase(xhr.responseText))
            alert(xhr.responseText)
        } else if (xhr.status === 404) {
            console.log('404 not found');
        }
    }
}
xhr.send(null)

function ajax(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '/data/test.json', true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                } else if (xhr.status === 404) {
                    reject(new Error('404 not found'))
                } 
                    
                
            }
        }
        xhr.send(null)
    })
    return p
}

const url = '...'
ajax(url).then(res => console.log(res)).catch(err => console.log(err))
