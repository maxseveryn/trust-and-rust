const ipAddresses = ['192.168.0.1', '192.168.0.2', '192.168.0.3', '192.168.0.4', '192.168.0.5', '192.168.0.6'];

function copyIP(serverID) {
    const currentIp = ipAddresses[serverID];

    if (!currentIp) {
        console.error('IP not found');
        return;
    }

    const tempInput = document.createElement('input');
    tempInput.value = currentIp;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(tempInput);

    const alertBox = document.createElement('div');
    alertBox.textContent = `IP copied to clipboard: ${currentIp}`;
    alertBox.style.position = 'fixed';
    alertBox.style.top = '0';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.width = 'auto';
    alertBox.style.margin = '20px 0';
    alertBox.style.padding = '10px';
    alertBox.style.backgroundColor = 'green';
    alertBox.style.color = 'white';
    alertBox.style.textAlign = 'center';
    alertBox.style.zIndex = '9999'; 
    document.body.appendChild(alertBox);
    

    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, 2000);
}
