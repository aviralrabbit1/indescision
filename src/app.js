import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/Indecision';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const Layout = () => {
//     return (
//         <>
//             <h2>Header</h2>
//             <hr/>
//             <Indecision/>
//             <hr/>
//             <h2>Footer</h2>
//         </>
//     )
// }

ReactDOM.render(<Indecision/>, document.getElementById('app'));
