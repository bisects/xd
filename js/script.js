document.addEventListener('DOMContentLoaded', function () {
    var audio = new Audio('surprise.mp3');
    var playButton = document.getElementById('playButton');
    var mobileGirl = document.querySelector('.mobile-girl');
    var title = document.querySelector('.title');
    var buttonContainer = document.querySelector('.button-container');
    var downloadButtons = document.querySelectorAll('.download-button');
    var buttonClicked = false;
    var isWindowsXPOpen = false;

    downloadButtons.forEach(function (button) {
        button.style.pointerEvents = 'none';
    });

    playButton.addEventListener('click', function () {
        if (!buttonClicked) {
            audio.play();
            fadeIn(mobileGirl);
            fadeIn(title);
            fadeIn(buttonContainer);
            fadeOut(playButton, 300);
            buttonClicked = true;
            startSnowfall();

            downloadButtons.forEach(function (button) {
                button.style.pointerEvents = 'auto';
            });
        }
    });

    downloadButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            var buttonText = button.textContent.toLowerCase();
            var customText = getCustomText(buttonText);
            var imageName = buttonText + '.png'; 
            
            createWindowsXPPopup(customText, imageName);
        });
    });

    function getCustomText(buttonText) {
        switch (buttonText) {
            case 'arch':
                return 'the true owner of hellhound';
            case 'fei':
                return 'the owner of hellhound';
            case 'eve':
                return 'i love adele so much';
            case 'rtx':
                return 'i hacked nvidia database OHOOOO';
            case 'jayden':
                return 'jayden is a troll';
            case 'hoz':
                return 'worst dx9ware staff (owes arch money)';
            case 'sar':
                return 'begged me to add him here';
            default:
                return '';
        }
    }
    


    function createWindowsXPPopup(text, imageName) {
        
        if (isWindowsXPOpen) {
            return;
        }

        var popupContainer = document.createElement('div');
        popupContainer.className = 'windows-xp-popup';

        var popupWindow = document.createElement('div');
        popupWindow.className = 'windows-xp-window';

        var blueBar = document.createElement('div');
        blueBar.className = 'windows-xp-blue-bar';
        blueBar.style.cursor = 'grab';

        var closeButton = document.createElement('div');
        closeButton.className = 'windows-xp-close-button';
        closeButton.innerHTML = 'X';

        closeButton.addEventListener('click', function () {
            document.body.removeChild(popupContainer);
            isWindowsXPOpen = false; 
        });

        var popupText = document.createElement('div');
        popupText.className = 'windows-xp-text';
        popupText.innerHTML = text;

        var profilePicture = document.createElement('img');
        profilePicture.className = 'profile-picture';
        profilePicture.src = imageName;

        popupWindow.appendChild(blueBar);
        popupWindow.appendChild(closeButton);
        popupWindow.appendChild(popupText);
        popupWindow.appendChild(profilePicture); 
        popupContainer.appendChild(popupWindow);
        document.body.appendChild(popupContainer);

        var isDragging = false;
        var offsetTop, offsetLeft;

       
        var top = Math.random() * (window.innerHeight - 200);
        var left = Math.random() * (window.innerWidth - 300);

        popupContainer.style.top = top + 'px';
        popupContainer.style.left = left + 'px';

        popupWindow.addEventListener('mousedown', function (event) {
            isDragging = true;
            offsetTop = event.clientY - popupContainer.getBoundingClientRect().top;
            offsetLeft = event.clientX - popupContainer.getBoundingClientRect().left;
        });

        document.addEventListener('mousemove', function (event) {
            if (isDragging) {
                var top = event.clientY - offsetTop;
                var left = event.clientX - offsetLeft;
                popupContainer.style.top = top + 'px';
                popupContainer.style.left = left + 'px';
            }
        });

        document.addEventListener('mouseup', function () {
            isDragging = false;
        });

        isWindowsXPOpen = true; 
    }

    function fadeOut(element, duration) {
        var opacity = 1;
        var interval = setInterval(function () {
            if (opacity > 0) {
                opacity -= 0.1;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
                element.style.pointerEvents = 'none';
            }
        }, duration / 10);
    }

    function startSnowfall() {
        var snowfallInterval = setInterval(function () {
            createSnowflake();
        }, 100);

        setTimeout(function () {
            clearInterval(snowfallInterval);
        }, 5000);
    }

    function createSnowflake() {
        var snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(snowflake);

        void snowflake.offsetWidth;

        snowflake.style.top = '-10px';
    }

    function fadeIn(element) {
        var opacity = 0;
        var interval = setInterval(function () {
            if (opacity < 1) {
                opacity += 0.1;
                element.style.opacity = opacity;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }
});
