let circle = {
    radius: 7,

    get diameter() {
        return radius * 2;
    },

    get circumference() {
        return 2 * Math.PI * this.radius;
    },

    get area() {
        return Math.PI * (this.radius ** 2)
    },

    set diameter(d) {
        this.radius = d / 2;
    },

    set circumference(c) {
        this.radius = c / (2 * Math.PI);
    },

    set area(a) {
        this.radius = Math.sqrt(a / Math.PI);
    },

    setArea(a) {
        this.radius = Math.sqrt(a / Math.PI);
    }
}

circle.radius = 2;
console.log(circle.radius);
console.log(circle.area);

circle.setArea(14);
circle.area = 14;
console.log(circle.radius);
console.log(circle.area);



