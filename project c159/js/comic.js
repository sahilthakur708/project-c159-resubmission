AFRAME.registerComponent("comic", {
  schema: {
    state: { type: "string", default: "comic-list" },
    selectedCard: { type: "string", default: "#card1" },
  },
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },
  tick: function () {
    const { state } = this.el.getAttribute("comic");

    if (state === "view") {
      this.hideEl([this.placesContainer]);
      this.showView()
    }
  },
  hideEl: function (elList) {
    elList.map(el => {
      el.setAttribute("visible", false);
    });

  },
  showView: function () {
    console.log('hhh')
    var text=document.querySelector('#main-scene')
    var display_text=document.createElement('a-entity')
    display_text.setAttribute('text',{value:'hhhhhhhhhhh'})
    text.appendChild(display_text)
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "spider-man",
        title: "Spider Man",
        url: "../assets/thumbnails/spiderman.jpg",
      },
      {
        id: "iron-man",
        title: "Iron Man",
        url: "../assets/thumbnails/ironman.jpg",
      },

      {
        id: "super-man",
        title: "SuperMan",
        url: "../assets/thumbnails/superman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id)

      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
      // Title Text Element
      const title = this.createTitle(item, position)
      borderEl.appendChild(title)

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entity = document.createElement('a-entity')
    entity.setAttribute("id", id)
    entity.setAttribute('visible', true)
    entity.setAttribute("geometry", {
      primitive: 'ring',
      radiusInner: 9,
      radiusOuter: 10
    })
    entity.setAttribute('position', position)
    entity.setAttribute('material', { color: '#0077CC', opacity: 1 })
    entity.setAttribute("cursor-listener", {});
    return entity
  },
  createThumbnail: function (item) {
    const entity = document.createElement('a-entity')
    entity.setAttribute('geometry', {
      primitive: 'circle',
      radius: 9
    })
    entity.setAttribute('material', { src: item.url })
    return entity
  },
  createTitle: function (item, position) {
    const entity = document.createElement('a-entity')
    entity.setAttribute('text', {
      font: 'exo2bold',
      color: 'red',
      width: 70,
      value: item.title,
      align: 'center'
    })
    position.y = -20
    entity.setAttribute('position', position)
    return entity
  }
});
