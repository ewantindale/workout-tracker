import { take, race, call, put } from 'redux-saga/effects';
import { 
    TIMER_START,
    TIMER_RESET,
    TIMER_STOP,
    TIMER_INCREMENT,

} from './actions';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function* saga_increment() {
    yield call(delay, 1000);
    yield put({type: TIMER_INCREMENT});
    return true;
}

export default function* watcherSaga() {
    while (true) {
        let cancelTask;

        yield take(TIMER_START);
        
        while (!cancelTask) {
          const {start, cancel} = yield race({
            start: call(saga_increment),
            cancel: take([TIMER_STOP, TIMER_RESET])
          });
    
          cancelTask = cancel;
        }
    }
}