document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#display');
    const keys = document.querySelector('.keys');

    keys.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            const key = e.target;
            const action = key.className;
            const keyContent = key.textContent;
            const displayedNum = display.value;

            if (action.includes('number')) {
                display.value = displayedNum === '0' ? keyContent : displayedNum + keyContent;
            }

            if (action.includes('operator')) {
                display.dataset.firstValue = displayedNum;
                display.dataset.operator = keyContent;
                display.value = '0';
            }

            if (action.includes('equal')) {
                const firstValue = parseFloat(display.dataset.firstValue);
                const operator = display.dataset.operator;
                const secondValue = parseFloat(displayedNum);

                display.value = calculate(firstValue, operator, secondValue);
            }

            if (action.includes('clear')) {
                display.value = '0';
            }

            if (action.includes('delete')) {
                display.value = displayedNum.slice(0, -1) || '0';
            }
        }
    });

    function calculate(first, operator, second) {
        if (operator === '+') return first + second;
        if (operator === '-') return first - second;
        if (operator === '*') return first * second;
        if (operator === '/') return first / second;
        return 0;
    }
});
