const authorInput = document.querySelector('#author');
const commentInput = document.querySelector('#comment');
const submitButton = document.querySelector('#submitButton');
const userImgInput = document.querySelector('#user-imgs');

const   commentContainer = document.querySelector('.allcomment-container')

// CLASE
// const uploadForm = document.querySelector("#user-url")

// const handleUploadForm = (e) => {
//     e.preventDefault();
//     const imageUrl = document.querySelector('#upload-form input')
//     addCard(imageUrl)
// }
// const addImg = (url) => {
//     const container = document.querySelector(".container)
//     const cards = document.querySelector(".card")
//     while(container.firstChild){
//         container.firstChild.remove
//     }
//     container.insertAdjacentElement('beforeend',  )
// }

// uploadForm.addEventListener('submit', (e) => handleUploadForm(e))

//<div class="comment-container">
    // <div class="author-container">
        // <img src="imgs/Profile-picture-example.jpg" alt="profile picture test">
        // <div class="author-information">
        //     <p>Nombre de usuario 2</p>
        //     <p>fecha de publicación y hora</p>
        // </div>
    // </div>
    // <p>texto</p>
// </div>
const addComment = (event) => {
    event.preventDefault();

    const authorValue = authorInput.value;
    const commentValue = commentInput.value;
    const timeStampValue = new Date();
    const imgUrl = userImgInput.files[0];

    authorInput.value = '';
    commentInput.value = '';

    if (!commentValue && !imgUrl) {
        alert("¡Error! No hay nada que publicar. Revise nuevamente.");
        return;
    }

    const divComment = document.createElement('div');
    divComment.classList.add('comment-container');
    
    const divAuthorContainer = document.createElement('div');
    divAuthorContainer.classList.add('author-container')
    
    const avatar = document.createElement('img');
    avatar.src = 'https://api.dicebear.com/9.x/thumbs/svg?seed=' + authorValue;
    
    const divAuthorInformation = document.createElement('div');
    divAuthorInformation.classList.add('author-information');
    
    const userName = document.createElement('p');
    userName.textContent = authorValue;

    const timeStamp = document.createElement('p');
    timeStamp.textContent = timeStampValue.toLocaleString();

    const divTextImg = document.createElement('div');
    divTextImg.classList.add('textImg-container');

    const comment = document.createElement('p');
    comment.textContent = commentValue;

    let commentImg;
    if (imgUrl) {
        const imageURL = URL.createObjectURL(imgUrl);
        commentImg = document.createElement('img');
        commentImg.src = imageURL;
    }

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Eliminar';

    deleteButton.addEventListener('click', () => {
        divComment.remove();
    });

    commentContainer.append(divComment);
    divComment.append(divAuthorContainer, divTextImg);
    divTextImg.append(comment);
    if (commentImg) {
        divTextImg.append(commentImg); 
    }
    divAuthorContainer.append(avatar, divAuthorInformation);
    divAuthorInformation.append(userName, timeStamp, deleteButton);
}

submitButton.addEventListener('click', addComment);