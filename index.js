const articles = Array.from(document.querySelectorAll("article"));
const main = document.querySelector(".articles");

// article background slide speed
const slideArticle = (articles) => {
  articles.forEach((article) => {
    const articleWidth = article.clientWidth;
    const background = article.style.backgroundImage;

    const image = new Image();
    image.src = background.replace(/url\((['"])?(.*?)\1\)/gi, "$2");
    const width = image.width;
    const height = image.height;
    const ratio = width / height;

    if (width < height) {
      const distance = height - articleWidth;
      article.style.backgroundSize = "100% auto";
      article.style.animation = `scrollY ${
        distance / ratio / 8
      }s linear infinite`;
    } else {
      const distance = articleWidth * (ratio - 1);
      article.style.backgroundSize = "auto 100%";
      article.style.animation = `scrollX ${distance * 3}s linear infinite`;
    }
  });
};

// slideArticle(articles);

// blank space
const blankSpace = (articles) => {
  const remainder = articles.length % 3;
  if (remainder != 0) {
    const blank = document.createElement("article");
    blank.classList.add("blank");
    const blankOther = document.createElement("article");
    blankOther.classList.add("blank");
    if (remainder == 1) {
      main.appendChild(blank);
      main.appendChild(blankOther);
    } else {
      main.appendChild(blank);
    }
  }
};

// blankSpace(articles);

// window reload once
const reloadWindow = () => {
  window.onload = function () {
    if (location.href.indexOf("reloaded") == -1)
      location.replace(location.href + "?reloaded");
  };
};

fetch(articles)
  .then(slideArticle(articles))
  .then(blankSpace(articles))
  .then(reloadWindow());
