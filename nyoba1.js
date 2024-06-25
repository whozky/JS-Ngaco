var s = '';

for (i = 0; i < 5; i++){
    for (j = 0; j <= i; j++){
        s += '*';
    }
    s += '\n';
}
for (x = 4; x > 0; x--){
    for (y = 0; y < x; y++){
        s += '*';
    }
    s += '\n';
}
console.log(s);