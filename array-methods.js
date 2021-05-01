'use strict'

class Methods {

    range(start, end, interval = 0) {
        let arr = [];
        interval = interval > 0 ? interval-1 : 0
        for (let i = start; i < end; i++) {
             arr.push(i)
             i+=interval;
        }
        return arr
    }
    randInt(start, end) {
        end += 1;
        return this.rand_array(start, end)[0]
    }
    random_array(start, end) {
        let arr = [],
            difference = end - start,
            generated_num;
        while (arr.length < difference) {
            generated_num = Math.floor(Math.random() * end);
            if (!arr.includes(generated_num)) {
                arr.push(generated_num)
            }
        }
        return arr
    }
    shuffle(arr) { 
        let array = [];
        let k = this.random_array(0, arr.length);
        for (let i = 0; i < k.length; i++) {
            array.push(arr[k[i]])
        }
        return array
    }
    print(...args) {
        if (args.length > 1) {

        }
    }
    sample(arr, req) {
        arr = this.shuffle(arr);
        let i = 0,
            array = [];
        while (i < req) {
            array.push(arr[i])
                ++i
        }
        return array
    }
    reverse(arr){
        let array = [] ;
        for (let i = arr.length-1 ; i >= 0 ; --i){
            array.push(arr[i])
        }
        return array
    }

}

const _class_ = new Methods();

const range = (start, end, interval = 0) => _class_.range(start, end, interval);
const randInt = (x, y) => _class_.randInt(x, y);
const shuffle = arr => _class_.shuffle(arr);
const sample = (arr, req = arr.length) => _class_.sample(arr, req);
const reverse = arr => _class_.reverse(arr);


try{
    module.exports = { range , randInt , shuffle , sample , reverse }
}catch(e){console.log('package used for cgi support :-) ')}
