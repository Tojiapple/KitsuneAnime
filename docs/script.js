window.addEventListener("load", () => {
  const logo = document.querySelector(".site-logo");
  if (logo) {
    logo.style.transition = "transform 1s ease, opacity 1s ease";
    logo.style.transform = "rotate(360deg)";
    logo.style.opacity = "1";
  }
});

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
      console.log("🎬 " + messages[i]); 
    }
  }
}
showMessage();

const animeCharacter = {
  name: "Tanjiro Kamado",
  anime: "Demon Slayer",
  skill: "Water Breathing",
  describe: function() {
    console.log(`${this.name} from ${this.anime} uses ${this.skill}!`);
  }
};

animeCharacter.describe();

const footer = document.querySelector(".site-footer");
if (footer) {
  footer.addEventListener("click", () => {
    alert("Thanks for visiting Kitsune Anime!");
  });
}
