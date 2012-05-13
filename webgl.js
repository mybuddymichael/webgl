(function() {
  var $, animate, camera, height, init, mesh, render, renderer, root, scene, setStats, stats, width;

  root = this;

  mesh = scene = camera = renderer = stats = null;

  $ = root.Zepto;

  height = $(function() {
    return $(window).height();
  });

  width = $(function() {
    return $(window).width();
  });

  init = function() {
    var geometry, material;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 1, 10000);
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
    renderer.setSize(width, height);
    $(function() {
      return $('body').append(renderer.domElement);
    });
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
    return $(function() {
      return $('body').append(stats.domElement);
    });
  };

  init();

  animate();

}).call(this);
