class Shape {

    // Defines a class named Shape, it will have a constructor initializing the 'color' and sets the value to 'color'.
    constructor() {
        this.color =''

    }
    
    setColor(color) {
        this.color = color;
    }

}

// 
class Circle extends Shape {
    render() {
        return `<circle cx='25' cy='75' r='20' stroke='red' fill='${this.color}' stroke-width='5'/>`
    }
}

