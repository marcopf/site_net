var g = new Dracula.Graph();
let toAdd = []

//sistema solare

g.addEdge("Sole", "Terra");
g.addEdge("Sole", "Marte");
g.addEdge("Sole", "Venere");
g.addEdge("Sole", "Giove");
g.addEdge("Sole", "Mercurio");
g.addEdge("Sole", "Nettuno");
g.addEdge("Sole", "Saturno");
g.addEdge("Sole", "Urano");
g.addEdge("Sole", "Plutone");

//lune di giove

g.addEdge("Giove", "Europa");
g.addEdge("Giove", "Gianimede");
g.addEdge("Giove", "Io");
g.addEdge("Giove", "Callisto");

//lune di nettuno

g.addEdge("Nettuno", "Tritone");
g.addEdge("Nettuno", "Talassa");
g.addEdge("Nettuno", "Ippocampo");
g.addEdge("Nettuno", "Nereide")

//lune di marte

g.addEdge("Marte", "Deimos")
g.addEdge("Marte", "Fobos")

var layout = new Dracula.Layout.Spring(g);
layout.layout();

var renderer = new Dracula.Renderer.Raphael(document.querySelector('.chart'), g, 500, 300);
renderer.draw();

let title = document.querySelector('h1')
title.innerText = 'Grafo Rappresentante Il Sistema Solare'

redraw = function(toAdd) {
    document.querySelector('.chart').innerHTML = ""

    var g = new Dracula.Graph();

    //sistema solare

    g.addEdge("Sole", "Terra");
    g.addEdge("Sole", "Marte");
    g.addEdge("Sole", "Venere");
    g.addEdge("Sole", "Giove");
    g.addEdge("Sole", "Mercurio");
    g.addEdge("Sole", "Nettuno");
    g.addEdge("Sole", "Saturno");
    g.addEdge("Sole", "Urano");
    g.addEdge("Sole", "Plutone");

    //lune di giove

    g.addEdge("Giove", "Europa");
    g.addEdge("Giove", "Gianimede");
    g.addEdge("Giove", "Io");
    g.addEdge("Giove", "Callisto");

    //lune di nettuno

    g.addEdge("Nettuno", "Tritone");
    g.addEdge("Nettuno", "Talassa");
    g.addEdge("Nettuno", "Ippocampo");
    g.addEdge("Nettuno", "Nereide")

    //lune di marte

    g.addEdge("Marte", "Deimos")
    g.addEdge("Marte", "Fobos")

    for (let i = 0; i < toAdd.length; i++) {
        if (toAdd[i][0] && toAdd[i][1]) {
            g.addEdge(toAdd[i][0], toAdd[i][1])
        }
    }

    var layout = new Dracula.Layout.Spring(g);
    layout.layout();

    var renderer = new Dracula.Renderer.Raphael(document.querySelector('.chart'), g, 500, 300);
    renderer.draw();
}

const socket = io('ws://localhost:5050');

socket.on('testValue', chartData => {
    toAdd.push([chartData.value, chartData.label])
    console.log(toAdd)
    redraw(toAdd);
});

document.querySelector('button').onclick = () => {
    const data = document.querySelector('.chartData').value;
    const text = document.querySelector('.chartLabel').value;
    let chartData = {
        value: data,
        label: text
    };
    socket.emit('testValue', chartData)
}
document.querySelector('.value').innerText = 'root node link'
document.querySelector('.lbl').innerText = 'new node value'
document.querySelector('.remove').remove()
document.querySelector('canvas').remove()