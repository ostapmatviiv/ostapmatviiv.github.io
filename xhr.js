const login_url = "http://127.0.0.1:5000/user";
function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
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
const body={
    username:"Vlad",
    email:"vlad@abc.com",
    password:"Vlad123"
}
sendRequest("POST",login_url,body)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))