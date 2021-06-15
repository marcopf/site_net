var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Guidonia', 'Fiumicino', 'Aprilia', 'Pomezia', 'Tivoli'],
        datasets: [{
            label: 'Abitanti',
            data: [6376, 4274, 4495, 3806, 4141],
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

let title = document.querySelector('h1')
title.innerText = 'Dati covid Per Comune'

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
    addData(myChart, chartData.label, chartData.value);
});

document.querySelector('.remove').onclick = () => {
    removeData(myChart);
}

document.querySelector('button').onclick = () => {
    const data = document.querySelector('.chartData').value;
    const text = document.querySelector('.chartLabel').value;
    let chartData = {
        value: data,
        label: text
    };
    socket.emit('testValue', chartData)

}
document.querySelector('.chart').remove()