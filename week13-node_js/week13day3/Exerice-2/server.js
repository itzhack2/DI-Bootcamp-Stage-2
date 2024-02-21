
fetch("https://jsonplaceholder.typicode.com/users")
.then((res)) => res.json())
.then((data)=>{
response.send(data);
})