var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Viterbo', 'Rieti', 'Frosisinone', 'Latina', 'Roma'],
        datasets: [{
            label: 'Abitanti',
            data: [6.5, 5, 9.6, 8.4, 33.2],
            backgroundColor: [
                '#264653',
                '#2a9d8f',
                '#e9c46a',
                '#f4a261',
                '#e76f51',
            ],
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function addData(myChart, label, data) {
    myChart.data.labels.push(label);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    myChart.update();
}

let title = document.querySelector('h1')
title.innerText = 'Dati Covid Per Regione'

function addData(myChart, label, data) {
    myChart.data.labels.push(label);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    myChart.update();
}

function removeData(myChart) {
    myChart.data.labels.pop();
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    myChart.update();
}

const socket = io('ws://localhost:5050');

socket.on('testValue', chartData => {
    if (chartData.label && chartData.value) {
        addData(myChart, chartData.label, chartData.value);
    } else {
        alert('insert data first')
    }
});
document.querySelector('.remove').onclick = () => {
    removeData(myChart);
}

document.querySelector('.update').onclick = () => {
    const data = document.querySelector('.chartData').value;
    const text = document.querySelector('.chartLabel').value;
    let chartData = {
        value: data,
        label: text
    };
    socket.emit('testValue', chartData)

}
document.querySelector('.chart').remove()