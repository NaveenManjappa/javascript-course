const xhr = new XMLHttpRequest();

xhr.addEventListener('load',() => {
  console.log('response',xhr.response);
  
});

xhr.open('GET','https://supersimplebackend.dev/');
xhr.send();
console.log('response',xhr.response);