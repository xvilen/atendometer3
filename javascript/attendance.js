let camera_button = document.getElementById("start-camera");
// let video = document.querySelector("#video ");
let click_button = document.getElementById("click-photo");
// let canvas = document.querySelector("#canvas ");
function myFunction(x) {
    x.classList.toggle("change");
}
click_button.style.display='none'
let video = document.createElement('video')
video.autoplay = true
video.setAttribute('id','video')
video.setAttribute('class','video')
let canvas = document.createElement('canvas')
canvas.setAttribute('id','canvas')
canvas.setAttribute('class','video')

let removee = document.getElementById('replace')
camera_button.addEventListener("click", async function () {
    removee.replaceChild(video,removee.childNodes[1])
    camera_button.style.display='none'
    click_button.style.display='block'
  let stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: { width: video.width, height: video.height*1.3 }
    // video: { width: 390, height: 0 }
    
  });
  video.srcObject = stream;
});

click_button.addEventListener("click", function () {
    let removee = document.getElementById('replace')
    removee.replaceChild(canvas,removee.childNodes[1])
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  let image_data_url = canvas.toDataURL("image/jpeg");

  // data url of the image
localStorage.setItem('Attandance-immage',image_data_url)
  console.log(image_data_url);
});
