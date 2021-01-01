document.getElementById('loop').addEventListener('click', loopTriangle());

function loopTriangle() {
    for(let line="#"; line.length < 8; line+= "#") {
    console.log(line);
    };
}