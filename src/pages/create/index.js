/**
 * Função para salvar os dados digitados na input
 * para o localStorage
 */
function saveDataToLocalStorage() {
  const tarefa = document.querySelector("#tarefa").value;
  localStorage.setItem("arquivo1", tarefa);
  console.log(tarefa);
}

/**
 * Função para exibir o dado salvo no localStorage
 */
function showLocalStorageData() {
  alert("O valor guardado é: " + localStorage.getItem("arquivo1"));
}

/**
 * Função para limpar os dados salvos no localStorage
 */
function clearLocalStorage() {
  localStorage.removeItem("arquivo1");
}
