const persons = [
    {
        'name': 'Gabriel',
        'image': './src/assets/images/person-1.png'
    }, {
        'name': 'Depay',
        'image': './src/assets/images/person-2.png'
    }, {
        'name': 'Garro',
        'image': './src/assets/images/person-3.png'
    }, {
        'name': 'Cibele',
        'image': './src/assets/images/person-4.png'
    }
];

const listPersons = () => {
    const element = document.getElementById('list-persons');

    persons.forEach((person, index) => {
        const elementChild = document.createElement('div');
        const image = document.createElement('img');
        const namePerson = document.createElement('p');
        const containerPerson = document.createElement('div');
        const buttonPerson = document.createElement('button');

        image.src = person.image;
        image.alt = 'Person Image';
        image.classList = 'image-person';
        namePerson.textContent = person.name;
        namePerson.classList = 'name-person';
        containerPerson.appendChild(image);
        containerPerson.appendChild(namePerson);
        containerPerson.classList = 'container-person';
        buttonPerson.textContent = 'Follow';
        buttonPerson.classList = 'button-person';
        buttonPerson.id = index;
        buttonPerson.addEventListener('click', () => {
            const button = document.getElementById(index);
            console.log(button.textContent == 'Follow');
            if (button.textContent === 'Follow') {
                button.textContent = 'Unfollow';
            } else {
                button.textContent = 'Follow';
            }
        }
        );
        elementChild.classList = 'line-person';
        elementChild.appendChild(containerPerson);
        elementChild.appendChild(buttonPerson);
        element.appendChild(elementChild);
    });
}





listPersons();