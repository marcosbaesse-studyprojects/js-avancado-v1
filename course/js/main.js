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
        tr.innerHTML = ''.concat('<td>', formatDesc(list[key].desc), '</td><td>', list[key].amount, '</td><td>', formatValue(list[key].value), '</td><td>Edit|Delete</td>');

        tableBody.appendChild(tr);
    }
}

function formatDesc(desc) {
    var str = desc.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);

    return str;
}

function formatValue(value) {
    var str = parseFloat(value).toFixed(2) + '';
    str = str.replace('.', ',');

    return 'R$ ' + str;
}

function addData() {
    var desc = document.getElementById('desc').value;
    var amount = document.getElementById('amount').value;
    var value = document.getElementById('value').value;

    list.unshift({
        desc: desc,
        amount: amount,
        value: value
    });

    setList(list);
}

setList(list);