const colors = ['red', 'blue', 'green', 'brown', 'orange'];

function ccf(){
    const colorIndex= parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex];
}