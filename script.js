// Elements
const form = document.querySelector('.todo-form');
const titleInput = document.querySelector('.todo-title');
const descInput = document.querySelector('.todo-desc');
const categorySelect = document.querySelector('.todo-category');
const todoList = document.querySelector('.todo-list');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Add task
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const desc = descInput.value.trim();
  const category = categorySelect.value;

  if (!title) return;

  const li = document.createElement('li');
  li.innerHTML = `<strong>${title}</strong> - ${desc} <span class="category-badge category-${category}">${category}</span>`;

  // Toggle complete on click
  li.addEventListener('click', () => li.classList.toggle('completed'));

  // Delete on double click
  li.addEventListener('dblclick', () => {
    if (confirm('Delete this task?')) li.remove();
  });

  todoList.appendChild(li);

  // Clear inputs
  titleInput.value = '';
  descInput.value = '';
});

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});