let paragraph = document.createElement('p');
let text = document.createTextNode('this can whatever text you would like it to be');

paragraph.appendChild(text);
paragraph.style.color = 'red';
paragraph.style.textTransform = 'uppercase';
paragraph.className = 'grid-square';