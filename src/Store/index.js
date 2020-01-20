import createSagaMiddleware from 'redux-saga';
import createStore from './CreateStore';
import rootReducer from './Ducks';
import rootSaga from './Sagas';

const middlewares = createSagaMiddleware({ sagaMonitor: null });
const Store = createStore(rootReducer, [middlewares]);

middlewares.run(rootSaga);

export default Store;
