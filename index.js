const articles = Array.from(document.querySelectorAll("article"));
const main = document.querySelector(".articles");

// article background slide speed
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
      distance / ratio / 10
    }s linear infinite`;
  } else {
    const distance = articleWidth * (ratio - 1);
    article.style.backgroundSize = "auto 100%";
    article.style.animation = `scrollX ${distance * 3}s linear infinite`;
  }
});

// blank space
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
