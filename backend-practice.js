const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);  //this response won't be undefined.//
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();