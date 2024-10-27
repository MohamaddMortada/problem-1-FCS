function padding(S,target) {
    const pad = ' '.repeat(target);
    return pad + S;
}
var p = prompt("Enter the number of rows: ");
var r = parseInt(p);
for (var i=0;i<r;i++) {
    var stars = '*'.repeat(2 * i + 1);
    console.log(padding(stars, r-i));
}
for (var i=r-2; i>=0; i--) {
    let stars = '*'.repeat(2 * i + 1);
    console.log(padding(stars, r-i));
}
