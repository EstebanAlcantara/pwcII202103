import './stylesheets/style.css'
import './stylesheets/mystyles.css'

console.log("WebPack funcionando")

//default parameters

let show = (m = "hola") =>{
    alert(m)
};

show();


function resolveAfter2Seconds(){
    return new Promise( resolve => {
        setTimeout(()=>{
            resolve('resolve')
        }, 2000);
    });
}

async function asyncCall(){
    console.log("Calling an async function");
    const result = await resolveAfter2Seconds();
    console.log(result);
}
 asyncCall();
