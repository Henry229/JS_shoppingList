const form = document.querySelector('.form');
const items = document.querySelector('.items');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submitBtn');
let toBeEdited = '';
let update = false;

const selectOption = (event) => {
  console.log('-----yogida4', update);
  if (update) {
    updateItem(event);
    update = false;
  } else {
    addItem(event);
  }
};

const addItem = (event) => {
  event.preventDefault();
  console.log(form.value);
  console.log(input.value);
  const inputValue = input.value;
  if (!inputValue) {
    input.focus();
    return;
  }
  console.log('####Yogida2', update);
  const item = createItem(inputValue);
  items.appendChild(item);
  input.value = '';
  input.focus();
};

const updateItem = (event) => {
  event.preventDefault();
  const inputValue = input.value;
  if (!inputValue) {
    input.focus();
    return;
  }
  console.log('****Yogida1', update);
  toBeEdited.children[0].children[0].innerText = inputValue;
  update = false;
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

form.addEventListener('submit', selectOption);
// update ? updateItem() : addItem
// update ? console.log('@@@updateItem') : addItem;
//   updateItem();
//   update = false;
// } else {
//   addItem();
// }
// });
// form.addEventListener('submit', () => {
//   console.log('****yogida1');
//   if (update) {
//     updateItem();
//     update = false;
//   } else {
//     addItem;
//   }
// });

// submitBtn.addEventListener('click', () => {
//   if (update) {
//     updateItem();
//     update = false;
//   } else {
//     addItem();
//   }
// });

// input.addEventListener('keyup', (event) => {
//   if (event.key === 'Enter') {
//     if (update) {
//       updateItem();
//       update = false;
//     } else {
//       addItem();
//     }
//   }
// });

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
    console.log('### update: ', update);
    submitBtn.innerText = 'update';
    input.value = span.innerText;
    input.innerText = input.value;
  }
});
