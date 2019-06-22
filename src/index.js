var _ = require('lodash');  /*CommonJS 스펙의 모듈 가져오기*/


//default import 방법 : {} 없이, 이름을 임의로 변경 가능
import aaa from'./js/cubic';

// named import : {} 안에 이름을 명시
import {area, circumference} from'./js/circle';

import './style.css';
import './hello.scss';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

console.log('webpack test');
console.log(area(5), circumference(10));
console.log('-------------------------------------');
console.log(aaa(20));

document.body.appendChild(component());