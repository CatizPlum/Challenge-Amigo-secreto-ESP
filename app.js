// Ejecutar el código después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ El DOM está completamente cargado.");

    // Declarar el array para almacenar los nombres
    let amigos = [];

    // Función para agregar un amigo
    function agregarAmigo() {
        // Capturar el valor del campo de entrada
        const input = document.querySelector('#amigo');
        const lista = document.querySelector('#listaAmigos'); // Asegúrate de que coincide con el HTML

        // Verificar si el input y la lista existen
        if (!input) {
            console.error("❌ Error: No se encontró el input con id 'amigo'");
            return;
        }
        if (!lista) {
            console.error("❌ Error: No se encontró el elemento con id 'listaAmigos'");
            return;
        }

        // Validar que el campo no esté vacío
        if (input.value.trim() === "") {
            alert("Por favor, inserte un nombre.");
            return; // Detener la ejecución si el campo está vacío
        }

        // Agregar el nombre al array
        amigos.push(input.value.trim());
        console.log("✅ Nombre agregado:", input.value.trim());
        console.log("📋 Lista de amigos:", amigos);

        // Añadir el nombre directamente a la lista en el HTML
        const li = document.createElement('li');
        li.innerHTML = input.value.trim();
        lista.appendChild(li);

        // Limpiar el campo de entrada
        input.value = "";

        console.log(`📌 Amigo añadido a la lista en el DOM.`);
    }

    // Función para sortear un amigo aleatorio
    function sortearAmigo() {
        // Obtener el contenedor donde se mostrará el resultado
        const resultado = document.querySelector('#resultado');
        const lista = document.querySelector('#listaAmigos'); // Para limpiar la lista del DOM

        // Validar que haya al menos un amigo en la lista
        if (amigos.length === 0) {
            if (resultado) {
                resultado.innerHTML = "Introduce a tus amigos por favor";
            }
            console.warn("⚠️ No hay amigos para sortear.");
            return; // Detener la ejecución si el array está vacío
        }

        // Generar un índice aleatorio entre 0 y la longitud del array
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtener el nombre sorteado
        const amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el nombre sorteado en el HTML
        if (resultado) {
            resultado.innerHTML = ` El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
        } else {
            console.error("❌ Error: No se encontró el elemento con id 'resultado'.");
        }

        // Limpiar la lista visible de amigos (sin borrar el array)
        if (lista) {
            lista.innerHTML = "";
        }

        console.log("🎯 Amigo sorteado:", amigoSorteado);
    }

    // Hacer las funciones accesibles globalmente
    window.agregarAmigo = agregarAmigo;
    window.sortearAmigo = sortearAmigo;
});
