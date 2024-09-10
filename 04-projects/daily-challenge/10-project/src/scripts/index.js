let persons;

const loadData = (filter = false) => {
    const normalPersons = [
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

    if (filter) {
        const filterPersons = [...persons];
        console.log(filterPersons);
        normalPersons.forEach((normalPerson, index) => {
            filterPersons.forEach((filterPerson) => {
                if (normalPerson.id === filterPerson.id) {
                    normalPersons[index] = filterPerson;
                    console.log(normalPersons);
                }
            });
        });
        persons = [...normalPersons];
    } else {
        persons = normalPersons;
    }
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
                loadData();
            }
        } else {
            const element = document.getElementsByClassName('line-person');
            [...element].forEach((item) => {
                item.remove();
            });
            loadData(true);
            listPersons();
        }
    });

}

const listPersons = () => {
    const element = document.getElementById('list-persons');

    console.log('mulheres cheirosas', persons);

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
        buttonPerson.textContent = (person.following)? 'Unfollow': 'Follow';
        buttonPerson.classList = 'button-person';
        buttonPerson.id = index;
        buttonPerson.addEventListener('click', () => {
            const button = document.getElementById(index);
            if (!person.following) {
                person.following = true;
                button.textContent = 'Unfollow';
            } else {
                person.following = false;
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
    loadData();
    listPersons();
    filterPersons();
}

main();