class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

}

class Circle extends Shape {
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill=${this.shapeColor} />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>

        </svg>`
    }
}


class Triangle extends Shape {
    render(){
        return `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">

        <polygon points="100,10 150,190 50,190" style="fill:${this.shapeColor} />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>

        </svg>`
    }
}


class Square extends Shape {
    render(){
        return `<svg width="130" height="130" xmlns="http://www.w3.org/2000/svg">

        <rect width="200" height="100" x="10" y="10" fill=${this.shapeColor} />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>

        </svg>`
    }
}


module.exports = {
    Triangle,
    Circle,
    Square
}