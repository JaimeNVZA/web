

//Carga de templates
function cargarTemplate(templateId) {
    const template = document.getElementById(templateId);
    const clone = document.importNode(template.content, true);
    document.getElementById("contenido-proyecto").appendChild(clone);
}

// Cargar contenido según el proyecto
const urlParams = new URLSearchParams(window.location.search);
const proyecto = urlParams.get("proyecto");

if (proyecto === "1") {
    cargarTemplate("template-proyecto1");
} else if (proyecto === "2") {
    cargarTemplate("template-proyecto2");
} else if (proyecto === "3") {
    cargarTemplate("template-proyecto3");
} else if (proyecto === "4") {
    cargarTemplate("template-proyecto4");
} else if (proyecto === "5") {
    cargarTemplate("template-proyecto5");
} else if (proyecto === "6") {
    cargarTemplate("template-proyecto6");
} else if (proyecto === "7") {
    cargarTemplate("template-proyecto7");
} else if (proyecto === "8") {
    cargarTemplate("template-proyecto8");
} else if (proyecto === "9") {
    cargarTemplate("template-proyecto9");
}