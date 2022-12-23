// Hide elements on page reload / start

function hideElements(){
    document.getElementById("imgCheckFile").style.display = 'none';
    document.getElementById("imgFileSelected").style.display = 'none';

}

let btnCheckFile = document.getElementById("btnCheckFile");

// If no file is selected throw a message indicating so, otherwise display a check image indicating that the file selected is OK.
// You can also display a red message instead of an alert, but today is a bad day and I don't want to impement it. 🤣

btnCheckFile.onclick = function () {
    if(inputFile = document.getElementById("inputFile").value == "")
    {
        alert("Please select a file")
    } else {
        document.getElementById("imgCheckFile").style.display = 'inline-flex';

    }
  };
