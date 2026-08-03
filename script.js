// ================================
// K-pop Album Shop
// Main JavaScript
// ================================

// Current language
let currentLanguage = localStorage.getItem("language");

// Save language
function setLanguage(language) {

    localStorage.setItem("language", language);

    currentLanguage = language;

}

// Get language
function getLanguage() {

    return currentLanguage;

}

// Check first visit
function isFirstVisit() {

    return currentLanguage === null;

}

console.log("K-pop Album Shop Loaded");
