<script>
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
            emojiTongue.style.transform = `scaleY(${(rect.top - e.clientY) / 30})`;
        } else {
            emojiTongue.style.opacity = "0";
        }
    });

    function showServiceDetails(service) {
        const serviceDetails = document.getElementById('service-details');
        let content = '';

        switch (service) {
            case 'Networking Solutions':
                content = `
                    <h3>Networking Solutions</h3>
                    <p>Optimise and secure your network with tailored solutions.</p>
                    <ul>
                        <li>On-site network diagnostics and optimisation</li>
                        <li>Hardware and cabling installation</li>
                        <li>Configuration of routers, switches, and firewalls</li>
                        <li>Quotations available on request</li>
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
                `;
                break;
            // Add cases for other services here
            default:
                content = '<p>Service details not found.</p>';
        }

        serviceDetails.innerHTML = content;
        serviceDetails.classList.add("show");
    }

    function closePopup() {
        document.getElementById('popup-container').classList.remove('show');
    }
</script>
