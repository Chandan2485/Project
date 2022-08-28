


function clos(){
    let n="netflix"
  return  function (){
        console.log(n)
    }
}

let x=clos()
console.log(x)