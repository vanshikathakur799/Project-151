AFRAME.registerComponent('base', {
    schema: {
        radius: {type: 'number', default: 3},
        height: {type: 'number', default: 0.01}
    },

    init: function() {
        this.el.setAttribute('geometry', {primitive: 'cylinder', radius: this.data.radius, height: this.data.height})
        this.el.setAttribute('position', {x: 0, y: -1, z: 0})
        this.el.setAttribute('material', {color: '#C0C0C0'})
    }
})