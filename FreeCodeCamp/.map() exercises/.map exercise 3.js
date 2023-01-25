// Capitalize each of an array of names.

function capitalizeNames(arr){
    return arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase());
}
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]