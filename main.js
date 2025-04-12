const buttons = document.querySelectorAll('.nav-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Hide all tab panes
            tabPanes.forEach(pane => pane.classList.remove('show', 'active'));

            // Show the correct tab pane by index
            const activePane = tabPanes[index];
            activePane.classList.add('show', 'active');

            // Change image inside that tab-pane
            const newSrc = button.getAttribute('data-image');
            const imgTag = activePane.querySelector('img');
            if (imgTag) {
                imgTag.src = newSrc;
            }
        });
    });