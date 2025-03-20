//hook => 함수인데, 이름이 use로 시작하는 특수한 역할을 하는 함수
// useState, userEffect, useRef 등 훅이 존재 (물론 다야한훅이 있음)

import { useState } from 'react'

function UseStateStudy() {
    // useState(초기값)
    // 초기에는 [0, 세터함수] <= 이렇게 생긴 배열 반환
    // 배열 비구조화 할당을 함
    const [count, setCount] = useState(0)

    return <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(c => c + 1)}> + </button>
        <button onClick={() => setCount(c => c - 1)}> - </button>
        <button onClick={() => setCount(c => c = 0)}> reset </button>
    </div>
}

export default UseStateStudy