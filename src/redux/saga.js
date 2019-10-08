import { saga as peopleSaga } from '../ducks/people'
import { saga as authorizationSaga } from '../ducks/authorization'
import { saga as eventsSaga } from '../ducks/events'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        peopleSaga(),
        authorizationSaga(),
        eventsSaga()
    ])
}