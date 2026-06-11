//d
let status = false;
let Produto = prompt("Indique o produto");

if (Produto !== "") {

    let confirpd = confirm("Você deseja excluir esse produto?")
    if (confirpd) {
        status = true
        console.log(`Produto excluido`)
    } else {
        alert(`produto cancelado`)
    }
} else {
    console.log("error")
}

