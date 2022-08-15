document.getElementById("submit-button").addEventListener("click", function() {
    console.log(document.getElementById("id_no-input").value)
    getPASResults(document.getElementById("id_no-input").value)

})

function getPASResults(id_no) {
    url = "https://script.google.com/a/macros/obf.ateneo.edu/s/AKfycbzgz-mHGwAFUOAYlvr_mVGFApGxjDopIvJcdDgMw7ZClb6xCKkfz5fKztx4YVT6DA8JDQ/exec?id_no=" + id_no
    fetch(url)
        .then(response => response.json)
        .then(console.log(data))
}