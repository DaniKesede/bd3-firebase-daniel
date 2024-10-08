const listBook = document.querySelector('#book-list');
function renderList(doc){

    // console.log('teste' + doc.Autor)
    let = li = document.createElement('li');
    let = autor = document.createElement('span');
    let = titulo = document.createElement('span');

    autor.textContent = doc.Autor;
    titulo.textContent = doc.Titulo;

    li.appendChild(titulo);
    li.appendChild(autor);

    listBook.appendChild(li);

}

db.collection('bd3-app-libri-daniel')
    .get()
    .then((snapshot)=>{
        // console.log(snapshot.docs)
        snapshot.docs.forEach(
            
            doc =>{
                console.log(doc.data())
                renderList(doc.data())
            }
            
        )
    })

    // INSERÇÃO DE DADOS

const form = document.querySelector("#add-book-form");

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    alert('Formulário funcionando!')
})