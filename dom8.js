const container = document.querySelector('.container');

container.addEventListener('click', function(element) {
    if (element.target.className == 'tombol') {
        element.target.parentElement.style.display = 'none';
        element.preventDefault();
        element.stopPropagation();
    } else if (element.target.className == 'card') {
        alert('Anda mengclick card');
    }
});