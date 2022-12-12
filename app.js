const submitBtn = document.getElementById('submit');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const checkbox = document.getElementById('checkbox');
const email = document.getElementById('email');

const handleSubmit = () => {
    if(fname.value.length >=1 && lname.value.length >=1){
        submitBtn.disabled = false;
    }
}

fname.addEventListener('click', handleSubmit);
lname.addEventListener('click', handleSubmit);

submitBtn.addEventListener('click', () => {
    alert(`My name is ${fname.value} ${lname.value}`)
})

checkbox.addEventListener('click', () => {
    email.style.display = 'none' ? 'inline-block': 'none'
})
