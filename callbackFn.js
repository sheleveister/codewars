(function() {
  function findNodes(callback) {
    let nodes = [];
    let pArray = [];
    let found = null;

    for (let i = 0; i < 10; i++) {
      const p = document.createElement('p');
      document.getElementById('elem').appendChild(p);
    }

    pArray = document.getElementsByTagName('p');

    if (typeof callback !== 'function') {
      callback = false;
    }

    for (let i = 0; i < pArray.length; i++) {
      found = pArray[i];

      if (callback) {
        callback(found);
      }
      nodes.push(found);
    }
    return nodes;

  }

  function makeBorder(node) {
    node.style.border = '1px solid green';
    node.style.height = '20px';
  }

  findNodes(makeBorder);

})();