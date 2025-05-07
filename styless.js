const contacts = [];

function renderList() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";
  contacts.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

function addContact() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") return;

  if (contacts.length >= 7) {
    contacts.shift(); 
  }
  contacts.push(name);
  renderList();
  document.getElementById("nameInput").value = "";
}

function removeContact() {
  if (contacts.length > 0) {
    contacts.pop();
    renderList();
  }
}