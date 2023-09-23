const todo = document.querySelector("#todo");
const addBtn = document.querySelector("#add");
const list = document.querySelector("#list");

addBtn.addEventListener("click", () => {
	const li = document.createElement("li");
	li.innerHTML = todo.value;
	li.classList.add("task");
	list.appendChild(li);
	todo.value = '';
});