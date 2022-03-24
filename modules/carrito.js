export const showDataCarrito = (data, container) => {
    container.innerHTML = '';
    data.forEach((element, index) => {
        container.innerHTML += `

        <div class='d-flex m-2'>
        <img style='width:100px' class='mx-3' src="${element.image}" alt="djdjd">
        <h6 class='mx-5 my-3' id='titulo'>${element.name}</h6>
        <h6 class='mx-5 my-3' id='titulo'>${element.marca}</h6>
        <h6 class='mx-5 my-3' id='price'>$${element.price}</h6>
        <button style='height: 50px;' id=${index} class='my-1 btn btn-outline-primary ms-5 restar'>-</button>
        <h6 class='mx-3 my-3' id='cantidad'>${element.units}</h6>
        <button style='height: 50px;' id=${index} class='my-1 btn btn-outline-primary me-5 sumar'>+</button>
        <i style="font-size: 20px;" class=" btn bi bi-trash mx-5 my-2"></i>
    </div>
      `
    });

}


