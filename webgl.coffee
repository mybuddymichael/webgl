root = this

gld = root.gld = {}

$ = root.Zepto

$ ->
  init()
  statsInit()
  animate()

init = ->
  gld.scene = new THREE.Scene()
  gld.camera = new THREE.PerspectiveCamera 75,
    $(window).width()/$(window).height(), 1, 10000

  gld.camera.position.z = 1000

  gld.scene.add gld.camera

  gld.cube = new Cube x: 100, y: 200, z: 300, color: 0xffffff, wireframe: true

  gld.scene.add gld.cube.mesh

  gld.renderer = new THREE.WebGLRenderer antialias: true
  gld.renderer.setSize $(window).width(), $(window).height()

  $('body').append gld.renderer.domElement

animate = ->
  gld.stats.begin()
  requestAnimationFrame animate
  render()
  gld.stats.end()

render = ->
  gld.cube.mesh.rotation.x += 0.005
  gld.cube.mesh.rotation.y += 0.01

  gld.renderer.render gld.scene, gld.camera

statsInit = ->
  stats = gld.stats = new Stats()
  stats.setMode 0
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.left = '0px'
  stats.domElement.style.top = '0px'

  $('body').append stats.domElement

class Cube
  # params - An Object containing parameters passed to new()
  #          x - The width of the cube.
  #          y - The height of the cube.
  #          z - The depth of the cube.
  #          color - The hex number color.
  #          wireframe - A boolean for whether to draw it as a
  #            wireframe.
  constructor: (params) ->
    @geometry = new THREE.CubeGeometry params.x, params.y, params.z
    @material = new THREE.MeshBasicMaterial
      color: params.color, wireframe: params.wireframe
    @mesh = new THREE.Mesh @geometry, @material

