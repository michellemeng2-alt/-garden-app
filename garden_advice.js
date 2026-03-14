// Hardcoded values for the season and plant type
// Replace with prompt() to allow user interaction with season and plant type.
// Add .toLowerCase() to ensure case-insensitive input handling.
let season = prompt("What is the current season? (summer/winter/spring/autumn)").toLowerCase(); 
let plantType = prompt("What type of plant is it? (flower/vegetable)").toLowerCase(); 

// Use Functions to generate advice based on season and plant type
function getSeasonalAdvice(season) {
    let advice = "";
    if (season === "summer") {
        advice = "Water your plants regularly and provide some shade.\n";
    } else if (season === "winter") {
        advice = "Protect your plants from frost with covers.\n";
    } else {
        advice = "No specific advice for this season.\n";
    }
    return advice;
}

function getPlantAdvice(plantType) {
    let advice = "";
    if (plantType === "flower") {
        advice = "Use fertiliser to encourage blooms.";
    } else if (plantType === "vegetable") {
        advice = "Keep an eye out for pests!";
    } else {
        advice = "No advice for this type of plant.";
    } 
    return advice;
}

// Store advice in an object for multiple plants and seasons
// This allows for "Combined Advice" based on specific pairs
const adviceDatabase = {
    summer: {
        flower: "In the heat, flowers need extra potassium to survive the sun.",
        vegetable: "Summer veggies need deep watering at the roots to avoid wilt."
    },
    winter: {
        flower: "Keep winter blooms near south-facing windows if indoors.",
        vegetable: "Root vegetables can actually get sweeter after a light frost!"
    }
};

// Suggest plants that thrive in the given season.
function getSuggestions(season) {
    const suggestions = {
        summer: "Sunflowers, Tomatoes, and Peppers.",
        winter: "Kale, Garlic, and Pansies.",
        spring: "Tulips, Peas, and Lettuce.",
        autumn: "Mums, Pumpkins, and Spinach."
    };
    // Provide fallback to avoid undefined if the season is not in the suggestions object.
    return suggestions[season] || "hardy native shrubs.";
}

// --- OUTPUT SECTION ---

// Basic advice using Functions
console.log("--- Basic Advice ---");
console.log(getSeasonalAdvice(season) + getPlantAdvice(plantType));

// Detailed advice using the Object (if available)
console.log("--- Detailed Insight ---");
// Use && and to check if the season and plant type exist in the adviceDatabase before trying to access it, to avoid errors.
// Check season first then check plant type within that season to ensure we don't try to access a property of undefined.
if (adviceDatabase[season] && adviceDatabase[season][plantType]) {
    console.log(adviceDatabase[season][plantType]);
} else {
    console.log("No detailed entry found for this combination.");
}

// Seasonal Suggestion
console.log("--- Seasonal Suggestion ---");
console.log(`Since it's ${season}, try planting: ${getSuggestions(season)}`);