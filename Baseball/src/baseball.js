import {getRandomInt} from "./util";
import 'babel-polyfill';

export class Baseball {
    constructor(digit = 3) {
        this.digit = digit;
        this.answer = this.makeAnswer();
    }

    makeAnswer() {
        const answer = [], numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let max, index;
        for (let i = 0; i < this.digit; i++) {
            max = 9 - i;
            index = getRandomInt(0, max);
            answer.push(numbers[index]);
            numbers.splice(index, 1);
        }
        console.log("answer:" + answer);
        return answer;
    }

    getResult(...inputs) {
        let input = [].concat(...inputs);
        let result = "",
            strike = 0,
            ball = 0;
        input.forEach((v, i) => {
            if (v === this.answer[i]) {
                strike++
            } else if (this.answer.indexOf(v) > -1) {
                ball++;
            }
        });
        if (strike === 0 && ball === 0) {
            result = "OUT";
        } else {
            result = `${strike}S${ball}B`;
        }
        return result;
    }
}