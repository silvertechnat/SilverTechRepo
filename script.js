const overlay = document.createElement('div');
overlay.className = 'pixel-overlay';
document.body.appendChild(overlay);

function createPixelGrid() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelSize = Math.floor(width / 640); // Calculate pixel size based on 640px width

    overlay.style.gridTemplateColumns = `repeat(${Math.floor(width / pixelSize)}, ${pixelSize}px)`;
    overlay.style.gridTemplateRows = `repeat(${Math.floor(height / pixelSize)}, ${pixelSize}px)`;

    while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild);
    }

    for (let i = 0; i < Math.floor((width / pixelSize) * (height / pixelSize)); i++) {
        const pixel = document.createElement('div');
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
        overlay.appendChild(pixel);
    }
}

createPixelGrid();
window.addEventListener('resize', createPixelGrid);
