export const showModal = async (idCard, container) => {
    let res = await fetch(`http://localhost:4000/paletas/${idCard}`);
    let data = await res.json();


   localStorage.setItem('producto', JSON.stringify(data))

    let { id, name, description, price, image } = data;


    container.innerHTML = `
   <div class="modal-header">
   <h5 class="modal-title" id="exampleModalLabel">${name}</h5>
   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class='row g-0'>
   <div class='col-md-4'>
       <img class='w-100 my-5 ms-4' src="${image}" alt="...">
   </div>
   <div class='col-md-8'>
       <div class="modal-body my-3 mx-2">

           <h3>${price}</h3>
           <p>${description}</p>
           <center>
               <button id=${id} class='btn mt-5 btn-outline-primary carrito'>agregar al carrito</button>
           </center>
       </div>
   </div>
</div>
   `




}