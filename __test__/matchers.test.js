
describe('common comparators', () => {

   const user = {
       firstName: 'Jeremy',
       lastName: 'Reyes'
   };

   const userTwo = {
       firstName: 'Jeremy',
       lastName: 'Reyes'
   };


   test('Equality of elements', () => {
       expect(user).toEqual(userTwo);
   });

   /*
   test('is not equals of elements', () => {
       expect(user).not.toEqual(userTwo);
   });*/
});