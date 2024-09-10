let persons;

const getPersons = () => {
    persons = [
        {   
            'id': 1,
            'name': 'Gabriel',
            'image': './src/assets/images/person-1.png',
            'following': false
        }, {
            'id': 2,
            'name': 'Depay',
            'image': './src/assets/images/person-2.png',
            'following': false
        }, {
            'id': 3,
            'name': 'Garro',
            'image': './src/assets/images/person-3.png',
            'following': false
        }, {
            'id': 4,
            'name': 'Cibele',
            'image': './src/assets/images/person-4.png',
            'following': false
        }
    ];
}

const filterPersons = () => {
    const input = document.getElementById('search');
    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();

        if (input.value) {
            persons = persons.filter((res) => {
                return res.name.toLowerCase().includes(value);
            });

            const element = document.getElementsByClassName('line-person');
            [...element].forEach((item) => {
                item.remove();
            });
            listPersons();
            if (!persons.length) {
                getPersons();
            }
        } else {
            const element = document.getElementsByClassName('line-person');
            [...element].forEach((item) => {
                item.remove();
            });
            getPersons();
            listPersons();
        }
    });

}

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

const main = () => {
    getPersons();
    listPersons();
    filterPersons();
}

main();