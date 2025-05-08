function formatString(input: string, toUpper?: boolean): string  {
if(toUpper === true || toUpper === undefined) {
   const inputStringU = input.toUpperCase();
   return inputStringU;
}else {
    const inputStringL = input.toLowerCase();
    return inputStringL;
}
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]  {

 const ratingUpOrEqual4 = items.filter(item=> item.rating>=4)
 return ratingUpOrEqual4;

    
}




function concatenateArrays<T>(...arrays: T[][]): T[] {
const concatArrays = (arrays).reduce((accumulator, current)=> accumulator.concat(current));
return concatArrays; 
}



class Vehicle{
   private _make:string;
   public year:number;

  constructor( _make:string,  year:number){
 this._make= _make;
 this.year = year;

   }
getInfo(){
   console.log(`Make: ${this._make}, Year: ${this.year}`) 
}

}

class Car extends Vehicle{
    private _model:string;
    constructor(_make:string,  year:number,_model:string){
       
        super(_make, year)
        this._model=_model;

    }
    getModel(){
        console.log(`Model: ${this._model}`)
    }
}



function processValue(value: string | number): number{
    if(typeof value === "string")
    {
       return value.length;
    } 
  else{
        return  value*2;
    }
}




interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
if(products.length !== 0){
  let heigestPrice = products[0];
       for(const product of products){
       if(product.price>heigestPrice.price)
        heigestPrice = product;
        }
return heigestPrice;
}

else{
    return null;
}
  }

 
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day == Day.Saturday || day ==Day.Sunday ){
        return "weekend";
    }else{
        return "Weekday"
    }
  }

    

async function squareAsync(n: number): Promise<number>{

return new Promise<number>((resolve,reject)=>{
   if(n >=0) {
    setTimeout(()=>{
        resolve(n*n);
    },1000)
  
   }else{
reject('Error: Negative number not allowed')
   }
})

}


