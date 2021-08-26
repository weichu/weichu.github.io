var images = [
  "assets/images/photo.jpg",
  "assets/images/photo.png"
];
function choosePicture()
{
    var x = Math.floor(images.length*Math.random());
    document.getElementById('random-image').src=images[x];
}
