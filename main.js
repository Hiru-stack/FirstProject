console.log('Hello');

document.getElementById('name').addEventListener('keyup',(e)=>{
    //document.getElementById('welcome-msg').innerText = `Hay , ${e.target.value}`;
});

function sayHello(){
    const name = document.getElementById('name').value;
    if(name == ''){
        alert('Error!');
    }
    alert(`Hay Ranil boy`);
}