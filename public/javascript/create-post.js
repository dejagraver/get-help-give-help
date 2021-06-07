async function newPostHandler(event) {
    event.preventDefault();

    const category_id = document.querySelector('#boardSelect').value;
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    // const printObj = {
    //     board: boardOption,
    //     title: postTitle,
    //     content: postContent
    // };
    // console.log(printObj);
    const response = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
            category_id
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/')
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('#create-post-form').addEventListener('submit', newPostHandler);