var image = new Image();
image.src = 'fukuzatsu.png';
image.onload = function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.drawImage(image, 0, 0);

    var floodFill = function (x, y) {
        var p = {
            right: { 'x': x + 1, 'y': y },
            left: { 'x': x - 1, 'y': y },
            up: { 'x': x, 'y': y - 1 },
            down: { 'x': x, 'y': y + 1 }
        };
        var fillRecursive = function (point) {
            ctx.getImageData(point.x, point.y, 1, 1).data[2] === 255 && floodFill(point.x, point.y);
        };

        ctx.fillRect(x, y, 1, 1);
        fillRecursive(p.right);
        fillRecursive(p.left);
        fillRecursive(p.up);
        fillRecursive(p.down);
    };

    floodFill(50, 50);
};
//# sourceMappingURL=floodfill.js.map
