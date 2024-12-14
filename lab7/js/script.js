document.getElementById("apply1").addEventListener("click", function () {
  const bg1 = document.getElementById("bg1").value;
  const margin1 = document.getElementById("margin1").value;
  const width1 = document.getElementById("width1").value;
  const height1 = document.getElementById("height1").value;
  const borderColor1 = document.getElementById("borderColor1").value;
  const borderWidth1 = document.getElementById("borderWidth1").value;
  const content1 = document.getElementById("content1").value;

  const block1 = document.querySelector(".block1");

  applyStyles.call(block1, {
    bg: bg1,
    margin: margin1,
    width: width1,
    height: height1,
    borderColor: borderColor1,
    borderWidth: borderWidth1,
    content: content1,
  });
});

document.getElementById("apply2").addEventListener("click", function () {
  const bg2 = document.getElementById("bg2").value;
  const margin2 = document.getElementById("margin2").value;
  const width2 = document.getElementById("width2").value;
  const height2 = document.getElementById("height2").value;
  const borderColor2 = document.getElementById("borderColor2").value;
  const borderWidth2 = document.getElementById("borderWidth2").value;
  const content2 = document.getElementById("content2").value;

  const block2 = document.querySelector(".block2");

  applyStyles.call(block2, {
    bg: bg2,
    margin: margin2,
    width: width2,
    height: height2,
    borderColor: borderColor2,
    borderWidth: borderWidth2,
    content: content2,
  });
});

function applyStyles({
  bg,
  margin,
  width,
  height,
  borderColor,
  borderWidth,
  content,
}) {
  this.style.backgroundImage = bg;
  this.style.margin = margin;
  this.style.width = width;
  this.style.height = height;
  this.style.borderColor = borderColor;
  this.style.borderWidth = borderWidth;
  this.style.borderStyle = "solid";
  this.innerHTML = content;
}
