# Agencia de viajes · Tres idiomas

Proyecto solucionado para la UD3 de Desarrollo Web en Entorno Cliente.

## Uso

Abre `index.html` con Live Server (VS Code) y selecciona Español, English o Русский.
Los textos, la fecha y el precio cambian inmediatamente.

## Archivos

- `index.html`: estructura fija de la página y selector de idioma.
- `estilos.css`: estilos sencillos.
- `app.js`: diccionarios, datos del viaje y función `mostrarIdioma()`.

## Conceptos

Objetos/diccionarios de traducción, `document.getElementById()`, `textContent`,
`Intl.DateTimeFormat`, `Intl.NumberFormat`, `document.documentElement.lang` y evento `change`.

**Importante:** los importes EUR, USD y RUB son precios de ejemplo independientes para cada mercado.
No representan tipos de cambio actuales ni una conversión automática. No se necesita conexión a una API.

No se guardan preferencias; al recargar, el selector vuelve al español.
