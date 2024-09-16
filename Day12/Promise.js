/*
const url="https://api.github.com/users/ptomer40";
const options={};
const pr=fetch(url,options);
pr.then(successCB).catch(errorCB);

function successCB(res){
    console.log("Success-->",res);
}

function errorCB(res){
    console.log("Error:",res);
}
*/  
/*
let data;
const url="https://dummyjson.com/products";
  const pr=fetch(url);
pr.then(successCB);

function successCB(res){
    console.log("Success",res);
    data=res.json();
    data.then((res)=>{
        for(i=0;i<10;i++){
        const parent=document.getElementById('data');;
        const child=document.createElement("h1");
        parent.appendChild(child);
        
        child.textContent=res.products[i].title;
        child.style.backgroundColor="cyan";    
    }
       
        
        console.log("Fianl Data:",res);
    })
    
}
*/
 function getData(){
      let user=document.getElementById("repo_id").value;

    const data=fetch(`https://api.github.com/users/${user}`);
data.then(res=>{  
    res.json().then(res=>{
       console.log(res);
       document.getElementById('data').innerHTML = '';
           const parentDiv=document.getElementById("data");
           const divfChild=document.createElement("h1");
           divfChild.innerText=`${res.login} - ${res.bio}`;

           parentDiv.appendChild(divfChild);
           parentDiv.setAttribute("class","card");
           let img=document.createElement("img");

          
           img.setAttribute("src",res.avatar_url);
           img.setAttribute("height","200px");
           img.setAttribute("width","200px");
           img.setAttribute("id","myimg");
          
           parentDiv.appendChild(img);
           
           
   });
})

 }

