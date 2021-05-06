// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  // Pega todos os formulários que desejamos aplicar o estilo do Bootstrap
  var forms = document.querySelectorAll('.needs-validation')
  // Impede o envio imediato do formulário
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()
// Copiar essas funções
//https://pt.stackoverflow.com/questions/53275/m%c3%a1scaras-para-telefone-e-cpf-em-textfield
function mascara(objeto,funcao){
    v_obj=objeto
    v_fun=funcao
    setTimeout("execmascara()",1);
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value);
}

function id( objeto ){
	return document.getElementById( objeto );
}

function mtel(v){ //MASCARA PARA TELEFONE

    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}


function mcpf(v){  //MASCARA PARA CPF

    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
}

function mcnpj(v){  //MASCARA PARA CNPJ
     v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito	
	   v=v.replace(/(\d{2})(\d)/,"$1.$2")
	   v=v.replace(/(\d{3})(\d)/,"$1.$2")
     v=v.replace(/(\d{3})(\d)/,"$1/$2")       	 
     v=v.replace(/(\d)(\d{2})$/,"$1-$2");    //Coloca o . antes dos últimos 3 dígitos, e antes do verificador 
     return v;
}

function mie(v){  //MASCARA PARA CNPJ
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito      	 
    v=v.replace(/(\d{3})(\d)/,"$1.$2")
	  v=v.replace(/(\d{3})(\d)/,"$1.$2")
	  v=v.replace(/(\d{3})(\d)/,"$1.$2")
    return v;
}


function mrg(v){  //MASCARA PARA RG

    //  v=v.replace( /\s/g, '' );                  //Remove tudo o que não é dígito
	//	v=v.replace(/(\d)(\d{7})$/,"$1.$2");   	 //Coloca o . antes dos últimos 3 dígitos, e antes do verificador
    //  v=v.replace(/(\d)(\d{4})$/,"$1.$2");    //Coloca o . antes dos últimos 3 dígitos, e antes do verificador
    //  v=v.replace(/(\d)(\d)$/,"$1-$2");       //Coloca o - antes do último dígito
		
	  v=v.replace(/(\d{2})(\d)/,"$1.$2")       //Coloca um ponto entre o segundo e o terceiro dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")     
	  v=v.replace(/(\d{5})(\d)/,"$1.$2")     
	  v=v.replace(/(\d{9})(\d)/,"$1-$2")       
    return v;
}

function mcep(v){  //MASCARA PARA CEP
    v=v.replace(/\D/g,"")                      //Remove tudo o que não é dígito
    v=v.replace(/^(\d{5})(\d)/,"$1-$2")         //Esse é tão fácil que não merece explicações
    return v;
}

function mcartao(v){ //MASCARA PARA CARTAO

    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{4})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{4})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
	v=v.replace(/(\d{4})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
	v=v.replace(/(\d{4})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    return v;
}

function mdata(v){ // MASCARA PARA DATA 

    v=v.replace(/\D/g,"");                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{2})(\d)/,"$1/$2");
    v=v.replace(/(\d{2})(\d)/,"$1/$2");
    return v;
}

function mvalor(v){  //MASCARA PARA VALOR EM $$

    v=v.replace(/\D/g,"");//Remove tudo o que não é dígito
    v=v.replace(/(\d)(\d{8})$/,"$1.$2");//coloca o ponto dos milhões
    v=v.replace(/(\d)(\d{5})$/,"$1.$2");//coloca o ponto dos milhares
 
    v=v.replace(/(\d)(\d{2})$/,"$1,$2");//coloca a virgula antes dos 2 últimos dígitos
    return v;
}

function mvalor(v){  //MASCARA PARA VALOR EM $$

    v=v.replace(/\D/g,"");//Remove tudo o que não é dígito
    v=v.replace(/(\d)(\d{8})$/,"$1.$2");//coloca o ponto dos milhões
    v=v.replace(/(\d)(\d{5})$/,"$1.$2");//coloca o ponto dos milhares
 
    v=v.replace(/(\d)(\d{2})$/,"$1,$2");//coloca a virgula antes dos 2 últimos dígitos
    return v;
}

function memail(v){

		v=v.replace( /\s/g, '' );
		return v;
}







//via cep
 
    function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            //document.getElementById('ibge').value=(conteudo.ibge);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="Carregando...";
                document.getElementById('bairro').value="Carregando...";
                document.getElementById('cidade').value="Carregando...";
                document.getElementById('uf').value="Carregando...";
              //  document.getElementById('ibge').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };
    window.onload = function() {
    var btnModoNoturno = document.getElementById('modo');

    btnModoNoturno.onclick = function() {
      document.getElementById('b').classList.toggle("bg-dark");

       var body = document.getElementById('b');
       var h1 = document.getElementById('header');
       var main = document.getElementById('main');
      
          body.classList.toggle("text-light");
          h1.classList.toggle("text-dark");
          main.classList.toggle("text-light");
          main.classList.toggle("bg-dark");      
    }
   
    id('txtCPF').onkeyup = function(){
          mascara(this,mcpf);
      }
    id('cep').onkeyup = function(){ 
		mascara( this, mcep)
	}
    id('txtCEL').onkeyup = function(){ 
		mascara( this, mtel)
	}  
}
    

