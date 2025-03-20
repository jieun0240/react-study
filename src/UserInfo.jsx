// function UserInfo(props) {
//     return <div>
//         <div>name : {props.name}</div>
//         <div>age : {props.age}</div>
//     </div>
// }

// 파라미터에서 객체 비구조화 할당을 수행
function UserInfo({name, age}) {
    return <div>
        <div>name : {name}</div>
        <div>age : {age}</div>
    </div>
}

export default UserInfo