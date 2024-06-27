const characters = [
  {
    characterName: "Doraemon",
    imgUrl:
      "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/5616-831390819.jpg",
  },
  {
    characterName: "Dorami",
    imgUrl:
      "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/5457-1616752134.jpg",
  },
  {
    characterName: "Shizuka Minamoto",
    imgUrl:
      "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/5457-1631309619.jpg",
  },
  {
    characterName: "Jaiko Goda",
    imgUrl:
      "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/5457-1018179253.jpg",
  },
  {
    characterName: "Nobita Nobi",
    imgUrl:
      "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/5616-1132888231.jpg",
  },
  {
    characterName: "Miyoko Mangetsu",
    imgUrl:
      "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/5457-1985543896.jpg",
  },
  {
    characterName: "Suneo Honekawa",
    imgUrl:
      "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/5616-726425001.jpg",
  },
  {
    characterName: "Hidetoshi Dekisugi",
    imgUrl:
      "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/5457-75232785.jpg",
  },
  {
    characterName: "Nobisuke Nobi",
    imgUrl:
      "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/5457-155570246.jpg",
  },
  {
    characterName: "Tamako Nobi",
    imgUrl:
      "https://ami.animecharactersdatabase.com/uploads/chars/thumbs/200/5457-1058475151.jpg",
  },
];

const charaterImg = document.getElementsByClassName("character-img")[0];
const charactersName = document.getElementsByClassName("character-name")[0];
const characterGenerator =
  document.getElementsByClassName("charater-generator")[0];
const characterBtn = document.getElementsByClassName("btn")[0];

let index = 0;

function changeCharacter() {
  const { characterName, imgUrl } = characters[index];
  charaterImg.src = imgUrl;
  charactersName.innerText = characterName;
  characterGenerator.classList.remove("active")
  index++;
  if (index === characters.length) {
    index = 0;
  }
}
characterBtn.addEventListener("click", changeCharacter);
