async function getUppercaseTitlesByUser(userId = 1) {
  try{
    // 1) fetch posts
    const fetch=await fetch("https://jsonplaceholder.typicode.com/posts");

    // 2) json
    const json=await json.json();

    // 3) filter por userId
    const filtro=json.filter(json=>json.userId===userId);

    // 4) map a títulos en mayúsculas
    const mayuscula=filtro.map(post=>json.title.toUpperCase());
    return mayuscula;
  }
  catch (error){
    
  }
  
}
async function totalElectronics() {
  try{
  // GET https://fakestoreapi.com/products
  const fetch=await fetch("https://fakestoreapi.com/products");
  const json=await fetch.json();
  // filter por category === 'electronics'
  const filtro=json.filter(json=>json.category==="electronics");
  // reduce sumando price
  const precioTotal=filtro.reduce((suma, producto)=>suma+producto.precio, 0);

  return precioTotal;
}catch (error){

  }
}
