console.log("http://micontroldegastos.com/");

if (window.location.host == "micontroldegastos.com") {  
  if (location.protocol !== 'https:') {
    console.log('Redirect to HTTPS');
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
}
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
registroServiceWorker();