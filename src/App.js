import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 왜 useState는 함수안에 선언되어야 하는가?
// 랜더링 할때마다 실행되어야 하는 얘들은 함수안에 쓴다. 아니면 밖에 써도됨 ! 

function App() {
  // useState 초기값은 무슨 데이터 타입을 받을지 모를때는 null로 선언하는게 안전하다. 
  // 만약 0으로 선언하면 숫자타입으로 인식해서 나중에 문자타입을 받게 되면 에러남! 
  const [member, updatenum] = useState(true);
  const sang = member ? 'login' : 'logout';

  return ( // return안에 식을 저장함으로 대입식 쓰면 안됨. 
            // 외부 컴포넌트가 이 식을 받아서 저장해야해서 이 안의 대입식이 필요.....
    <>
      <div className={sang} >
        {member ? 'login' : 'logout'}
      </div>
      <button onClick={() => { updatenum(!member) }}>클릭</button>
    </>
  );
}

export default App;

