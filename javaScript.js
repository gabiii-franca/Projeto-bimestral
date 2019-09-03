login.onclick = fazerLogin
 
function fazerLogin(){
	if (document.getElementById("usuario").value.length == '') {
		alert('Por favor, preencha o campo Usuário!');
		document.getElementById("usuario").focus();
		return false;
	}else{
		if (document.getElementById("senha").value.length == '') {
		alert('Por favor, preencha o campo Senha!');
		document.getElementById("senha").focus();
		return false;
		}else{
			alert('Login efetuado com Sucesso!');
		}
	}
}