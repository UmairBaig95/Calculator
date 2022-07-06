var calculatorJavascript = new CalculatorJavaScript();
 
calculatorJavascript.init();

function CalculatorJavaScript(){
     
  var globalVar = {
    expressionArr : []
  }

  var domElement = {}

  this.init = function(){
    InitializeVariables();
    Initialization();
    
  }

  function InitializeVariables(){
    InitializeDomElement();
  }

  function  Initialization(){

  }
  
  function InitializeDomElement(){
    domElement = {
      txtResult : document.getElementById('txtResult')
    }
  }

  function UpdateTextArea()
  {
      domElement.txtResult.innerText = globalVar.expressionArr.join('');
  }

  function EmptyGlobalArray()
  {
    globalVar.expressionArr.length = 0;
  }

  this.display = function(val){
    var last = globalVar.expressionArr.at(-1);
    if(val === '-' || val === '+'  || val === '*' || val === '/')
    { 
        if (val == last) 
        {
            return
        }
        else if(last === '-' || last === '+'  || last === '*' || last === '/')
        {
          globalVar.expressionArr[globalVar.expressionArr.length - 1] = val; 
        } 
        else
        {
          globalVar.expressionArr.push(val) 
        }
    }
    else
    {
      globalVar.expressionArr.push(val) 
    }
    UpdateTextArea();
  }

  this.equal = function(){
    let result = eval(globalVar.expressionArr.join(''))
    domElement.txtResult.innerText = result
    EmptyGlobalArray();
  }

  this.allClear = function(){
    EmptyGlobalArray();
    domElement.txtResult.innerText = ""
  }

  this.delele = function(){
    globalVar.expressionArr.pop();
    domElement.txtResult.innerText = globalVar.expressionArr.join('')
  }
 
} 