// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// 1️⃣ Array para almacenar los nombres
let amigos = [];

// 2️⃣ Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Validar que no esté repetido
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar input
    input.value = "";

    // Actualizar lista en pantalla
    actualizarLista();
}

// 3️⃣ Función para actualizar la lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
// 4️⃣ Función para sortear un amigo y mostrar el resultado
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validaciones básicas
    if (!Array.isArray(amigos) || amigos.length === 0) {
        resultado.innerHTML = "<li>Primero agrega al menos un nombre.</li>";
        return;
    }

    // Si quieres exigir mínimo 2 para que tenga sentido el sorteo, descomenta:
    // if (amigos.length < 2) {
    //     resultado.innerHTML = "<li>Agrega al menos dos nombres para sortear.</li>";
    //     return;
    // }

    // Elegir un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const seleccionado = amigos[indice];

    // Mostrar el resultado
    resultado.innerHTML = ""; // limpia resultados previos
    const li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${seleccionado}`;
    resultado.appendChild(li);
}
