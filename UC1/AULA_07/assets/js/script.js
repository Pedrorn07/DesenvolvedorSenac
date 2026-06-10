//análise booleana
let status = true
let acao = prompt("Indique uma ação 0 ou 1");
if (acao !== "" && acao <= 1 && acao >= 0) {
    let confirmar = confirm("Deseja alterar o sistema?");

    if (confirmar) {

if(acao==0){
    status=false
    console.log(`O sistema foi desativado
        O status agora é ${status}`)
} else {`O sistema está ativado
    O status é ${status}`}
        console.log(`você confirmou a alteração ${acao}`)
    } else { 
alert("você cancelou a alteração")
    }
} else {
    alert("você não informou o codigo de ação")
}
