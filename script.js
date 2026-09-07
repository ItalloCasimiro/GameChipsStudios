const header = document.querySelector("header");
const navList = document.querySelector("#PageIndex > ul");
const languageButton = document.querySelector(".Language");
const langList = document.querySelector("#LanguageIndex > ul");

var Year = new Date().getFullYear();
document.getElementById("CurrentYear").textContent = String(Year);

const pageMenu = document.querySelector("#PageIndex ul");
const menuButton = document.querySelector(".Menu");

document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        pageMenu.contains(event.target);

    const clickedMenuButton =
        menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
        pageMenu.classList.remove("active");
    }

    const clickedInsideLanguage =
        langList.contains(event.target);

    const clickedLanguageButton =
        languageButton.contains(event.target);

    if (!clickedInsideLanguage && !clickedLanguageButton) {
        langList.classList.remove("active");
    }

});

const translations = {
    pt: {
        navAbout: "Sobre",
        navGames: "Jogos",
        navTeam: "Equipe",
        navContact: "Contato",

        heroTitle: `Jogos que Marcam uma<br><span style="color: #72C4EC; text-shadow: 2px 2px 10px rgba(114, 196, 236, 0.5);">Geração</span>`,
        heroDescription: "Desenvolvendo Jogos Criativos com Inovação e Chips.",

        aboutTitle: "Sobre Nós",
        aboutText: "A Game Chip's Studios foi fundada em 2025 e nasceu de uma ideia de criar jogos únicos e experiências memoráveis, para deixar sua marca no mercado de jogos brasileiro. O estúdio busca desenvolver para os jogadores brasileiros e expandir para projetos internacionais.",

        gamesTitle: "Nossos Jogos",

        gameStatus: "EM DESENVOLVIMENTO",

        gameDescription: "Um roguelike de cartas 2D onde você utiliza dados, cartas e trapaças para completar contratos e alcançar jackpots cada vez maiores.",

        playButton: "Jogue na Itch.io",

        comingSoon: "EM BREVE",

        futureProjects: "Novos Projetos Vindo Aí",

        futureProjectsText: "Nossa jornada está sendo construída. Mais jogos chegarão no futuro.",

        teamTitle: "Nossa Equipe",

        roleFounder: "Fundador | Game Designer | Programador",

        founderDescription: "Fundador da Game Chip's Studios",

        contactTitle: "Fale Conosco",

        contactDescription: "Tem alguma dúvida sobre nossos jogos, encontrou um bug ou quer sugerir uma melhoria? Envie uma mensagem para nós e ouviremos você!",

        socialTitle: "Siga-nos nas Redes Sociais",

        footer: "Game Chip's Studios. Todos os direitos reservados."
    },

    en: {
        navAbout: "About",
        navGames: "Games",
        navTeam: "Team",
        navContact: "Contact",

        heroTitle: `Games That Build a<br><span style="color: #72C4EC; text-shadow: 2px 2px 10px rgba(114, 196, 236, 0.5);">Generation</span>`,
        heroDescription: "Creating Creative Games with Innovation and Chips.",

        aboutTitle: "About Us",
        aboutText: "Game Chip's Studios was founded in 2025 with a mission of creating unique games and memorable experiences, leaving its mark on the gaming industry. The studio aims to develop games for Brazilian players and expand to international projects.",

        gamesTitle: "Our Games",

        gameStatus: "IN DEVELOPMENT",

        gameDescription: "A 2D card roguelike where you use dice, cards and cheats to complete contracts and reach bigger jackpots.",

        playButton: "Play on Itch.io",

        comingSoon: "COMING SOON",

        futureProjects: "More Projects On Going",

        futureProjectsText: "Our journey is just beginning. More games are coming in the future.",

        teamTitle: "Our Team",

        founderRole: "Founder | Game Designer | Programmer",

        founderDescription: "Founder of Game Chip's Studios",

        contactTitle: "Contact Us",

        contactDescription: "Do you have questions about our games, found a bug, or want to suggest an improvement? Send us a message and we'll be happy to hear from you!",

        socialTitle: "Follow Us on Social Media",

        footer: "Game Chip's Studios. All rights reserved."
    }
};

function setLanguage(lang)
{
    const elements = document.querySelectorAll("[data-lang]");

    elements.forEach(element =>
    {
        const key = element.dataset.lang;

        if(translations[lang][key])
        {
            element.innerHTML = translations[lang][key];
        }
    });

    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () =>
{
    const savedLanguage =
        localStorage.getItem("language") || "pt";

    setLanguage(savedLanguage);

    const currentYear =
        document.getElementById("CurrentYear");

    if(currentYear)
    {
        currentYear.textContent =
            new Date().getFullYear();
    }
});

function toggleMenu() {
  navList.classList.toggle("active");
  langList.classList.remove("active");
}

function languageMenu() {
  langList.classList.toggle("active");
  navList.classList.remove("active");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.position = "sticky";
    header.style.zIndex = "1000";
    header.style.backgroundColor = "black";
    header.style.outlineStyle = "solid";
    header.style.outlineColor = "white";
  } else {
    header.style.position = "static";
    header.style.outlineStyle = "none";
    header.style.backgroundColor = "transparent";
  }
});
