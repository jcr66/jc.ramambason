document.addEventListener('DOMContentLoaded', function() {
  // Your code here...

  var header1 = document.getElementsByTagName('h1');
  console.log(header1);

  var header2 = document.getElementById('headerID');
  console.log(headerID);

  header2.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    event.target.style.color = 'pink';

  });

  var paragraph1 = document.createElement('p');
  paragraph1.innerText = 'I am so cool!';
  document.body.appendChild(paragraph1);

  var paragraph2 = document.createElement('p');
  paragraph2.innerText = 'My name is Julie and I am French.';
  paragraph2.style.fontSize = '18px';
  paragraph2.style.fontFamily = 'sans-serif';
  paragraph2.style.width = '100px';
  paragraph2.style.border = '1px solid orange';
  paragraph2.style.padding = '30px';
  document.body.appendChild(paragraph2);

  paragraph2.addEventListener('mouseenter', function(event){
    console.log(event);
    console.log(event.target);
    event.target.style.color = 'yellow';
  })

  paragraph2.addEventListener('mouseleave', function(event){
    console.log(event);
    console.log(event.target);
    event.target.style.color = 'black';
  })


  header1[0].style.color = 'turquoise' ;
  header2.style.color = 'tomato' ;
  header2.style.fontSize = '40px' ;
  header2.style.background = 'yellow' ;
  header2.style.padding = '10px' ;
  header2.style.border = '20px dashed blue' ;



});
