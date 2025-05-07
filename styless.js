const contacts = [];
const maxContacts = 7;

function updateContactsDisplay() {
    document.getElementById('contactsList').innerHTML = contacts.join(' ');
}

function addContact() {
    const name = document.getElementById('nameInput').value.trim();
    
    if (name === '') {
        alert('Please enter a name');
        return;
    }
    
    if (contacts.length >= maxContacts) {
        contacts.shift();
    }
    
    contacts.push(name);
    document.getElementById('nameInput').value = '';
    updateContactsDisplay();
}

function removeContact() {
    if (contacts.length > 0) {
        contacts.pop();
        updateContactsDisplay();
    } else {
        alert('No contacts to remove');
    }
}

updateContactsDisplay();