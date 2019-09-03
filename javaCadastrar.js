cadastro.onclick = cadastrar
 
function cadastrar(){
	if (document.getElementById("nome").value.length == '') {
		alert('Por favor, preencha o campo Nome!');
		document.getElementById("nome").focus();
		return false;
	}else{
		if (document.getElementById("usuario").value.length == '') {
			alert('Por favor, preencha o campo Usuário!');
			document.getElementById("usuario").focus();
			return false;
		}else{
			if (document.getElementById("senha1").value.length == '') {
				alert('Por favor, preencha o campo Senha!');
				document.getElementById("senha1").focus();
				return false;
			}else{
				if (document.getElementById("senha2").value.length == '') {
					alert('Por favor, preencha o campo Senha!');
					document.getElementById("senha2").focus();
					return false;
				}else{
					alert('Cadastro efetuado com Sucesso!');
				}
			}
		}
	}		
}