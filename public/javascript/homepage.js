function newPostHandler(event) {
    event.preventDefault();
    document.location.replace('/createpost');
}

document.querySelector('#create-new').addEventListener('click', newPostHandler);