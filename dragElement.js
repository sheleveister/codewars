(function() {
  'use strict';

  const init = () => {
    const elem = document.getElementById('elem');
    elem.addEventListener('mousedown', function(event) {
      drag(this, event);
    });
  };

  const drag = (elementToDrag, event) => {
    // координаты мыши в начале перетаскивания
    const startX = event.clientX,
          startY = event.clientY;

    // начальные координаты элемента, который будет перемещаться
    const origX = elementToDrag.offsetLeft,
          origY = elementToDrag.offsetTop;

    // разница между координатами мыши и координатами перетаскиваемого элемента
    const deltaX = startX - origX,
          deltaY = startY - origY;

    const moveHandler = (event) => {
      event = event || window.event;

      elementToDrag.style.left = `${event.clientX - deltaX}px`;
      elementToDrag.style.top = `${event.clientY - deltaY}px`;
    };

    const upHandler = (event) => {
      event = event || window.event;

      document.removeEventListener('mouseup', upHandler, true);
      document.removeEventListener('mousemove', moveHandler, true);
    };

    document.addEventListener('mousemove', moveHandler, true);
    document.addEventListener('mouseup', upHandler, true);

  };

  init();

})();