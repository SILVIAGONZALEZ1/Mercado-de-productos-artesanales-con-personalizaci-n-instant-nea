// Seleccionar elementos del DOM
const colorSelect = document.getElementById("colorSelect");
const textInput = document.getElementById("textInput");
const applyChangesButton = document.getElementById("applyChanges");
const customProduct = document.getElementById("customProduct");
const customText = document.getElementById("customText");

// Función para aplicar los cambios de personalización
function applyCustomization() {
    // Obtener el color seleccionado
    const selectedColor = colorSelect.value;
    // Obtener el texto personalizado
    const text = textInput.value;

    // Cambiar el color de fondo del producto
    customProduct.style.backgroundColor = selectedColor;
    // Cambiar el texto mostrado
    customText.textContent = text || "Texto personalizado";
}

// Evento para aplicar los cambios en tiempo real
applyChangesButton.addEventListener("click", applyCustomization);
