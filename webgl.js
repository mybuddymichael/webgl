(function() {
  var animate, camera, init, mesh, render, renderer, scene, setStats, stats;

  mesh = scene = camera = renderer = stats = null;

  init = function() {
    var geometry, material;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    scene.add(camera);
    geometry = new THREE.CubeGeometry(200, 300, 100);
    material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    return setStats();
  };

  animate = function() {
    stats.begin();
    requestAnimationFrame(animate);
    render();
    return stats.end();
  };

  render = function() {
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    return renderer.render(scene, camera);
  };

  setStats = function() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    return document.body.appendChild(stats.domElement);
  };

  init();

  animate();

}).call(this);
