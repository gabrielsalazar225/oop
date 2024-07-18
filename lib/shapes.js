class Shape{

    constructor() {
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

class Circle extends Shape{
    render(){
        return `<circle r="100" cx="50%" cy="50%" height="100%" width="100%" fill="${this.color}" />`
    }
}

class Square extends Shape{
    render(){
        return `<rect width="200" height="200" x="50" y="50" rx="10" ry="10" fill="${this.color}" />`
    }
}

class Triangle extends Shape{
    render() {
        return `<polygon points="150,15 258,77 258,202 150,265 42,202 42,77"
  style="fill:${this.color};stroke:blue;stroke-width:0.5" />`
    }
};

module.exports = {Circle,Square,Triangle}



