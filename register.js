const login_url = "http://127.0.0.1:5000/";
function sendRequest(method, url,name,email,pass) {

    var x=document.getElementById("select");
    var res=x.options[x.selectedIndex].value;
    var badi=res+'name:'+name+','+res+'email:'+email+','+res+'pass:'+pass;
    var jsonStrig = '{';
    var items = badi.split(',');
    for (var i = 0; i < items.length; i++) {
        var current = items[i].split(':');
        jsonStrig += '"' + current[0] + '":"' + current[1] + '",';
    }
    jsonStrig = jsonStrig.substr(0, jsonStrig.length - 1);
    jsonStrig += '}';
    var obj = JSON.parse(jsonStrig);
    console.log(obj)
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url+res);
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
        xhr.send(JSON.stringify(obj));
    });
}