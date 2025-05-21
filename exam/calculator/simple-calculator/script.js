
        let display = document.getElementById('display');
        
        function appendToDisplay(value) {
            if (display.textContent === '0' && value !== '.') {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }
        
        function clearDisplay() {
            display.textContent = '0';
        }
        
        function backspace() {
            if (display.textContent.length === 1) {
                display.textContent = '0';
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
        }
        
        function calculate() {
            try {
                // Replace × with * for JavaScript evaluation
                let expression = display.textContent.replace(/×/g, '*');
                let result = eval(expression);
                
                // Handle division by zero
                if (!isFinite(result)) {
                    display.textContent = 'Error';
                } else {
                    // Format the result to avoid extremely long decimals
                    display.textContent = parseFloat(result.toFixed(10)).toString();
                }
            } catch (error) {
                display.textContent = 'Error';
            }
        }