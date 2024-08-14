const currentCalculationString = document.getElementById("result-box")
const buttons = Array.from(document.querySelectorAll("button"))


const expression = {
    arr: [],
    toString: function() {
        return this.arr.join(" ")
    },
    backspace: function() {
        // undefined if the expression is empty
        this.arr.pop()
    },
    operate: function() {
        // returns the result of the expression

        if (this.arr.length != 3) return;
        
        const left = this.arr[0]
        const operation = this.arr[1]
        const right = this.arr[2]
        let result;
        
        switch (operation) {
            case "÷":
                result = +left / +right
                break;
            case "x":
                result = +left * +right
                break;
            case "-":
                result = +left - +right
                break;
            case "+":
                result = +left + +right
                break;
        }        
        this.arr.splice(0,3,"" + result)

    },
}


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const optionClicked = e.currentTarget.innerText
        
        switch (optionClicked) {
            case "BACKSPACE":
                expression.backspace()
                break;
            case "=":
                expression.operate()                
                break;
            default:
                if (expression.arr.length === 1 && ["÷","x","-","+"].includes(optionClicked)) expression.arr.push(optionClicked)
                else if (expression.arr.length === 0 || expression.arr.length === 2) expression.arr.push(optionClicked)
                break;
        }
        currentCalculationString.innerText = expression.toString()

    })
});

