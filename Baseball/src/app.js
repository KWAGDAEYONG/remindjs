import { Baseball } from "./baseball";
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';


let baseball = new Baseball();

$(function(){
    const mainEl = $('main'),
        resultBoardEl = $('#result-board'),
        buildresultTemplate = (guess, result) => `<li class="list-group-item">${guess}<span class="badge">${result}</span></li>`;

    $('#start-btn').click( e => {
        const digit = $('#digit').val();
        if (digit) {
            startGame(digit);
            mainEl.addClass('started');
        } else {
            alert('자릿수를 선택해주세요');
        }
    })

    function startGame(digit) {
        let baseball = new Baseball(digit);
        console.log(baseball.answer);
        $('input#guess').keypress(e => {
            if (e.which == 13) {
                let val = $(e.currentTarget).val(),
                    guessNumArr = val.split('').map(v => Number(v)),
                    result = baseball.getResult(guessNumArr),
                    resultEl = buildresultTemplate(val, result);
                $('#result-board').append(resultEl);
                if (result === '3S0B') {
                    alert(this.value + " 정답을 맞췄습니다!");
                }
                $(e.currentTarget).val('');
            }
        });
    }

    function resetGame() {
        mainEl.removeClass('started');
        resultBoardEl.empty();
        $('input#guess').unbind('keypress');
    }
});