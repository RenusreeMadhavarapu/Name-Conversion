
function camelcase(str){
    const myArray = str.split(" ");
    let camel = [];
    for (let i=0;i<myArray.length;i++){
      
        camel.push(myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1));  
        
    }
    
    if(camel[0].charAt(0)==camel[0].charAt(0).toUpperCase()){
    camel[0]=camel[0].charAt(0).toLowerCase()+camel[0].slice(1);
    }
    
    return camel.join("");
    
    
    }
    
    function pascalcase(str){
        const myArray = str.split(" ");
        let camel = [];
        for (let i=0;i<myArray.length;i++){
          
            camel.push(myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1));  
            
        }
        
        return camel.join("");
        
        
        }
    
        function snakecase(str){
            const myArray = str.split(" ");
            let camel = [];
            for (let i=0;i<myArray.length;i++){
              
                camel.push(myArray[i].charAt(0).toLowerCase() + myArray[i].slice(1));  
                
            }
            
            return camel.join("_");
            
            
            }
            function screaming_snakecase(str){
                const myArray = str.split(" ");
                let camel = [];
                for (let i=0;i<myArray.length;i++){
                  
                    camel.push(myArray[i].toUpperCase());  
                    
                }
                
                return camel.join("_");
                
                
                }

                function kebabcase(str){
                    const myArray = str.split(" ");
                    let camel = [];
                    for (let i=0;i<myArray.length;i++){
                      
                        camel.push(myArray[i].charAt(0).toLowerCase() + myArray[i].slice(1));  
                        
                    }
                    
                    return camel.join("-");
                    
                    
                    }
                    function screaming_kebabcase(str){
                        const myArray = str.split(" ");
                        let camel = [];
                        for (let i=0;i<myArray.length;i++){
                          
                            camel.push(myArray[i].toUpperCase());  
                            
                        }
                        
                        return camel.join("-");
                        
                        
                        }
    
    let inputValue = document.getElementById("text")
    let convertBtn = document.getElementById("convert-btn")
    let camelCase = document.getElementById("camel-case")
    let pascalCase = document.getElementById("pascal-case")
    let snakeCase = document.getElementById("snake-case")
    let screamingsnakeCase = document.getElementById("screaming-snake-case")
    let kebabCase = document.getElementById("kebab-case")
    let screamingkebabCase = document.getElementById("screaming-kebab-case")

    
    convertBtn.addEventListener("click", () => {
        camelCase.innerText = camelcase(inputValue.value);
        pascalCase.innerText = pascalcase(inputValue.value);
        snakeCase.innerText = snakecase(inputValue.value);
        screamingsnakeCase.innerText=screaming_snakecase(inputValue.value);
        kebabCase.innerText = kebabcase(inputValue.value);
        screamingkebabCase.innerText=screaming_kebabcase(inputValue.value);
    
    
    })
    