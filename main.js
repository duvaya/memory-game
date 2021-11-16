const cards=[
    {name:"a"},
    {name:"a"},
    {name:"b"},
    {name:"b"},
    {name:"c"},
    {name:"c"},
];
function randRange(a,b){
  return  Math.floor(Math.random() * (a-b))
}
function swap(arr, i, j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
function suffle(arr){
    for(i =0; i<100; i++){
        let a1=randRange(0, arr.length);
        let a2=randRange(0, arr.length);
        if (a1==a2){
            i--
            continue
        }
        swap(arr, a1, a2)
    }}

    console.log(cards);
    suffle(cards)
    console.log(cards);

    function test(arry,a,b) {




      while(a!=b)
      
      
      {  if (arry[a].name==arry[b].name){
            
            
            return true
        }
        else {
            return false
        }
    }}
   console.log( test(cards,2,2))