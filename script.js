let counter = 1;

function deletetodo(index){
    const deltodo= document.getElementById(index);
    deltodo.parentNode.removeChild(deltodo)

}

function addtodo(){

    const readinput=document.querySelector("input");
    const value=readinput.value;

    const newelement=document.createElement("div");
    newelement.setAttribute("id",counter) ;
  
    newelement.innerHTML=` <div style="display:Flex;">
                                <div>
                                    <h4>${counter}.</h4>
                                </div>

                                <div style="margin-left:5px;">
                                    <h4>  ${value}</h4>
                                </div>
                                <div>
                                    <button onclick="deletetodo(${counter})" style="margin-top: 20px;margin-left: 20px;"> Delete </button> 
                                </div>
                                
                            </div>`;



    const creatparnt=document.querySelector("body");
    
    creatparnt.appendChild(newelement)
    counter=counter+1;
    readinput.value = "";
    
}