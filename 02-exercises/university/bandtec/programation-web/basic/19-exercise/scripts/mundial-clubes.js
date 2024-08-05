const trophysCorinthians = 2;
const trophysSaoPaulo = 3;
const trophysPalmeiras = 0;
const trophysSantos = 2;
let clubSelected = '';

const showTrophys = (club) => {
    const trophy = selectedClub(club);
    if (trophy) {
        for(let i = 0; i < trophy; i++) {
            addTrophys();
        }
    } else {
        addWhitoutTrophys();
    }

}

const selectedClub = (club) => {
    if (club === 1) {
        clubSelected = 'trophysCorinthians';
        return trophysCorinthians;
    } else if (club === 2) {    
        clubSelected = 'trophysPalmeiras';
        return trophysPalmeiras;
    } else if (club === 3) {
        clubSelected = 'trophysSantos';
        return trophysSantos;
    } else if (club === 4) {
        clubSelected = 'trophysSaoPaulo';
        return trophysSaoPaulo;
    } else {
        return 0;
    }
}

const addTrophys = () => {
    const fatherElement = document.getElementById(clubSelected);
    const childElement = document.createElement('img');
    childElement.src = 'images/trofeu-mundial-clubes.png';
    childElement.className = 'trophy';
    fatherElement.appendChild(childElement);
}

const addWhitoutTrophys = () => {
    const fatherElement = document.getElementById(clubSelected);
    const childElement = document.createElement('img');
    childElement.src = 'images/mondial-palmeiras.png';
    childElement.className = 'trophy';
    fatherElement.appendChild(childElement);
}
