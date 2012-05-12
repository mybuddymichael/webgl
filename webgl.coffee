mesh =
scene =
camera =
renderer =
null

init = ->
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera 75,
      window.innerWidth / window.innerHeight, 1, 10000
  camera.position.z = 1000
  scene.add camera

  geometry = new THREE.CubeGeometry 200, 200, 200
  material = new THREE.MeshBasicMaterial {color: 0xff0000, wireframe: true}

  mesh = new THREE.Mesh geometry, material
  scene.add mesh

  renderer = new THREE.WebGLRenderer()
  renderer.setSize window.innerWidth, window.innerHeight

  document.body.appendChild renderer.domElement

animate = ->
  requestAnimationFrame animate
  render()

render = ->
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.02

  renderer.render scene, camera

init()
animate()
