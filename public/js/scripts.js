const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show');
});

/**validacion formulario creacion de cuenta */
const form = document.getElementById("form");
const usuario = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const contraseña2 = document.getElementById("contraseña2");

form.addEventListener('submit', e =>{
	e.preventDefault();

	checkInputs(); //este metodo va a validar los inputs(lo creamos abajo) 
});

function checkInputs(){
	const usuarioValue = usuario.value.trim();
	const apellidoValue = apellido.value.trim();
	const correoValue = correo.value.trim();
	const contraseñaValue = contraseña.value.trim();
	const contraseña2Value = contraseña2.value.trim();

	if (usuarioValue === ''){
		setErrorFor(usuario, 'No puede dejar este campo vacío');
	}else{
		setSuccessFor(usuario);
	}

	if (apellidoValue === ''){
		setErrorFor(apellido, 'No puede dejar el campo apellido vacío');
	}else{
		setSuccessFor(apellido);
	}

	if(correoValue === ''){
		setErrorFor(correo, 'No puede dejar el campo email vacío');
	}else if(!isEmail(correoValue)){
		setErrorFor(correo,'No ingresó un email válido');
	}else{
		setSuccessFor(correo);
	}

	if (contraseñaValue === ''){
		setErrorFor(contraseña, 'No puede dejar el campo contraseña vacío');
	}else{
		setSuccessFor(contraseña);
	}
	if(contraseña2Value === '') {
		setErrorFor(contraseña2, 'No puede dejar el campo contraseña2 vacío');
	} else if(contraseñaValue !== contraseña2Value) {
		setErrorFor(contraseña2, 'Contraseñas no coinciden');
	} else{
		setSuccessFor(contraseña2);
	}

	
	
}

function setErrorFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(correo){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo);
}
