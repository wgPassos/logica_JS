## Problema ##

Pedir para usuário digitar dois números que representam os lados de um retângulo assim que a página é carregada.

Mostrar na tela a área total de duas formas distintas:

- Num alert ou na div #output(dependendo do botão clicado).

Esse código não precisa ser executado quando a página é aberta.

### O que aprendi: 

#### try e catch

A `try` instrução permite que você teste um bloco de código para erros.

A `catch` declaração permite lidar com o erro.

A `throw` instrução permite criar erros personalizados.

A `finally` instrução permite que você execute o código, depois de tentar e capturar, independentemente do resultado.


### Exemplo de validação de entrada

Este exemplo examina a entreda.
Se o valor estiver errado, uma exceção (err) é lançada.

A exceção (err) é capturada pela instrução catch e uma mensagem de erro personalizada é exibida:

```
    <p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>
```

(https://www.w3schools.com/js/js_errors.asp)[Fonte - W3schools]