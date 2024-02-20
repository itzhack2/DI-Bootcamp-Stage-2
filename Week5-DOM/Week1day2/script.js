//-------🌟 Exercise 1 : Users-------
// const container = document.getElementById("container")
// console.log('container:', container);
// document.querySelector(".list").children[1].textContent = "Richard"
// const list = document.querySelectorAll(".list")
// list.forEach(list => list.firstElementChild.textContent = "ben")
// list[1].children[1].remove()
// list.forEach(list => list.classList.add("student_list"))
// const firstUl = document.querySelector('ul.list.student_list')
// firstUl.classList.add("university","attendance")
// ------🌟Exercise 2 : Users And Style--------

// const div=document.querySelector("div")
// document.getElementById("d").style.background = "rgb(173,216,230)";

// const ul = document.querySelector("ul")
// console.log(ul);
// ul.firstElementChild.style.display="none"
// ul.lastElementChild.style.border="1px solid red"

// const body= document.querySelector("body")
// console.log(body)
// body.style.fontSize="30px"

// const div = document.querySelector("div")
// console.log(div);

// const divBackground = getComputedStyle(div).backgroundColor
// const users = document.querySelectorAll("il")
// console.log('users:', users) 

// if (divBackground === "rgb(173,216,230)"){
// console.log("this is lightblue !");
// console.log(`hello ${users[0] .textContent}and ${users[1].textContent}!`);
// }
// --------🌟 Exercise 3 : Change The Navbar-------

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method
// const element = document.getElementById("navBar");
// console.log('element:',element)
// navbar.setAttribute("id","socialNetworkNavigation");
// First, create a new <li> tag (use the createElement method).
// const addli = document.createElement("li")
// console.log("li:", li );
// Create a new text node with “Logout” as its specified text.
//  const Logout = document.createTextNode("Logout")
//  console.log('Logout:', Logout);
//  Append the text node to the newly created list node (<li>).
// li.appendChild(Logout)
// console.log('li:', li );
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// const firstLi = ul?.firstElementChild
// const lastLi = ul?.lastElementChild

// console.log('firstLi:', firstLi);
// console.log('lastLi:', lastLi);
// --------🌟 Exercise 4 : My Book List-------
// const books = [
//     {
//       title: "Harry Potter 1",
//       author: "JK ROWLING",
//       image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
//       alreadyRead: true,
//     },
//     {
//       title: "Harry Potter 2",
//       author: "JK ROWLING",
//       image: "https://prodimage.images-bn.com/pimages/9780545139700_p0_v5_s1200x630.jpg",
//       alreadyRead: false,
//     },
//   ];
  
//   const container = document.querySelector(".listBooks");
//   const table = document.createElement("table");
//   const headerRow = document.createElement("tr");
//   const thTitle = document.createElement("th");
//   const thAuthor = document.createElement("th");
//   const thimage = document.createElement("th");
//   thTitle.textContent = "Title";
//   thAuthor.textContent = "Author";
//   thimage.textContent = "Img";
//   table.style.border = "1px solid";
//   container.append(table);
//   table.append(headerRow);
//   headerRow.append(thTitle, thAuthor, thimage);
  
//   for (let i = 0; i < books.length; i++) {
//     console.log(books[i]);
//     const tr = document.createElement("tr");
//     const tdTitle = document.createElement("td");
//     const tdAuthor = document.createElement("td");
//     const tdImage = document.createElement("td");
//     if (books[i].alreadyRead) {
//       tdAuthor.style.color = "red";
//       tdTitle.style.color = "red";
//     }
//     tdTitle.textContent = books[i].title;
//     tdAuthor.textContent = books[i].author;
//     tdImage.innerHTML = `<img src='${books[i].image}' width="100px"/>`;
//     table.append(tr);
//     tr.append(tdTitle, tdAuthor, tdImage);
//   }
  
//   let obj = {
//     title: "harry potter",
//   };
  
//   console.log(obj.title);