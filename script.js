var ctab = document.getElementById('table');

function initFormulaire() {
    document.getElementById('sejour').value = "";
    document.getElementById('datearr').value = "";
    document.getElementById('datedep').value = "";
    document.getElementById('adulte').value = 0;
    document.getElementById('enfant').value = 0;
    document.getElementById('chambre').value = 0;
    document.getElementById('workTrip').checked = false;
    document.getElementById('confirmsejour').innerText = 'Où souhaitez-vous aller ?';
    document.getElementById('confirmdatearr').innerText = 'YYYY-MM-DD';
    document.getElementById('confirmdatedep').innerText = 'YYYY-MM-DD';
    document.getElementById('confirmAdulte').innerText = '0';
    document.getElementById('confirmEnfant').innerText = '0';
    document.getElementById('confirmChambre').innerText = '0';
    document.getElementById('confirmWorkTrip').innerText = 'Non';

    var childInputs = document.querySelectorAll('.child-input');
    childInputs.forEach(function(input) {
        input.parentElement.parentElement.remove();
    });
}

function updateValue(id, delta) {
    var input = document.getElementById(id);
    var newValue = parseInt(input.value) + delta;
    if (newValue >= 0) {
        input.value = newValue;
        if (id === 'enfant' && delta < 0) {
            var enfantCount = parseInt(input.value) + 1;
            var elementToRemove = document.getElementById('ageEnfant' + enfantCount);
            if (elementToRemove) {
                elementToRemove.parentElement.parentElement.remove();
            }
        }
    }
}

function addChild() {
    var enfantInput = document.getElementById('enfant');
    var enfantCount = parseInt(enfantInput.value);
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.colSpan = 6;
    var label = document.createElement('label');
    label.innerHTML = "Age enfant " + enfantCount + ": ";
    var input = document.createElement('input');
    input.type = "number";
    input.id = "ageEnfant" + enfantCount;
    input.placeholder = "Age enfant " + enfantCount;
    input.className = "child-input";
    td.appendChild(label);
    td.appendChild(input);
    tr.appendChild(td);
    document.querySelector('.form-table').appendChild(tr);
}

function updateConfirmation() {
    var sejour = document.getElementById('sejour').value;
    var datearr = document.getElementById('datearr').value;
    var datedep = document.getElementById('datedep').value;

    document.getElementById('confirmsejour').innerText = sejour || 'Où souhaitez-vous aller ?';
    document.getElementById('confirmdatearr').innerText = datearr || 'YYYY-MM-DD';
    document.getElementById('confirmdatedep').innerText = datedep || 'YYYY-MM-DD';
    document.getElementById('confirmAdulte').innerText = document.getElementById('adulte').value;
    document.getElementById('confirmEnfant').innerText = document.getElementById('enfant').value;
    document.getElementById('confirmChambre').innerText = document.getElementById('chambre').value;
    document.getElementById('confirmWorkTrip').innerText = document.getElementById('workTrip').checked ? 'Oui' : 'Non';
}