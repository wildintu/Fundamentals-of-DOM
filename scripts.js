document.addEventListener('DOMContentLoaded', function() {
let paragraph = document.createElement('p');
let text = document.createTextNode('this can whatever text you would like it to be');

paragraph.style.color = 'red';
paragraph.style.textTransform = 'uppercase';
paragraph.className = 'some-paragraph';

paragraph.appendChild(text);
document.body.appendChild(paragraph);
})
