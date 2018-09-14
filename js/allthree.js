let canvas = document.getElementById('myCanvas');

var renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true});
renderer.setClearColor(0x0000ff);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

//CAMERA & SCENE
let camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 3000);
let scene  = new THREE.Scene();

//LIGHTS
let light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);
let light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);

//GEOMETRY
let geometry = new THREE.CubeGeometry(100, 100, 100);

//MATERIAL
let material = new THREE.MeshLambertMaterial({
  color:0x0000ff,
});
let mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0,0,-500);
scene.add(mesh);

//LOADER
// let loader = new THREE.ObjectLoader();
//
// loader.load('../skull.json', function(object) {
//   scene.add(object)
// });


// animation
requestAnimationFrame(render);

$("body").mousemove(function(e) {

  let mouseX = e.pageX - window.innerWidth/2;
  let mouseY = e.pageY - window.innerHeight/2;

  // mesh.rotation.x = 0.005*(mouseY);
  // mesh.rotation.y = 0.005*(mouseX);


});

function render() {

  setTimeout(function() {
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
  },1000 );


  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

$("body").mouseleave(function() {

    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    // requestAnimationFrame(render);
    // renderer.render(scene, camera);
});
