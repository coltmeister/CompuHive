p0 = 0
p1 = 0
p2 = 0
p3 = 0
p4 = 0
p5 = 0
p6 = 0
p7 = 0
p8 = 0
p9 = 0

a = 0
while(a < 1000){

    var test = Math.floor((Math.random() * 10));
    if(test == 0){
        p0++
    }
    if(test == 1){
        p1++
    }
    if(test == 2){
        p2++
    }
    if(test == 3){
        p3++
    }
    if(test == 4){
        p4++
    }
    if(test == 5){
        p5++
    }
    if(test == 6){
        p6++
    }
    if(test == 7){
        p7++
    }
    if(test == 8){
        p8++
    }
    if(test == 9){
        p9++
    }

    a++
}

console.log(p0)
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)
console.log(p6)
console.log(p7)
console.log(p8)
console.log(p9)