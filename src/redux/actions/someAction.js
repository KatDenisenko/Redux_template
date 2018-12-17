 export const add = (e)=> {
     type: 'add';//название type должно совпадать с  case 'add' в reducor.
     payload: e.target.value;
 }

 export const filter = (number) => {//функция
     type: 'filter';
     payload:number;
 }

 export const clear={//объект
     type:'clear'
 }