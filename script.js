function getActualAnswer(op, num1, num2) {
    return operationApplication[op](num1, num2); 
}


// Pick a random number and map it to the operation chosses
function getRandomOp() {
    const op_number = Math.floor(Math.random() * 4);
    return operationsMap[op_number]; 
}

const app = new Vue({
    el: '#app', 
    data: {
        num1: 1, 
        num2: 1, 
        op: '+', 
        response: '', 
        incorrect: false
    }, 
    methods: {
        updateData: function () {
            this.num1 = Math.ceil(Math.random() * 10); 
            this.num2 = Math.ceil(Math.random() * 10); 
        },
        checkSubmission: function(e) {
            const answer = parseInt(this.response); 
            if (getActualAnswer(this.op, this.num1, this.num2) === answer) {
                this.updateData(); 
                // this.op = getRandomOp(); 
                console.log(this.response);
                this.response = ''; 
                console.log('after: ' + this.response);
            } else {
                this.incorrect = true; 
            }
        }, 
        updateResponse: function(e) {
            this.response = e.target.value; 
        }


    }
})