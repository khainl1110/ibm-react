import {counter} from './reducer'

test('Test reducers', () => {
    expect(
        counter(0, {type:'INCREMENT'})
    ).toEqual(1);
    
    expect(
        counter(1, {type:'INCREMENT'})
    ).toEqual(2);
    
    expect(
        counter(2, {type:'INCREMENT'})
    ).toEqual(3);
    
    expect(
        counter(1, {type:'DECREMENT'})
    ).toEqual(0);

    expect(
        counter(1, {type: 'WHATEVER'})
    ).toEqual(1);
})
