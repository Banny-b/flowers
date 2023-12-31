window.addEventListener('load', function() {
    const spinner = new Spinner({
        lines: 12,
        length: 30,
        width: 6,
        radius: 30,
        color: 'red',
        speed: 1,
    }).spin();

    const spinnerContainer = document.getElementById('spinner');
    spinnerContainer.appendChild(spinner.el);

    const content = document.getElementById('content');
    spinnerContainer.style.display = 'none'; // hidden spinner
    content.style.display = 'block';
});