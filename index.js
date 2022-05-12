a = [1,2]  // 1

b = [[1,2],[2,4]]  // 2

c = [[1,2],[2,4],[2,4]]  // 2

d = [[[3,4],[6,5]]]  // 3

e = [[[1, 2,3]], [[5, 6, 7],[5, 4, 3]], [[3, 5, 6], [4, 8, 3], [2, 3]]]  // 3

f = [[[1, 2, 3], [2, 3, 4]], [[5, 6, 7], [5, 4, 3]], [[3,5, 6], [4, 8, 3]]]  // 3


class metodos {
    constructor(array){
        this.array = array;
    }
    dimension (){
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            for (let j = 0; j < array.length; j++) {
                const elemen = array[j];
                
            }
        }
    }
    straight (){
        return this.array;
    }
    compute (){
        return this.array;
    }
}

var obj = new metodos([[1,2],[2,4],[2,4]]);
console.log(obj.dimension());
console.log(obj.straight());
console.log(obj.compute());






