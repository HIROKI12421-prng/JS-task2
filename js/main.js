'use strict';

{
  document.querySelector('button').addEventListener('click',() => { 
    
    const list = document.querySelector('ul');
    while(list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
    
    const fizz = document.getElementById('fizz').value;
    const buzz = document.getElementById('buzz').value;
    
    const Fizz = parseFloat(fizz);
    const Buzz = parseFloat(buzz);
    

    for(let i = 1; i < 100; i++) {
      const li = document.createElement('li');
      
      if(Number.isInteger(Fizz) && Number.isInteger(Buzz)) {
        if(i % Fizz === 0 && i % Buzz === 0) {
          li.textContent = `FizzBuzz ${i}`;
          document.querySelector('ul').appendChild(li);
        } else if (i % Fizz === 0) {
          li.textContent = `Fizz ${i}`;
          document.querySelector('ul').appendChild(li);
        } else if (i % Buzz === 0) {
          li.textContent = `Buzz ${i}`;
          document.querySelector('ul').appendChild(li);
        } 
      } else {
        li.textContent = '整数値を入力してください';
        document.querySelector('ul').appendChild(li);
        break;
      }
    }
    
  });

}