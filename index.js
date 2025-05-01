const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let paswword1 =  document.getElementById("password1");
let paswword2 =  document.getElementById("password2");




function generatePasswords(){
    let random = Math.floor(Math.random() * characters.length);
    return characters[random] ;
}


 export function displayPasswords(){
    paswword1.value = "";
    paswword2.value = "";
    for(let i = 0; i < 15; i++){ 
        paswword1.value += generatePasswords();
        paswword2.value += generatePasswords();
    }
}

window.displayPasswords = displayPasswords

