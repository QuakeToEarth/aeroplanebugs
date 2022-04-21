AFRAME.registerComponent('flying-bird', {
    init:function(){
        for(var i = 1; i<=20; i++)
        {
            var id = `hurdle${i}`
            var posX = Math.floor((Math.random()*3000+(-1000)));
            var posY = Math.floor((Math.random()*2+(-1)));
            var posZ = Math.floor((Math.random()*3000+(-1000)));
            var position = {x:posX, y:posY, z:posZ}
            this.flyingBird(id, position)
        }

    },
    flyingBird:function(id, position){
        
        var terrainE1 = document.querySelector('#terrain')
        var birdE1 = document.createElement('a-entity')
        birdE1.setAttribute('id',id)
        birdE1.setAttribute('position', position)
        birdE1.setAttribute('scale', {x:500, y:500, z:500})
        birdE1.setAttribute('gltf-model', './assets/models/flying_bird/scene.gltf')
        birdE1.setAttribute('animation-mixer', {})
        birdE1.setAttribute('static-body', {
            shape:'sphere', 
            sphereRadius:5
        })
        birdE1.setAttribute('game-play',{
            elementId:`#${id}`
        })
        birdE1.setAttribute('material', 'color', '#ff9100')
        birdE1.setAttribute('geometry', {primitive: 'torus', radius:8,})
        terrainE1.appendChild(birdE1)
    }
})