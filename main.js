const prompt = require('prompt-sync')({sigint: true});
let color = prompt('Enter colors: ');
color = color.toLowerCase();
if(color.includes(' ')) {
    if(color === 'red blue'){
        console.log('purple');
    } else if(color === 'red yellow'){
        console.log('orange');
    } else if(color === 'blue yellow') {
        console.log('green');
    } else {
        console.log('Error');
    }
} else {
    if (color === 'purple'){
        console.log('red blue');
    } else if(color === 'orange'){
        console.log('red yellow');
    } else if(color === 'green'){
        console.log('blue yellow');
    } else {
        console.log('Error');
    }
}
