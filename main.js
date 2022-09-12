function getIP() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.ipify.org?format=json', false);
    xhr.send();
    if (xhr.status != 200) {
        alert( xhr.status + ': ' + xhr.statusText );
    } else {
        return JSON.parse(xhr.responseText).ip;
    }
}
function LogExecution() {
    var url = "https://eol59thfj4yzslq.m.pipedream.net";
    var xhr = new XMLHttpRequest();
    //Send a empty GET request to the url
    xhr.open('GET', url, true);
    xhr.send();
    if (xhr.status != 200) {
        alert( xhr.status + ': ' + xhr.statusText );
    } else {
        alert("Success");
    }
}
document.getElementById("ip").innerHTML = getIP();
//When button with ID "a" is clicked play sound "rick"
document.getElementById("a").addEventListener("click", function () {
    var audio = new Audio("rick.mp3");
    audio.play();
    LogExecution();
});

