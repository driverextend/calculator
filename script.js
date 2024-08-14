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
        
        let left = this.arr[0]
        let operation = this.arr[1]
        let right = this.arr[2]
        

        switch (operation) {
            case "÷":
                this.arr.splice(0,3,"" + +left / +right)
                break;
            case "x":
                this.arr.splice(0,3,"" + +left * +right)
                break;
            case "-":
                this.arr.splice(0,3,"" + +left - +right)
                break;
            case "+":
                this.arr.splice(0,3,"" + +left + +right)
                break;
        }        

    },
}


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const optionClicked = e.currentTarget.innerText
        
        switch (optionClicked) {
            case "BACKSPACE":
                expression.backspace()
                break;
            case "÷":
                if (expression.arr.length === 1) expression.arr.push("÷")
                break;
            case "x":
                if (expression.arr.length === 1) expression.arr.push("x")
                break;
            case "-":
                if (expression.arr.length === 1) expression.arr.push("-")
                break;
            case "+":
                if (expression.arr.length === 1) expression.arr.push("+")
                break;
            case "=":
                expression.operate()                
                break;
            default:
                if (expression.arr.length === 0 || expression.arr.length === 2) expression.arr.push(optionClicked)
                break;
        }
        currentCalculationString.innerText = expression.toString()

    })
});

