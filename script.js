document.addEventListener("DOMContentLoaded", function() {
  
  const submit = document.getElementById("form");
  submit.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const checkToComplete = document.getElementById("inputBookIsComplete");
    if (checkToComplete.checked){
      addNewBookComplete();
    } else {
      addNewBook();
    }
  });
  
  const submitSearch = document.getElementById("searchBook");
  submitSearch.addEventListener("submit", function(event) {
    event.preventDefault();
    searchBook();
  });
  
  if (storageReady()) {
    loadData();
  }
});