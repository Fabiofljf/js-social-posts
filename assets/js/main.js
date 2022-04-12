//Descrizione
//Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:


// - Milestone 1
/*
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
*/

//Imposto la data da utilizzare nel post.
const dataElement = new Date()
let gg, mm, aaaa, data_oggi;

function getDate() {
    gg = dataElement.getDate();
    mm = dataElement.getMonth();
    aaaa = dataElement.getFullYear();
    const laData = gg + "/" + mm + "/" + aaaa;
    return laData

}

data_oggi = getDate();
console.log(data_oggi);

//Array per i post.
const posts = [{
        id: 01,
        numero_progressivo: 1,
        autore: 'Phil Mangione',
        foto: 'https://unsplash.it/300/300?image=',
        data: data_oggi,
        testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum nisi ut aperiam. Blanditiis nobis fuga quisquam. Ducimus corporis voluptatum totam quidem id ab aliquam!',
        immagine_post: 'https://unsplash.it/300/300?image=',
        numero_like: '20'
    },
    {
        id: 02,
        numero_progressivo: 2,
        autore: 'Sofia Perlari',
        foto: 'https://unsplash.it/300/300?image=',
        data: data_oggi,
        testo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum nisi ut aperiam. Blanditiis nobis fuga quisquam. Ducimus corporis voluptatum totam quidem id ab aliquam!',
        immagine_post: 'https://unsplash.it/300/300?image=',
        numero_like: '20'
    }
];
//console.log(posts);


// - Milestone 2
//Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

const rowElement = document.querySelector('.row');
//console.log(rowElement);

//Numero dei like da aumentare al click
let sommalike = 80;

posts.forEach(post => {
    //console.log(post);
    //console.log(post.autore);
    //console.log(post.data);
    const memberMarkup = ` 
    <div class="col card p-2 mb-2">
        <div class="col d-flex align-items-center">
            <img class="w_50 rounded-circle" src="${post.foto}" alt="foto utente">
            <div class="col d-flex flex-column">
                <h6 class="ps-2 mb-0">${post.autore}</h6>
                <p class="ps-2 mb-0 fs_9">${post.data}</p>
            </div>
        </div>
        <div class="col px-5">
            <p>
                ${post.testo}
            </p>
        </div>
        <div class="col d-flex justify-content-center mb-2">
            <img class=" rounded" src="${post.immagine_post}" alt="foto">
        </div>
        <div class="col d-flex">
            <div class="col d-flex justify-content-around">
                <p>
                    <a href="#" id="like">
                        <i class="fa-solid fa-thumbs-up"></i>
                    </a>
                Mi piace
                </p>
            </div>
            <div class="col d-flex justify-content-around">
                <p>Piace a <strong id="numero_like">${conta_like} </strong>persone</p>
            </div>
        </div>
    </div>
    `
        //console.log(memberMarkup);

    rowElement.insertAdjacentHTML('beforeend', memberMarkup)
})

// - Milestone 3
//Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

//console.log(sommalike);

//cambio colore al like
document.getElementById('like').addEventListener('click', Ilike)

function Ilike() {
    document.getElementById('like').classList.add('getlike')
    sommalike = (sommalike + 1)
    console.log(sommalike);
    return sommalike
}


console.log(sommalike);
console.log(Ilike());

var conta_like = Ilike()