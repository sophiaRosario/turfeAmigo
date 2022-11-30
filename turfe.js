var vt_nome = [];
var vt_qtd_cavalo = [];
var vt_qtd_voltas = [];
var sorteio = ((Math.random * 2) + 7).toFixed

function corrida() {
    var nome = inp_nome.value;
    var qtdCavalo = Number(inp_qnt.value);
    var qtdVoltas = Number(inp_voltas.value);
    var ax_erro = true;

    if (inp_nome.value == `` || inp_voltas.value == `` ||  inp_qnt.value == ``) {
        alert("Erro: Preencha os campos em branco!")
        ax_erro = false;
    } 
    if (qtdCavalo > 3) {
        alert("A quantidade de voltas não pode ser maior que 3")
        ax_erro = false;
    }
    if (qtdVoltas > 7) {
        alert("A quantidade de voltas não pode ser maior que 7")
        ax_erro = false;
    }
    if (vt_nome.length > 0) {
        for (var index = 0; index < vt_nome.length; index++) {
            if (vt_nome[index] == nome) {
                alert("Por favor não insira nomes iguais")
                inp_nome = '';
                ax_erro = false;
                break
            }
        }
    }
    if (ax_erro) {
        vt_nome.push(inp_nome.value);
        vt_qtd_cavalo.push(inp_qnt.value);
        vt_qtd_voltas.push(inp_voltas.value);
        alert("O cavalinho " + nome + " foi registrado com sucesso!!!")

        inp_nome.value = '';
        inp_qnt.value = '';
        inp_voltas.value = '';
    }
}

function quantidade() {
    var qtdCavalo = Number(inp_qnt.value);
    var ax_erro = true;

    if (inp_nome.value == ``) {
        alert("Erro: Preencha o campo em branco!")
        ax_erro = false;
    }

    if (Number.isNaN(qtdCavalo)) {
        alert("Insira um valor numérico")
        ax_erro = false;
    }

    if (ax_erro) {
        vt_qtd_cavalo.push(inp_qnt.value);
        
        tela1.style.display = 'none'
        tela2.style.display = 'flex'
    }
}

function nomes() {
    
}