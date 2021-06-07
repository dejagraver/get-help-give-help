async function editFormHandler(event) {
  event.preventDefault();

  const currentUrl = window.location.href;
  const id = currentUrl.split('/')[currentUrl.split('/').length - 1];

  document.location.replace(`/edit/${id}`);
}

async function deletePostHandler(event) {
  event.preventDefault();

  const currentUrl = window.location.href;
  const id = currentUrl.split('/')[currentUrl.split('/').length - 1];

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/');
  }
  else {
    alert(response.statusText);
  }
}

document.querySelector('#editBtn').addEventListener('click', editFormHandler);
document.querySelector('#deleteBtn').addEventListener('click', deletePostHandler);
