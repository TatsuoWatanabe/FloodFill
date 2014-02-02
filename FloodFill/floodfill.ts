var image = new Image();
image.src = 'fukuzatsu.png';
image.onload = () => {
    var canvas = <HTMLCanvasElement>document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.drawImage(image, 0, 0);

    var floodFill = (x: number, y: number) => {
        var points = {
            right: { 'x': x + 1, 'y': y },
            left:  { 'x': x - 1, 'y': y },
            up:    { 'x': x,     'y': y - 1 },
            down:  { 'x': x,     'y': y + 1 }
        };
        var fillRecursive = (point: { x: number; y: number }) => {
            ctx.getImageData(point.x, point.y, 1, 1).data[2] === 255 && floodFill(point.x, point.y);
        };

        ctx.fillRect(x, y, 1, 1);
        for (var key in points) fillRecursive(points[key]);
    };

    floodFill(50, 50);
};