const add_url = "http://127.0.0.1:5000/provisor/add";
function sendItem(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        console.log(body)
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Authorization", 'Basic ' + btoa('Provisor:Pass123'));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };
        xhr.onerror = () => reject(xhr.response);
        xhr.send(JSON.stringify(body));
    });
}

//
