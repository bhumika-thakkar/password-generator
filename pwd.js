const passwordBox=document.getElementById("password");
const lengthValue=document.getElementById("lengthValue");
const uppercase=document.getElementById("Uppercase");
const lowercase=document.getElementById("Lowercase");
const numbers=document.getElementById("Numbers");
const symbols=document.getElementById("Symbols");
const generateBtn=document.getElementById("btn");
const slider=document.getElementById("lengthSlider");
slider.addEventListener("input",function()
{
    lengthValue.innerText=slider.value;
})
generateBtn.addEventListener("click",generatePassword);
function generatePassword()
{
    const upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars="abcdefghijklmnopqrstuvwxyz";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*?_";
    let allchars="";
    let password="";
    if(uppercase.checked) allchars+=upperChars;
    if(lowercase.checked) allchars+=lowerChars;
    if(numbers.checked) allchars+=numberChars;
    if(symbols.checked) allchars+=symbolChars;
    if(allchars=="")
    {
        alert("Select at least one option!!");
        return;
    }
    for(let i=0;i<slider.value;i++)
    {
        const randomeIndex=Math.floor(Math.random()*allchars.length);
        password+=allchars[randomeIndex];
        
    }
    passwordBox.value=password;
}