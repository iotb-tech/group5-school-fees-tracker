let children = [];

function loadChildren() {
  const stored = localStorage.getItem('children');
  children = stored ? JSON.parse(stored) : [];
}

function saveChildren() {
  localStorage.setItem('children', JSON.stringify(children));
}

function addChild(childObject) {
  children.push(childObject);
  saveChildren();
}

function deleteChild(id) {
  children = children.filter(c => c.id !== id);
  saveChildren();
  applyFilters();
}

function updateChild(id, updatedData) {
  const index = children.findIndex(c => c.id === id);
  if (index !== -1) {
    children[index] = { ...children[index], ...updatedData };
    saveChildren();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  loadChildren();
  initSearch();
  applyFilters();
});
