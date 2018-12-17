import {combineReducers} from 'redux';
import some from './someReducer';//импортируем сюда все редьюсоры

const rootReducers=combineReducers({
    some:some,//перечисляем здесь все наши импортированные редьюсоры
})

export default rootReducers;
