const addImageButton = document.getElementById("js-image-add-btn");
const removeImageButton = document.getElementById("js-image-remove-btn");
const imageContainerElement = document.getElementById("js-image-container");

const imageURLs = Array.from(
   new Set([
      "https://picsum.photos/id/237/200/300",
      "https://picsum.photos/id/123/200/300",
      "https://picsum.photos/id/337/200/300",
      "https://picsum.photos/id/37/200/300",
      "https://picsum.photos/seed/picsum/200/300",
      "https://picsum.photos/200/300?grayscale"
   ])
);

function addImage() {
   if (!imageURLs.length) return alert("Stokta resim kalmadı!");

  const index = Math.floor(Math.random() * imageURLs.length);

   imageContainerElement.insertAdjacentHTML(
      "afterbegin",
      `<img id="ruloresim" src="${imageURLs[index]}" />`
   );
   imageURLs.splice(index, 1);
}

function removeImage () {
   const {children} = imageContainerElement
   if(!children.length) return alert('Hiç resim eklemediniz! Resim ekleye basıp bir resim ekleyin');
   const [firstImage] = children
   imageURLs.push(firstImage.src)
   firstImage.remove()
}

addImageButton.addEventListener("click", addImage);
removeImageButton.addEventListener('click', removeImage)