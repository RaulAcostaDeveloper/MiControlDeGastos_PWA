// console.log("http://micontroldegastos.com/");
//Este código es para cuando no haya certificado SSL ( No confundir con SSH )
// if (window.location.host == "micontroldegastos.com") {  
//   if (location.protocol !== 'https:') {
//     console.log('Redirect to HTTPS');
//     location.replace(`https:${location.href.substring(location.protocol.length)}`);
//   }
// }
function copyToClipBoard(enlace) {
  navigator.clipboard.writeText(enlace)
      .then(() => {
      console.log("Text copied "+ enlace + " to clipboard...")
  })
      .catch(err => {
      console.log('Something went wrong', err);
  })
  alert("Mi control de gastos.com..!")
}
//OJO!!! era necesario llamar al registroServiceWorker después que la página sea HTTPS en lugar de http
//Por que NO FUNCIONA service Worker si no es HTTPS la página
//La comunicación entre desarrolladores es importante!!!
if (registroServiceWorker()) {
  registroServiceWorker();
  
} else {
  
}