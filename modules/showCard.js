export const showCards = (data, container) => {

    data.forEach( card => {
        let {id, image, name} = card;
        container.innerHTML += `
        
        <div class="card d-inline-block m-3" style="width: 12rem;">
            <img src="${image}" class=card-img-top w-50 d-block m-auto"
                alt="...">
            <div class="card-body">
            <a id=${id} data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-primary d-block m-auto">${name}</a>
            </div>
        </div>    
        `
    })
}