const items = document.querySelector('.items');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submitBtn');
let toBeEdited = '';
let update = false;

const addItem = () => {
  const inputValue = input.value;
  if (!inputValue) {
    input.focus();
    return;
  }
  const item = createItem(inputValue);
  items.appendChild(item);
  input.value = '';
  input.focus();
};

const updateItem = () => {
  const inputValue = input.value;
  if (!inputValue) {
    input.focus();
    return;
  }
  toBeEdited.children[0].children[0].innerText = inputValue;
  input.value = '';
  input.focus();
  toBeEdited = '';
  submitBtn.innerText = 'submit';
};

let id = 0;
let jd = 0;
const createItem = (value) => {
  const itemRow = document.createElement('li');
  itemRow.className = 'itemRow';
  itemRow.setAttribute('data-del', id);
  itemRow.setAttribute('data-edit', jd);
  itemRow.innerHTML = `<div class="item">
                        <span class="span">${value}</span>
                        <div class="button-group">
                          <button class="editBtn">
                            <i class="fas fa-edit" data-edit=${jd}></i>
                          </button>
                          <button class="deleteBtn">
                            <i class="fas fa-trash" data-del=${id}></i>
                          </button>
                        </div>
                      </div>`;
  id++;
  jd++;
  return itemRow;
};

submitBtn.addEventListener('click', () => {
  if (update) {
    updateItem();
    update = false;
  } else {
    addItem();
  }
});

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    if (update) {
      updateItem();
      update = false;
    } else {
      addItem();
    }
  }
});

items.addEventListener('click', (event) => {
  const id = event.target.dataset.del;
  const jd = event.target.dataset.edit;
  if (id) {
    const toBeDeleted = document.querySelector(`.itemRow[data-del="${id}"]`);
    toBeDeleted.remove();
  }
  if (jd) {
    toBeEdited = document.querySelector(`.itemRow[data-edit="${jd}"]`);
    span = toBeEdited.children[0].children[0];
    update = true;
    submitBtn.innerText = 'update';
    input.value = span.innerText;
    input.innerText = input.value;
  }
});
