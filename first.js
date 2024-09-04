// create the global variable

var searchtext = document.querySelector(".search");

const addbutton = document.querySelector(".add-button");

let taskarray = [];

var arrayliist;

const mainulbox = document.querySelector(".main-ul-box");

const pendingbox = document.querySelector(".containing-box");

const completebox = document.querySelector(".containing-box2");

// function to add array elements in the taskarray

function addtask(taskname) {
  const arrayelement = {
    name: taskname,
    status: false,
  };
  taskarray.push(arrayelement);

  arrayliist = document.createElement("li");

  arrayliist.classList.add("main-ul");

  mainulbox.appendChild(arrayliist);

  const headinglist = document.createElement("h1");

  headinglist.classList.add("heading-div");

  arrayliist.appendChild(headinglist);

  headinglist.textContent = taskname;

  webdisplay(headinglist, arrayliist);

  searchtext.value = " ";
}

// function for the display content on webpages

function webdisplay(headinglist, arrayliist) {
  // first of all create medium for the text content of webpage

  // now create the pending and complete button in the div of btnbox

  const btnbox = document.createElement("div");

  btnbox.classList.add("parent-btn");

  arrayliist.appendChild(btnbox);

  const pendingbtn = document.createElement("button");

  pendingbtn.classList.add("pending-btn");

  pendingbtn.textContent = "pending";

  btnbox.appendChild(pendingbtn);

  pendingbtn.addEventListener("click", function () {
    const pendinglist = document.createElement("li");

    pendinglist.classList.add("pending-list");

    const pendingheading = document.createElement("h1");

    pendingheading.classList.add("pending-heading");

    pendingheading.textContent = headinglist.textContent;

    pendinglist.appendChild(pendingheading);

    pendingbox.appendChild(pendinglist);

    arrayliist.remove();
  });

  const completebtn = document.createElement("button");

  completebtn.classList.add("complete-btn");

  completebtn.textContent = "complete";

  btnbox.appendChild(completebtn);

  completebtn.addEventListener("click", function () {
    const completelist = document.createElement("li");

    completelist.classList.add("complete-list");

    const completeheading = document.createElement("h1");

    completeheading.classList.add("complete-heading");

    completeheading.textContent = headinglist.textContent;

    completelist.appendChild(completeheading);

    completebox.appendChild(completelist);

    arrayliist.remove();
  });

  // function for the button on clicking
}

addbutton.addEventListener("click", function () {
  if (searchtext.value.trim()) {
    addtask(searchtext.value);
  } else {
    searchtext.style.border = "1px solid red";
  }
});
