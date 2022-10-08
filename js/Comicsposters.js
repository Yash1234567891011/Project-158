AFRAME.registerComponent("comics-posters", {
  init: function () {
    this.comicContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "batman",
        title: "Batman",
        url: "./assets/thumbnails/batman.jpg",
      },
      {
        id: "ironman",
        title: "Ironman",
        url: "./assets/thumbnails/Ironman.jpg",
      },

      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/thumbnails/spiderman.jpeg",
      },
      {
        id: "superman",
        title: "Superman",
        url: "./assets/thumbnails/superman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      const borderEl = this.createBorder(position, item.id)

      const Thumbnail = this.createThumbnail(item)
      borderEl.appendChild(Thumbnail)
      const titleEl = this.createTitleEl(position, item)
      borderEl.appendChild(titleEl)

      // Title Text Element

      this.comicContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width:22,
      height:35
    })
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("meterial", {
      color: "blue",
      opacity: 1
    })
    entityEl.setAttribute("cursor-listener",{})
    return entityEl
  },
  createThumbnail: function (item) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    })
    entityEl.setAttribute("position", { x: 0, y: 2, z: 0.1 })
    entityEl.setAttribute("material", { src: item.url })
    return entityEl
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "red",
      value: item.title
    })
    const elPosition = position
    elPosition.y = -30
    entityEl.setAttribute("position", elPosition)
    entityEl.setAttribute("visible", true)
    return entityEl
  }


});
