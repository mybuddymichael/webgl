(function() {
  var $, Cube, animate, gld, init, render, root, statsInit;

  root = this;

  gld = root.gld = {};

  $ = root.Zepto;

  $(function() {
    init();
    statsInit();
    return animate();
  });

  init = function() {
    gld.scene = new THREE.Scene();
    gld.camera = new THREE.PerspectiveCamera(75, $(window).width() / $(window).height(), 1, 10000);
    gld.camera.position.z = 1000;
    gld.scene.add(gld.camera);
    gld.cube = new Cube({
      x: 100,
      y: 200,
      z: 300,
      color: 0xffffff,
      wireframe: true
    });
    gld.scene.add(gld.cube.mesh);
    gld.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    gld.renderer.setSize($(window).width(), $(window).height());
    return $('body').append(gld.renderer.domElement);
  };

  animate = function() {
    gld.stats.begin();
    requestAnimationFrame(animate);
    render();
    return gld.stats.end();
  };

  render = function() {
    gld.cube.mesh.rotation.x += 0.005;
    gld.cube.mesh.rotation.y += 0.01;
    return gld.renderer.render(gld.scene, gld.camera);
  };

  statsInit = function() {
    var stats;
    stats = gld.stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    return $('body').append(stats.domElement);
  };

  Cube = (function() {

    Cube.name = 'Cube';

    function Cube(params) {
      this.geometry = new THREE.CubeGeometry(params.x, params.y, params.z);
      this.material = new THREE.MeshBasicMaterial({
        color: params.color,
        wireframe: params.wireframe
      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    return Cube;

  })();

}).call(this);
