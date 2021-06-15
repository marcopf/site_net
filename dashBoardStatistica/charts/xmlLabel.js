const span = document.querySelectorAll('span')

let url = "https://raw.githubusercontent.com/marcopf/testXML/main/menu.xml";
fetch(url)
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        console.log(xml);
        extract(xml)
    })

function extract(x) {
    let menus = x.getElementsByTagName("menu-lable")
    for (let i = 0; i < menus.length; i++) {
        let menu = menus[i].firstChild.nodeValue
        console.log(menu)
        span[i].innerText = menu
    }
}