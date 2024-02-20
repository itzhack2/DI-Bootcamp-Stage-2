function onlyletter(){
    let input=document.getElementById("letterinput")
    input.value=input.value.replace(/[^a-zA-Z]/g,'')
}