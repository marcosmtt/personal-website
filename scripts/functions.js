function dropMenu() {
    if (document.getElementById("dropContent").style.display == 'inline') {
        document.getElementById("dropContent").style.display = 'none';
        document.getElementById("menuButton").style.color = 'white';
    } else {
        document.getElementById("dropContent").style.display = 'inline';
        document.getElementById("menuButton").style.color = '#0a0a11';
    }
};

const dropBtn = document.getElementById("dropButton");
dropBtn.addEventListener("click", dropMenu);
