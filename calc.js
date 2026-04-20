const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if(value === 'C'){
            display.value = '';
        }else if(value === '='){
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if(value === 'X'){
            display.value = display.value.slice(0, -1);
        } else if(value === '^'){
            display.value += '**';
        }else if(value === '%'){
            display.value += '/100';
        }else{
            display.value += value;
        }
    });
});

