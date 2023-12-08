import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
function App() {
  return (
    <Provider store={store}>
    <div>
      {/* <h1 className='font-bold'>helllooo</h1> */}
    <Head/>
    <Body/>
    </div>
    </Provider> 
  );
}

export default App;
