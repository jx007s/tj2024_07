import {Provider} from 'react-redux'
import MyStore from './MyStore';
import MyCounter from './MyCounter';
import Board from './Board';

function App() {
  return (
    <div>
      <h1>리덕스 이지롱</h1>
      <Provider store={MyStore}>
          <MyCounter/>
      </Provider>

      <Board/>

    </div>
  );
}

export default App;
