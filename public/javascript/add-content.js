//system does not know if logged in or not, add something for authorization


async function newFormHandler(event) {
    event.preventDefault();
  //name here belongs to your input or text area name declaration from handlebars

    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('input[name="content"]').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        //here you can add more things you need to display
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
  }
  //this ID belongs to button, please select your ID
  document.querySelector('.post-btn').addEventListener('submit', newFormHandler);
  