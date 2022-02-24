AFRAME.registerComponent("poster", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createBorder:function(position,id){
      const entitiyEl = document.createElement("a-entity")
      entitiyEl.setAttribute("id",id)
      entitiyEl.setAttribute("visible",true)
      entitiyEl.setAttribute("geometry",{
        primitive:"ring",
        radiusInner:9,
        radiusOuter:10,
      })
      entitiyEl.setAttribute("position",position)
      entitiyEl.setAttribute("material",{
        color:"#00bcd4",
        opacity:0.4,
      })
      return entitiyEl
    },
  
    
    createThumbnail:function(item){
      const entitiyEl = document.createElement("a-entity")
      entitiyEl.setAttribute("visible",true)
      entitiyEl.setAttribute("geometry",{
        primitive:"circle",
        radius:9
      })
      entitiyEl.setAttribute("material",{
        src:item.url
      })
      return entitiyEl
    },
  
    
    createTitle:function(position,item){
      const entitiyEl = document.createElement("a-entity")
      entitiyEl.setAttribute("text",{
        font:"exo2bold",aligen:"center",width:60,color:"#e65100",value:item.title 
      })
      entitiyEl.setAttribute("visible",true)
      const elPos=position
      elPos.y=-20
      elPos.x=0
      entitiyEl.setAttribute("position",elPos)
      return entitiyEl
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spider-man",
          title: "SpiderMan",
          url: "./assets/posters/spidey.jpg",
        },
        {
          id: "iron-man",
          title: "Ironman",
          url: "./assets/posters/ironman.jpg",
        },
  
        {
          id: "bat-man",
          title: "Batman",
          url: "./assets/posters/batman.jpg",
        },
        {
          id: "black-panther",
          title: "Black Panther",
          url: "./assets/posters/b_panther.jpg",
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
        const borderEl=this.createBorder(position,item.id)
        // Thumbnail Element
        const thumbnail=this.createThumbnail(item)
        // Title Text Element
        const titleEl=this.createTitle(position,item)
        borderEl.appendChild(thumbnail)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },
    
  });
  