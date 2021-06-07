async function editFormHandler(event) {
    event.preventDefault();
    console.log('this works');
    const currentUrl = window.location.href;
    const id = currentUrl.split('/')[currentUrl.split('/').length - 1];
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);