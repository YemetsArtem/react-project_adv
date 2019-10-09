import { appName } from '../config'
import { Record, OrderedMap } from 'immutable'
import { call, all, put, take, takeEvery } from 'redux-saga/effects'
import { createSelector } from 'reselect';
import firebase from 'firebase'
import { fbDataToEntities } from './utils';
 
// Constants
export const moduleName = 'events';
const prefix = `${ appName }/${ moduleName }`
export const FETCH_ALL_REQUEST = `${ prefix }/FETCH_ALL_REQUEST`;
export const FETCH_ALL_SUCCESS = `${ prefix }/FETCH_ALL_SUCCESS`;
 
// Reducer
const ReducerRecord = Record({
    entities: new OrderedMap({}),
    loading: false,
    loaded: false
});

export const EventRecord = Record({
    uid: null,
    title: null,
    url: null,
    where: null,
    when: null,
    month: null,
    submissionDeadline: null
})

export default function reducer(state = new ReducerRecord(), action) {
    const { type, payload } = action;
 
    switch (type) {
        case FETCH_ALL_REQUEST:
            return state.set("loading", true);
        
        case FETCH_ALL_SUCCESS:
            return state
                .set("loading", false)
                .set("loaded", true)
                .set("entities", fbDataToEntities(payload, EventRecord))
 
        default:
            return state;
    }
}
 
// Actions Creators
export function fetchAll() {
    return {
        type: FETCH_ALL_REQUEST
    }
}

// Selectors
export const stateSelector = state => state[moduleName];
export const entitiesSelector = createSelector(
    stateSelector, state => state.entities
);
export const eventListSelector = createSelector(entitiesSelector, entities => (
    entities.valueSeq().toArray()
));

// Sagas
export const fetchAllSaga = function * () {
    while(true) {
        yield take(FETCH_ALL_REQUEST);

        const ref = firebase.database().ref("events");
        const data = yield call([ref, ref.once], "value");

        yield put({
            type: FETCH_ALL_SUCCESS,
            payload: data.val()
        })
    }
}
 
export const saga = function* () {
    yield all([
        fetchAllSaga()
    ])
}