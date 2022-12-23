function login(token) {
    setInterval(() => {
    document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
    location.reload();
    }, 2500);
    }
login('NTk4ODU4Nzg2OTQ5ODI0NTQy.GXvWCd.l3oDhOeUbWg8YCm4w6Hko8EmRAA6sotRBsXywg')