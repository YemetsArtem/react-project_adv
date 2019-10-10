import { appName } from '../config'
import { Record, OrderedMap } from 'immutable'
import { put, takeEvery, call, all } from 'redux-saga/effects'
import {reset} from 'redux-form'
import firebase from 'firebase'
import {createSelector} from 'reselect'
import {fbDataToEntities} from './utils'

const ReducerState = Record({
    entities: new OrderedMap({}),
    loading: false
});

const PersonRecord = Record({
    uid: null,
    firstName: null, 
    lastName: null,
    email: null
});

// Actions
export const moduleName = "people";
const prefix = `${appName}/${moduleName}`

export const FETCH_ALL_REQUEST = `${prefix}/FETCH_ALL_REQUEST`
export const FETCH_ALL_SUCCESS = `${prefix}/FETCH_ALL_SUCCESS`
export const FETCH_ALL_ERROR = `${prefix}/FETCH_ALL_ERROR`
export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`
export const ADD_PERSON_SUCCESS = `${prefix}/ADD_PERSON_SUCCESS`
export const ADD_PERSON_ERROR = `${prefix}/ADD_PERSON_ERROR`

//Reducer
export default function reducer(state = new ReducerState(), action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_ALL_REQUEST:
        case ADD_PERSON_REQUEST:
            return state.set('loading', true)

        case ADD_PERSON_SUCCESS:
            return state
                .set('loading', false)
                .setIn(['entities', payload.uid], new PersonRecord(payload))

        case FETCH_ALL_SUCCESS:
            return state
                .set('loading', false)
                .set('entities', fbDataToEntities(payload, PersonRecord))

        default:
            return state;
    }
}

//Action Creator
export function addPerson(person) {
    return {
        type: ADD_PERSON_REQUEST,
        payload: person
    }
}

export function fetchAllPeople() {
    return {
        type: FETCH_ALL_REQUEST
    }
}

// Selectors
export const stateSelector = state => state[moduleName];
export const entitiesSelector = createSelector(
    stateSelector, 
    state => state.entities
);
export const idSelector = (_, props) => props.uid;
export const peopleListSelector = createSelector(
    entitiesSelector, 
    entities => entities.valueSeq().toArray()
);
export const personSelector = createSelector(
    entitiesSelector, 
    idSelector, 
    (entities, id) => entities.get(id)
);

// Sagas
export const addPersonSaga = function * (action) {
    const peopleRef = firebase.database().ref('people')
    
    try {
        const ref = yield call([peopleRef, peopleRef.push], action.payload)

        yield put({
            type: ADD_PERSON_SUCCESS,
            payload: {...action.payload, uid: ref.key}
        })

        yield put(reset('people'));
    } catch (error) {
        yield put({
            type: ADD_PERSON_ERROR,
            error
        })
    }
}

export const fetchAllSaga = function * () {
    const peopleRef = firebase.database().ref('people')

    try {
        const data = yield call([peopleRef, peopleRef.once], 'value')

        yield put({
            type: FETCH_ALL_SUCCESS,
            payload: data.val()
        })
    } catch (error) {
        yield put({
            type: FETCH_ALL_ERROR,
            error
        })
    }
}

export const saga = function * () {
    yield all([
        takeEvery(ADD_PERSON_REQUEST, addPersonSaga),
        takeEvery(FETCH_ALL_REQUEST, fetchAllSaga)
    ])
}