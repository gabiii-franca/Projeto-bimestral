envia.onclick = enviarDados
 
function enviarDados(){
	if (document.getElementById("email").value.length == '' ) {
		alert('Por favor, preencha o campo email!');
		document.getElementById("email").focus();
		return false;
	}else{
		alert('Email enviado com sucesso!');	
	}	
}