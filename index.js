const articles = Array.from(document.querySelectorAll("article"));
const vw = window.innerWidth;

articles.forEach((article) => {
  const background = article.style.backgroundImage;
  const image = new Image();
  image.src = background.replace(/url\((['"])?(.*?)\1\)/gi, "$2");
  const width = image.width;
  const height = image.height;
  console.log(width, height);
  if (width < height) {
    const h = height - 0.3 * vw;
    article.style.backgroundSize = "100% auto";
    article.style.animation = `scrollY ${h / 100}s linear infinite`;
  } else {
    article.style.backgroundSize = "auto 100%";
    article.style.animation = `scrollX ${30000 / height}s linear infinite`;
  }
});
