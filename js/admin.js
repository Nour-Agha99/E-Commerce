let search = document.querySelector(".search");

search.addEventListener("input", (alpha) => {
  document.querySelector("main").textContent = "";
  local = localStorage.getItem("customer");
  doArray = JSON.parse(localStorage.getItem("customer"));
  let arrayNo = [];
  for (let i = 0; i < doArray.length; i++) {
    if (doArray[i]["name"].includes(document.querySelector(".search").value)) {
      arrayNo.push(doArray[i]);
    }
  }
  for (let i = 0; i < arrayNo.length; i++) {
    addProductToPage(
      arrayNo[i].name,
      arrayNo[i].img,
      arrayNo[i].price,
      arrayNo[i].category
    );
  }
});

if (localStorage.getItem("customer")) {
  let doArray = localStorage.getItem("customer");
  ctArray = JSON.parse(doArray);
  ctArray.forEach((b) => {
    namePro = b.name;
    imgSrc = b.img;
    price = b.price;
    category = b.category;
    addProductToPage(namePro, imgSrc, price, category);
  });
}
document.addEventListener("click", (alpha) => {
  namePro = document.querySelector(".nameProduct").value;
  imgSrc = document.querySelector(".photoProduct").value;
  price = document.querySelector(".priceProduct").value;
  category = document.querySelector(".category").value;

  if (alpha.target.classList.contains("delBtn")) {
    alpha.target.parentElement.remove();
  }

  // if inputs not empty will add product by values
  if (
    alpha.target.className == "add" &&
    namePro.trim() != "" &&
    imgSrc.trim() != "" &&
    price.trim() != ""
  ) {
    addProductToPage(namePro, imgSrc, price, category);

    document.querySelector(".nameProduct").value = "";
    document.querySelector(".photoProduct").value = "";
    document.querySelector(".priceProduct").value = "";
    document.querySelector(".category").value = "";
  }

  if (alpha.target.classList.contains("fa-pen-to-square")) {
    if (alpha.target.classList.contains("fa-check")) {
      document.querySelectorAll("h4").forEach((name) => {
        name.setAttribute("contenteditable", false);
      });
      document.querySelectorAll(".price").forEach((name) => {
        name.setAttribute("contenteditable", false);
      });
    } else {
      document.querySelectorAll("h4").forEach((name) => {
        name.setAttribute("contenteditable", true);
      });
      document.querySelectorAll(".price").forEach((name) => {
        name.setAttribute("contenteditable", true);
      });
    }
    alpha.target.classList.toggle("fa-check");
  }
  checkToLocal();
});

function addProductToPage(namePro, imgSrc, price, category) {
  let main = document.querySelector("main");
  let divBox = document.createElement("div");
  divBox.className = "box";

  let imgEle = document.createElement("img");
  imgEle.src = imgSrc;

  let divImgDisc = document.createElement("div");
  divImgDisc.className = "img-discription";

  let h4Ele = document.createElement("h4");
  h4Ele.setAttribute("contenteditable", false);
  h4Ele.textContent = namePro;

  let priceDiv = document.createElement("div");
  priceDiv.className = "price";
  priceDiv.setAttribute("contenteditable", false);
  priceDiv.textContent = price;

  let deletBtn = document.createElement("i");
  deletBtn.className = "fa-solid fa-trash-can delBtn";

  let cate = document.createElement("div");
  cate.className = "cate";
  cate.textContent = category;

  divBox.appendChild(imgEle);
  divImgDisc.appendChild(h4Ele);
  divImgDisc.appendChild(priceDiv);
  divBox.appendChild(divImgDisc);
  divBox.appendChild(deletBtn);
  divBox.appendChild(cate);
  main.appendChild(divBox);
}
 
function checkToLocal() {
  let boxes = Array.from(document.querySelectorAll(".box"));
  let boxesArray = [];
  boxes.forEach((box) => {
    boxesArray.push({
      name: box.children[1].children[0].textContent,
      img: box.firstChild.src,
      price: box.children[1].children[1].textContent,
      category: box.lastChild.textContent,
    });
  });
  localStorage.setItem("customer", JSON.stringify(boxesArray));
}
