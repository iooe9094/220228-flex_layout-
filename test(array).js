// 배열연습 1
// 공백을 기준으로 n개의 데이터가 입력된다.
// n개의 데이터를 입력의 역순으로 출력한다.
// let inputString = prompt("숫자를 입력하세요").split(" ");
// 입력 13568 -> 86531

// [배열연습 1번 내가 한 풀이]
window.onload = function() {
    let inputString = prompt("숫자를 입력하세요").split(" ").reverse();
    for(let i=0; i<inputString.length; i++)    
    document.write(inputString[i]);
    }
    
// [배열연습 1번 해설]
// window.onload = function() {
//     let inputString = prompt("숫자를 입력하세요").split(" ");
//     let result = inputString.reverse();

//     for(let i of inputString) {
//         document.write(i + " ");
//     }
// }

// 배열연습 2
// k개의 정수들이 공백으로 구분되어 입력된다
// k개의 숫자를 입력받은 순서대로 출력하고, 다 되면 한번 더 출력한다 (총 2번)
// let inputString = prompt("숫자를 입력하세요").split(" ");
// 입력 1 2 3
// 출력 1
//     2
//     3
//     1
//     2
//     3

// let inputString = prompt("숫자를 입력하세요").split(" ");

// for(let i=0; i<inputString.length; i++) {
//     document.write(inputString[i] + "<br>");
// }

// [배열연습 2번 해설]
// let inputString = prompt("숫자를 입력하세요").split(" ");
// for (let j=0; j<2; j++) {
// for (let i of inputString) {
//     document.write(i + "<br>");
// }
// }

// 배열연습 3
// k값이 입력되고, k번째 숫자가 무엇이었는지 출력한다.
// 예시 1 -> 10 9 8 7 6 5 4 3 2 1
// 예시 2 -> 3
// 출력예시 -> 8

// window.onload = function() {
//     let inputString1 = prompt("숫자를 입력하세요").split(" ");
//     let inputString2 = Number(prompt("숫자를 입력하세요"));
//     let result = inputString1[inputString2-1];
//             document.write(result + "<br>");
//         }