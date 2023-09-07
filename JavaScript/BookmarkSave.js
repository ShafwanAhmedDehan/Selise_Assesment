
function handleValidation()
{
    if (IsValid(document.forms["AddCatagory"])) 
    {
        return HandleSubmit();
    }
    return false;
}

function HandleSubmit()
{
    const title = document.getElementById('Title').value;
    const url = document.getElementById('URL').value;
    console.log(title,url);
    let category = "";
    if (document.getElementById('Category').value != "")
    {
        category = document.getElementById('Category').value;
    }
    else
    {
        category = document.getElementById('NewCat').value;
    }

    const BookmarkDataFromForm = 
    {
        title,
        url,
        category,
    };

    const BookMarkData = JSON.stringify(BookmarkDataFromForm);
    console.log (BookMarkData);
    localStorage.setItem('bookmark', BookMarkData);
    document.location = '../ViewDesign/BookmarkManager.html';
    return false;
}
