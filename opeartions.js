const operationsMap = {
    0: '+', 
    1: '-', 
    2: '*', 
    3: '/'
}; 
const operationApplication = {
'+': (num1, num2) => {return num1+num2;}, 
'-': (num1, num2) => {return num1-num2;}, 
'*': (num1, num2) => {return num1*num2;}, 
'/': (num1, num2) => {return num1/num2}
}; 