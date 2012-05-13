root = this

mesh =
scene =
camera =
renderer =
stats =
  null

$ = root.Zepto
height = $ -> $(window).height()
width = $ -> $(window).width()

init = ->
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera 75, 1, 1, 10000
  camera.position.z = 1000
  scene.add camera

  geometry = new THREE.CubeGeometry 200, 300, 100
  material = new THREE.MeshBasicMaterial color: 0xff0000, wireframe: true

  mesh = new THREE.Mesh geometry, material
  scene.add mesh

  renderer = new THREE.WebGLRenderer antialias: true
  renderer.setSize width, height

  $ -> $('body').append renderer.domElement

  setStats()

animate = ->
  stats.begin()
  requestAnimationFrame animate
  render()
  stats.end()

render = ->
  mesh.rotation.x += 0.005
  mesh.rotation.y += 0.01

  renderer.render scene, camera

setStats = ->
  stats = new Stats()
  stats.setMode 0
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.left = '0px'
  stats.domElement.style.top = '0px'

  $ -> $('body').append stats.domElement

init()
animate()
