const params = new URLSearchParams(window.location.search);
const id = params.get('id');
console.log(id);

if(id != null) {
    document.getElementById("pontuacaoFinal").removeAttribute("hidden");
    document.getElementById("id").innerHTML = id;
}