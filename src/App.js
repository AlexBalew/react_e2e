// import React, { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('');

//   const onClick = () => setToggle(prev => !prev);

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100)
//   }, [])

//   return (
//     <div>
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle === true && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={{ color: 'blue' }}>data</div>}
//       <h1>Hi Jack</h1>
//       <button data-testid="toggle-btn" onClick={onClick}>click me</button>
//       <input onChange={e => setValue(e.target.value)} type="text" placeholder='input text here...' />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import AppRouter from "./router/AppRouter";
// import Users from './components/users/Users'

const App = () => {
    return (
        <div>
            <AppRouter />
            {/* <Users /> */}
        </div>
    );
};

export default App;
