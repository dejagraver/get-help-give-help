async function editFormHandler(event) {
  document.location.replace('/editpost');
}

async function deletePostHandler(event) {
  event.preventDefault();

  const currentUrl = window.location.href;
  const id = currentUrl.split('/')[currentUrl.split('/').length - 1];
  console.log(id);

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/getboard');
  }
  else {
    alert(response.statusText);
  }
}

document.querySelector('#editBtn').addEventListener('click', editFormHandler);
document.querySelector('#deleteBtn').addEventListener('click', deletePostHandler);
