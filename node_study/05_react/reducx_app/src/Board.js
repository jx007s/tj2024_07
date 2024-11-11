import {Provider} from 'react-redux'
import MyStore from './MyStore';
import BoardAdd from './BoardAdd';
import BoardList from './BoardList';

function Board(props) {
    return (
        <div>
            <h2> Board 이지롱</h2>
            <Provider store={MyStore}>
                <BoardAdd/>
                <hr/>
                <BoardList/>
            </Provider>
        </div>
    );
}

export default Board;