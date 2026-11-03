'use strict';

let idioma = prompt("Escoge un idioma (ES, EN, RU):")

// Cada idioma tiene su propio diccionario de textos.
const textos = {
  es: {
    etiquetaIdioma: 'Idioma',
    titulo: 'Descubre Tenerife',
    descripcion: 'Disfruta de cinco días entre playas, volcanes y pueblos con encanto.',
    etiquetaDestino: 'Destino',
    destino: 'Tenerife, Islas Canarias',
    etiquetaSalida: 'Fecha de salida',
    etiquetaDuracion: 'Duración',
    duracion: '5 días',
  },
  en: {
    etiquetaIdioma: 'Language',
    titulo: 'Discover Tenerife',
    descripcion: 'Enjoy five days of beaches, volcanoes and charming villages.',
    etiquetaDestino: 'Destination',
    destino: 'Tenerife, Canary Islands',
    etiquetaSalida: 'Departure date',
    etiquetaDuracion: 'Duration',
    duracion: '5 days',
  },
  ru: {
    etiquetaIdioma: 'Язык',
    titulo: 'Откройте для себя Тенерифе',
    descripcion: 'Пять дней среди пляжей, вулканов и уютных городков.',
    etiquetaDestino: 'Направление',
    destino: 'Тенерифе, Канарские острова',
    etiquetaSalida: 'Дата отправления',
    etiquetaDuracion: 'Продолжительность',
    duracion: '5 дней',
  }
};

// Datos del viaje independientes de los textos traducidos.
// Importes de ejemplo fijados para cada mercado; NO son conversiones en tiempo real.
const viaje = {
  salida: new Date(2027, 5, 15), // 15 de junio de 2027 (mes 5 = junio)
  precios: {
    es: { valor: 425, moneda: 'EUR', locale: 'es-ES' },
    en: { valor: 495, moneda: 'USD', locale: 'en-US' },
    ru: { valor: 45000, moneda: 'RUB', locale: 'ru-RU' }
  }
};

function mostrarIdioma(idioma) {
for(const lenguaje in textos){
    if('EN'.includes(lenguaje)) {
      const des = document.getElementById(titulo).textContent;
    }
}
}


