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

    const leftEye = document.getElementById("leftEye");
    const rightEye = document.getElementById("rightEye");
    const emojiTongue = document.getElementById("emojiTongue");
    const emojiCanvas = document.getElementById("emojiCanvas");
    const mouth = document.getElementById("emojiMouth");

    // Constrain eye movement within the emoji face
    document.addEventListener("mousemove", (e) => {
        const rect = emojiCanvas.getBoundingClientRect();
        const maxOffset = 15;
        const offsetX = Math.max(-maxOffset, Math.min(maxOffset, (e.clientX - rect.left - rect.width / 2) / 8));
        const offsetY = Math.max(-maxOffset, Math.min(maxOffset, (e.clientY - rect.top - rect.height / 2) / 8));
        leftEye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        rightEye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    // Mouth reactions based on cursor position
    document.addEventListener("mousemove", (e) => {
        const rect = emojiCanvas.getBoundingClientRect();
        if (e.clientX > rect.left && e.clientX < rect.right && e.clientY > rect.top && e.clientY < rect.bottom) {
            mouth.style.height = "15px"; // Open mouth
        } else {
            mouth.style.height = "6px"; // Close mouth
        }
    });

    // Tongue activation when pointer is above emoji
    document.addEventListener("mousemove", (e) => {
        const rect = emojiCanvas.getBoundingClientRect();
        if (e.clientY < rect.top) {
            emojiTongue.style.opacity = "1";
            emojiTongue.style.transform = `scaleY(${(rect.topbottom - e.clientY) / 30})`;
        } else {
            emojiTongue.style.opacity = "0";
        }
    });