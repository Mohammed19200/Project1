function backTOtop() {
  window.scrollTo(0, 0)
}

const homeh3 = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'UI UX Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

const abouth3 = new Typed('.multiple-text-about', {
  strings: ['Frontend Developer', 'UI UX Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

// 


// logo page
setTimeout(() => {
  document.querySelector("#logopage").style.display = "none"
}, 2000)

// link portfolio
function link() {
  window.open('https://www.figma.com/proto/Rjjz3hknx6PL4buHN5hK5M/Application%2C-Faculty-of-Mass-Communication%2C-Cairo-University-wireframe?type=design&node-id=0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A815&show-proto-sidebar=1', '_blank');
}
function link2() {
  window.open("https://courseplatform19.netlify.app/", '_blank');
}
function link3() {
  window.open("https://drive.google.com/file/d/1hWrpFDtP7zEFRKK-6gBpNWZnD4Tf1GuJ/view?usp=drive_link", '_blank');
}

// form validation
function validateForm() {
  const form = document.querySelector('form');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const errorMessage = document.getElementById('error-message');
  const subject = document.getElementById('subject').value;

  // validation for NAME format
  if (name === '' || name == null) {
    errorMessage.innerHTML = 'please fill name again';
    return false;
  }
  //  validation for SUBJECT format
  if (subject === '' || subject == null) {
    errorMessage.innerHTML = 'please fill subject again';
    return false;
  }

  //  validation for email format
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email) || email === '' || email == null) {
    errorMessage.innerHTML = 'Invalid email address.';
    return false;
  }

  //  validation for phone format
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone) && phone.length < 0 || phone === '' || phone == null || isNaN(phone)) {
    errorMessage.innerHTML = 'Invalid phone number (10 digits only).';
    return false;
  }
  //  validation for MESSAGE format
  if (message === '' || message == null) {
    errorMessage.innerHTML = 'please fill message again';
    return false;
  }

  // If all validations pass,submit the form.
  errorMessage.innerHTML = '';
  alert('Form submitted successfully!');
  storedata()
  form.reset();

}


let namee = document.querySelector('#name');
let emaill = document.getElementById('email');
let phonee = document.getElementById('phone');
let messagee = document.getElementById('message');
let subjectt = document.getElementById('subject');
//  let store ={
//    users : []
// }
let store = JSON.parse(localStorage.getItem("store"))
function storedata() {
  let userobj = {
    username: namee.value,
    email: emaill.value,
    mobilenumber: phonee.value,
    subjectmessage: subjectt.value,
    message: messagee.value
  };
  store.users.push(userobj);
  localStorage.setItem("store", JSON.stringify(store))
}