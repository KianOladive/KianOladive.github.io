document.getElementById("submit-button").addEventListener("click", function() {
    console.log(document.getElementById("id_no-input").value)
    getPASResults(document.getElementById("id_no-input").value)
    // getPASData(document.getElementById("id_no-input").value)

})

function getPASResults(id_no) {
    // url = "https://script.google.com/a/macros/obf.ateneo.edu/s/AKfycbwqiNY1rvxHJ-KlOlTPrV0bqyG7ADYxeA-QLii1JTO-YolG-CabvveZgePiGB0NEsOYTw/exec?id_no=" + id_no
    // fetch(url)
    //     .then(response => console.log(response))
    
    var xmlhttp = new XMLHttpRequest();
    var theUrl = "https://script.google.com/a/macros/obf.ateneo.edu/s/AKfycbxNRkILkzz_P9WU88OjypiZ-a2-htF8o5ecs14dKoMlpHjRly4go1HmhuXuH2y8q_1fUQ/exec?id_no="+id_no;
    xmlhttp.open("GET", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send();
}



// async function getPASData(id_no) {
//     const response = await fetch("https://script.google.com/a/macros/obf.ateneo.edu/s/AKfycbxNRkILkzz_P9WU88OjypiZ-a2-htF8o5ecs14dKoMlpHjRly4go1HmhuXuH2y8q_1fUQ/exec?id_no="+id_no)
//     const data = await response.json()
//     console.log(data)
// }
