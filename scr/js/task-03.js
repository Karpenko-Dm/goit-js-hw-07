const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryImages = document.querySelector('ul#gallery');
galleryImages.style.display = "flex";
  galleryImages.style.flexDirection = "column";
  galleryImages.style.listStyle = "none";
  

const imgListItem = ({ url, alt }) => {
    return `
<li class = "listItem">
<img src = ${url} alt = ${alt}  width ="500"></img>
</li>`;
};
const collectionImage = images.map(imgListItem).join("");

console.log(imgListItem);
gallery.insertAdjacentHTML('afterbegin', collectionImage);


