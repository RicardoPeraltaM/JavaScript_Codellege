const txTeewt = document.querySelector("#txTeewt");
const listaTweets = document.querySelector("#lista-tweets");

eventListener();
CargarTweetsLS();

function eventListener() {
  // query selector solo te trae la primera etiqueta del que necesites
  document
    .querySelector("#formulario")
    .addEventListener("submit", ObtenerFormulario);
  listaTweets.addEventListener("click", EliminarTweet);
}

function ObtenerFormulario(event) {
  event.preventDefault();

  //   confirmamos que el tweet que se envia no sea vacio
  if (txTeewt.value.trim() == "") return;

  const InstanciaTweet = new Tweets(txTeewt.value);
  InstanciaTweet.AgregarTweetDom(listaTweets, true);
  txTeewt.value = "";
}

function EliminarTweet(event) {
  Tweets.EliminarTweetDom(event);
}

function CargarTweetsLS() {
  const TweetsLS = ManipularLocalStorage.ObtenerLocalStorage();
  console.log(TweetsLS);

  for (let i = 0; i < TweetsLS.length; i++) {
    const instanciaTweet = new Tweets(TweetsLS[i]);
    instanciaTweet.AgregarTweetDom(listaTweets, false);
  }
  
}
