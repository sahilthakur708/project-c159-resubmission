AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleClickEvents();
  },
  handleClickEvents: function () {
    this.el.addEventListener('click', () => {
      const placesContainer = document.querySelector('#places-container')
      const { state } = placesContainer.getAttribute('comic')
      if (state === 'comic-list') {
        const id = this.el.getAttribute("id")
        placesId = [
          "spider-man",
          "super-man",
          "iron-man",
        ]
        if (placesId.includes(id)) {
          placesContainer.setAttribute('comic', {
            state: 'view',
            selectedCard: id
          })
         
        }
      }
    })
  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["spider-man", "iron-man", "super-man"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener('mouseleave', () => {
      const { selectedItemId } = this.data
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`)
        const id = el.getAttribute('id')
        if (id == selectedItemId) {
          el.setAttribute('material', {
            color: '#0077cc',
            opacity: 1
          })
        }
      }
    })
  },
});
