const authorInput = document.querySelector('#author');
const commentInput = document.querySelector('#comment');
const submitButton = document.querySelector('#submitButton');

const   commentContainer = document.querySelector('.allcomment-container')

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
    authorInput.value = '';
    commentInput.value = '';

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
    timeStamp.textContent = timeStampValue;

    const comment = document.createElement('p');
    comment.textContent = commentValue;

    divComment.append(divAuthorContainer, comment);
    divAuthorContainer.append(avatar, divAuthorInformation);
    divAuthorInformation.append(userName, timeStamp );
    commentContainer.append(divComment);
}

submitButton.addEventListener('click', addComment);



