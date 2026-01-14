const url = 'https://jsonplaceholder.typicode.com/users';
const loadUsersBtn = document.getElementById("loadUsersBtn");
const messageLoad = document.getElementById("messageLoad");
const usersList = document.getElementById("usersList");

loadUsersBtn.addEventListener("click", loadUsers);

async function loadUsers() {
    messageLoad.textContent = "Carregando usuários...";
    usersList.innerHTML = "";

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error("Erro ao buscar usuários");
        }

        const users = await response.json();

        renderUsers(users);
        messageLoad.textContent = "";

    } catch (error) {
        messageLoad.textContent = "Erro ao carregar usuários. Tente novamente.";
    }
}

function renderUsers(users) {
    users.forEach(user => {
        const listItem = document.createElement("li");

        listItem.className = "p-4 border border-slate-200 rounded-lg";

        listItem.innerHTML = `
            <p class="font-semibold text-slate-800">Nome: ${user.name}</p>
            <p class="text-slate-700">Email: ${user.email}</p>
            <p class="text-slate-600">Cidade: ${user.address.city}</p>
        `;

        usersList.appendChild(listItem);
    });
}
