export function countPositivesSumNegatives(input: any) {
  
  let out: Array<number>;
  
  input.filter((number) => {
    if(number > 0){
      out = number;
      
    }
    
  });
  return out.reduce((p, c) => p + c, 0);
}

countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);//?