let persons;

const getPersons = () => {
    persons = [
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
}

const filterPersons = () => {
    const input = document.getElementById('search');
    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();
        console.log(input.value.length);

        if (input.value) {
            persons = persons.filter((res) => {
                console.log(value === res.name, value, 'value', res.name, 'name');
                return res.name.toLowerCase().includes(value);
            });
            console.log(persons, 'pessssaooooooasss');
            console.log(!persons, 'tem que dar true')
            console.log(persons, 'array');
            const element = document.getElementsByClassName('line-person');
            console.log(element, 'html');
            [...element].forEach((item) => {
                console.log(item, 'item do html')
                item.remove();
            });
            listPersons();
            if (!persons.length) {
                getPersons();
            }
        } else {
            const element = document.getElementsByClassName('line-person');
            [...element].forEach((item) => {
                console.log(item, 'item do html')
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

const main = () => {
    getPersons();
    listPersons();
    filterPersons();
}

main();