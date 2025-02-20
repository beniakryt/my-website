var $buttons = $(".newPic");
var startY = 0;
var initTimeline = gsap.timeline({onComplete: createDragger, delay: 1});

initTimeline.to("#dragger", {duration: 1, x: 500});
initTimeline.to("#theSquare", {duration: 1, attr: {x: -450}}, 0);

$buttons.click(function() {
  var butIndex = $buttons.index($(this));
  var newY = butIndex * 700;
  if (newY === startY || gsap.isTweening(".allPics")) {
    return;
  } else {
    gsap.to(".allPics", {duration: 1, y: -newY});
    gsap.to(".allCaptions", {duration: 1, y: -newY / 7});
    startY = newY;
  }
});

function createDragger() {
  let velocity = 0;
  let lastX = 0;
  let isDragging = false;

  Draggable.create("#dragger", {
    type: "x",
    bounds: {
      minX: 0,
      maxX: 1000
    },
    edgeResistance: 1,
    onDragStart: () => { isDragging = true; velocity = 0; },
    onDrag: function() {
      velocity = this.x - lastX;
      lastX = this.x;
      moveMask.call(this);
    },
    onDragEnd: function() {
      isDragging = false;
      animateInertia();
    }
  });

  function animateInertia() {
    if (!isDragging && Math.abs(velocity) > 0.1) {
      lastX += velocity;
      velocity *= 0.95; // Затухание

      if (lastX < 0) lastX = 0;
      if (lastX > 1000) lastX = 1000;

      gsap.to("#dragger", {x: lastX, duration: 0.1, ease: "power2.out"});
      moveMask.call({x: lastX});

      requestAnimationFrame(animateInertia);
    }
  }
}

function moveMask() {
  gsap.set("#theSquare", {attr: {x: this.x - 950}});
}

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("quote-modal");
    var btn = document.getElementById("quote-btn"); // Кнопка GET A QUOTE
    var closeBtn = document.querySelector(".close");

    // Открытие модального окна
    btn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Закрытие окна при нажатии на X
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Закрытие при клике вне формы
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Закрытие при нажатии клавиши ESC
    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
