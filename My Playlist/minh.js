const list = document.querySelector('#book-list ul');
const forms = document.forms;
console.log(forms)
// delete books
list.addEventListener('click', function (e) {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
    alert("Bạn có chắc chứ")

  }
});

// add songs
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});