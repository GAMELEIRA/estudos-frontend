const showMessage = (name, frequency) => {
    alert(`Olá, ${name}! Sua frequência foi de ${frequency}`);
}

const calculateAttendance = (quantityClass, quantityFouls) => quantityClass - quantityFouls;

const calculateFrequency = (quantityClass, attendance) => attendance / quantityClass * 100;

const getFrequency = () => {
    const nameStudent = document.getElementById('name-student').value;
    const quantityClass = Number(document.getElementById('quantity-class').value);
    const quantityFouls = Number(document.getElementById('quantity-fouls').value);
    const attendance = calculateAttendance(quantityClass, quantityFouls);
    const frequency = calculateFrequency(quantityClass, attendance);

    showMessage(nameStudent, frequency);
}