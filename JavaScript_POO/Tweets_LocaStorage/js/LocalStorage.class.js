class ManipularLocalStorage {
  static ArrayTweets = [];

  static AgregarTweetsLocalStorage(ContenidoTweet) {
    this.ArrayTweets = this.ObtenerLocalStorage();

    this.ArrayTweets.push(ContenidoTweet);
    console.log(this.ArrayTweets);
    // set item es para guardar algo dentro de el local storage
    // json me ayuda a guardar en el array todos los strings
    localStorage.setItem("tweets", JSON.stringify(this.ArrayTweets));
  }

  static ObtenerLocalStorage() {
    let tweetsObtenidosLS = [];

    if (localStorage.getItem("tweets") === null) {
      return tweetsObtenidosLS;
    }
    //reconose los caracteres y los convierte de vuelta al tipo de dato que guardo 1
    return JSON.parse(localStorage.getItem("tweets"));
  }
}
