# 1.What are some differences between interfaces and types in TypeScript?
------------------------------------------------------------------------
Interfaces and types both are used to describe the structure of data but they have some key differences. 
An interface is mainly used to define the structure of an object.Like:  

interface User{  
    name : string;  
    age : number;  
    }  
A type on other hand is more flexible. It can define not only objects but also union types, primitives types,tuples or combinations of multiple types.  
type User1 = {     
    name : string;  
    age : number;
}

One major difference is interfaces support declaration merging, that means if we declare the same interfsce multiple times TypeScript will combine them.For example, if we write   
interface Person{  
name : string;  
}  
and later again write,  
interface Person{  
age : number;  
}  
there the final Person will have both name and age properties. But with type, this is not possible to declare it twice will give an error.  
type Person = {  
  name : string;  
};  
type Person = {  
  age : number;  
}; //  will give Duplicate identifier error  
Another difference is how they extends others types.An interface uses the 'extends' keyword, while a type uses intersections(&).For instance:  
in interface:  
interface UserWithRole extends User{  
    role : string;  
}  
in type:  
type UserWithRole = User & {role: string}   
So there both work the same, but the syntax is different. Also type is the only one that can create union types like:  
type User = "student" | "developer";  
But we cannot do this with interfacer.  
So, for primitive types, union types, and tuple types should use type and for object structures both type and interface can be used but interface is preferrd in especially for classes or when we expect to exten it later.  

  
# 2.What is type inference in TypeScript? Why is it helpful?
Type inference means TypeScript guesses or understand the type of a variable or function automatically based on the provided value . We don’t always need to write the type TS is smart and figures it out for us.Like:  
let name = "Pearl";   
let age = 25;   
There we didn’t write : string or : number for name or age, TypeScript automatically understands their types from the assigned values.And TypeScript understands it like this, let username: string = "Pearl"; let age: number = 25; If later we want to assign name = 12, TypeScript will say it's not a string  
function add(a: number, b: number) {  
  return a + b;  
}  
There we didnot mention which type return will provide from this add function , Typescript will return as number automatically.  
#### **So**,Type Interence is heplful because we donot have to write the same types again and again which makes code cleaner and faster to write. As we meant to pass a number, but passed a string by mistake TypeScript warns us.  
  

# 3.How does TypeScript help in improving code quality and project maintainability?
When building real-world projects, especially in teams, writing reliable and maintainable code is essential. TypeScript plays a big role in making JavaScript code safer, clearer, and easier to manage. When we works on different file by import it will give automatic suggesstion.We catch errors while writing code, not after running the app.   
if we write like, let age: number = "twenty"; TS will give error and say string is not assignable to number. So, it stops this mistake early. If we rename a function or property, TypeScript shows where it’s used and helps to update safely.  
So we can say TypeScript helps developers catch errors early, write clean and consistent code, enjoy better tooling support, and maintain large projects with confidence. It makes code safer, more scalable, and easier to understand all of which are essential for long-term project success.  


    




