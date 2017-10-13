var list = [
    {
        desc: 'rice',
        amount: '1',
        value: '5.4'
    },
    {
        desc: 'beer',
        amount: '12',
        value: '1.99'
    },
    {
        desc: 'meat',
        amount: '1',
        value: '15.0'
    }
];

function getTotal(list) {
    var total = 0;

    for (var key in list) {
        total += list[key].value * list[key].amount;
    }

    return total;
}

function setList(list) {
    var tableBody = document.getElementById('listTable').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';
    
    for (var key in list) {
        var tr = document.createElement('tr');
        tr.innerHTML = ''.concat('<td>', list[key].desc, '</td><td>', list[key].amount, '</td><td>', list[key].value, '</td><td>Edit|Delete</td>');

        tableBody.appendChild(tr);
    }
}

setList(list);