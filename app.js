
const submitBtn = document.getElementById('submit');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const checkbox = document.getElementById('checkbox');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');


const handleSubmit = () => {
    if(fname.value.length >=1 && lname.value.length >=1){
        submitBtn.disabled = false;
    }
}

function clearInputs(){
    fname.value = "";
    lname.value = "";
    textarea.value = "";
    checkbox.checked = false;
    email.style.display = 'none'
}

fname.addEventListener('change', handleSubmit);
lname.addEventListener('change', handleSubmit);

checkbox.addEventListener('click', () => {
  email.style.display = 'none' ? 'inline-block': 'none'
})

submitBtn.addEventListener('click', (e) => {
   
    e.preventDefault();
    const data = {  

          firstName: fname.value, 
          lastName: lname.value, 
          isSubscribed: checkbox.checked ? true: false, 
          email: checkbox.checked ? email.value : null, 
          comment: textarea.value
           
     };
        
        fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
          console.log('Success:', data);
          let text =    `Thanks for your submission ${data.firstName}`;
          document.getElementById('message').innerHTML = text;
     
            setTimeout(() => {
                const message = document.getElementById('message');
                message.style.display = "none";
              }, 5000); 

              clearInputs();
          })
          .catch((error) => {
            let text= "Oops something went wrong";
            document.getElementById('message').innerHTML = text;
            console.error('Error:', error);
          });

})




