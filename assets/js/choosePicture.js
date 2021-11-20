var images = [
  "assets/images/photo.jpg"
];
function choosePicture()
{
    var x = Math.floor(images.length*Math.random());
    document.getElementById('random-image').src=images[x];
}
