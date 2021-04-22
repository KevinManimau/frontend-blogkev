import './App.css';
import Routes from '../config/Routes';
import { Provider } from 'react-redux';
import { Store } from '../config';

function App() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}

export default App;
