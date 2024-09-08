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
    persons.forEach((person) => {
        const elementChild = document.createElement('div');
        const image = document.createElement('img');
        const namePerson = document.createElement ('p');
        
        namePerson.textContent = person.name;
        namePerson.classList = 'name-person';
        image.src = person.image;
        image.alt = 'Person Image';
        image.classList = 'image-person';
        elementChild.appendChild(namePerson);
        elementChild.appendChild(image);
        element.appendChild(elementChild);
    });
}


listPersons();