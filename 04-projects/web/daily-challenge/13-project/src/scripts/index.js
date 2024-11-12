let count = 0;

const classList = document.getElementsByClassName('option');
const list = [...classList];
list.forEach((item, index) => {
    item.id = count++;
    item.addEventListener('click', () => {
        if (document.getElementById(index).classList.contains('option-click')) {
            document.getElementById(index).classList.remove('option-click');
        } else {
            document.getElementById(index).classList.add('option-click');
        }
    });
});

