// ===============================
// Stage 10: Interactivity Script
// ===============================

// 1️⃣ Example: Animation trigger using keyframes-like JS animation
// This animates the site logo when the page loads
window.addEventListener("load", () => {
  const logo = document.querySelector(".site-logo");
  if (logo) {
    logo.style.transition = "transform 1s ease, opacity 1s ease";
    logo.style.transform = "rotate(360deg)";
    logo.style.opacity = "1";
  }
});

// 2️⃣ Example: Using an Array, Loop, and Condition
// Display random motivational messages in the console (or alert)
const messages = [
  "Keep watching and enjoy anime!",
  "Believe in yourself like Naruto!",
  "Power up like Goku!",
  "Stay calm and binge watch!",
  "Adventure awaits!"
];

function showMessage() {
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].includes("anime")) {
      console.log("🎬 " + messages[i]); // logs only messages with the word 'anime'
    }
  }
}
showMessage();

// 3️⃣ Example: Object and Method
// Creating an anime object that holds info and has a method to describe itself
const animeCharacter = {
  name: "Tanjiro Kamado",
  anime: "Demon Slayer",
  skill: "Water Breathing",
  describe: function() {
    console.log(`${this.name} from ${this.anime} uses ${this.skill}!`);
  }
};

// Call the method automatically
animeCharacter.describe();

// 4️⃣ Bonus Interaction Example (Condition + DOM)
// If user clicks the footer, display a message
const footer = document.querySelector(".site-footer");
if (footer) {
  footer.addEventListener("click", () => {
    alert("Thanks for visiting Kitsune Anime!");
  });
}
