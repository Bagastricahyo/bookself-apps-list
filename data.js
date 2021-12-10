const STORAGE_KEY = "Book_Self";

let books = [];

function storageReady() {
  if (typeof(storage) === undefined){
    alert("Browser Anda tidak mendukung penyimpanan");
    return false;
  }
  return true;
}

function saveData () {
  const dataSaved = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, dataSaved);
  
  console.log("Data buku berhasil disimpan");
}

function loadData () {
  const dataLoaded = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(dataLoaded);
  
  if (data !== null)
  books = data;
  
  refreshData(); 
}

function updateData () {
  if(storageReady())
  saveData();
}


function convertBookData (title, author, year, isComplete) {
  return {
    id: +new Date(),
    title,
    author,
    year,
    isComplete
  };
}

function findBook(bookId) {
  for(book of books){
    if(book.id === bookId)
    return book;
  }
  return null;
}

function findBookIndex(bookId) {
  let index = 0;
  for(book of books){
    if (book.id === bookId)
    return index;
    
    index++;
  }
  return -1;
}