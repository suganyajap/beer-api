document.body.innerHTML=`
<section class="beer-list">
<div class="col-12 col-sm-6 col-md-3"></div>
</section>`;
 async function getAllUsers(){
     const data=await fetch("https://api.punkapi.com/v2/beers",{method:"GET"});
     const users=await data.json();
     const userContainer=document.querySelector(".beer-list");
     
     users.forEach((beer) => {
         userContainer.innerHTML+=`
         <div class="beer-container">
         <div>
         <img class="image" src="${beer.image_url}"/>
         </div>
        <div class="beer-details"> 
        <h1> Beer Details</h1>
         <p class="name"><b>Name: </b>${beer.name}</p>
         <p class="tln"><b>Tagline: </b>${beer.tagline}</p>
         <p class="first"><b>First_brewed: </b>${beer.first_brewed}</p>
         
         </div>
        </div>
         `;
         
     });
     console.log(users);
 }
 getAllUsers();
