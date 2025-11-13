fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(respuesta => respuesta.json())   // Convertimos a JSON
  .then(datos => console.log(datos))     // Usamos los datos
  .catch(error => console.error("Error:", error));