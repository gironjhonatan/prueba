//a = [1,2]  // 1

//b = [[1,2],[2,4]]  // 2

//c = [[1,2],[2,4],[2,4]]  // 2

//d = [[[3,4],[6,5]]]  // 3

//e = [[[1, 2,3]], [[5, 6, 7],[5, 4, 3]], [[3, 5, 6], [4, 8, 3], [2, 3]]]  // 3

//f = [[[1, 2, 3], [2, 3, 4]], [[5, 6, 7], [5, 4, 3]], [[3,5, 6], [4, 8, 3]]]  // 3


class metodos {
    constructor(array){
        this.array = array;
    }
    dimension (){
        return this.array;
    }
    straight (){
        let arr = this.array.flat();
        return arr;
    }
    compute (){
        let arr = this.array.flat();
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
           sum += arr[i];
        }
        return sum;
    }
}

var obj = new metodos([[1,2],[2,4],[2,4]]);
console.log(obj.dimension());
console.log(obj.straight());
console.log(obj.compute());


class metod {
    constructor(palabra){
        this.palabra = palabra;
    }
    compute (){
        let res = new RegExp(this.palabra);
        if(res = /[+,-,/,(,)","]{1}/ig){
            return res.test(this.palabra);
        }  else{
            return false;
        }
    }
    operation (){
        return this.palabra;
    }
}

var objet = new metod("2 + 10 / 2 - 20");
console.log((objet.compute()));
console.log(objet.operation());





