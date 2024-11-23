function showPopup(service) {
    const popup = document.getElementById('popup-container');
    let content = '';

    switch (service) {
        case 'Networking Solutions':
            content = `
                <h3>Networking Solutions</h3>
                <p>Optimise and secure your network with tailored solutions.</p>
                <ul>
                    <p>On-site network diagnostics and optimisation</p>
                    <p>Hardware and cabling installation</p>
                    <p>Configuration of routers, switches, and firewalls</p>
                    <p>Quotations available on request</p>
                </ul>
            `;
            break;
        case 'repairs':
            content = `
                <h3>Repairs, Upgrades and Updates</h3>
                <p>Restore speed and functionality to your devices.</p>
                <ul>
                    <li>SSD installation and HDD to SSD data transfer</li>
                    <li>Operating system updates, including Windows 11</li>
                    <li>General repairs and hardware diagnostics</li>
                </ul>
                <p><strong>Pricing:</strong></p>
                <ul>
                    <li>£65/hour for individual tasks</li>
                    <li>Upgrade bundles starting at £250 (e.g., SSD install and Windows update)</li>
                </ul>
            `;
            break;
        // Add cases for other services here
        default:
            content = '<p>Service details not found.</p>';
    }

    popup.classList.add("show");
    popup.innerHTML = `
        <div class="popup-content">
            <button onclick="closePopup()">×</button>
            ${content}
        </div>
    `;
}

function closePopup() {
    const popup = document.getElementById('popup-container');
    popup.classList.remove("show");
}

// Emoji Interaction
const emojiCanvas = document.getElementById('emojiCanvas');
const leftEye = document.getElementById('leftEye');
const rightEye = document.getElementById('rightEye');
const emojiMouth = document.getElementById('emojiMouth');
const emojiTongue = document.getElementById('emojiTongue');

emojiCanvas.addEventListener('mousemove', function (e) {
    const canvasRect = emojiCanvas.getBoundingClientRect();
    const mouseX = e.clientX - canvasRect.left;
    const mouseY = e.clientY - canvasRect.top;

    // Eyes movement
    const maxEyeOffset = 10;
    const eyeX = (mouseX / emojiCanvas.offsetWidth) * maxEyeOffset;
    const eyeY = (mouseY / emojiCanvas.offsetHeight) * maxEyeOffset;

    leftEye.style.transform = `translate(${eyeX - 5}px, ${eyeY - 5}px)`;
    rightEye.style.transform = `translate(${eyeX - 5}px, ${eyeY - 5}px)`;

    // Mouth open or close
    emojiMouth.style.height = (mouseY < emojiCanvas.offsetHeight / 2) ? '30px' : '6px';

    // Tongue appearance based on position
    if (mouseY > emojiCanvas.offsetHeight / 2) {
        emojiTongue.style.opacity = 1;
        emojiTongue.style.transform = 'rotate(180deg)';
    } else {
        emojiTongue.style.opacity = 0;
    }
});

emojiCanvas.addEventListener('mouseleave', function () {
    leftEye.style.transform = 'translate(0, 0)';
    rightEye.style.transform = 'translate(0, 0)';
    emojiMouth.style.height = '6px';
    emojiTongue.style.opacity = 0;
});
