function IsValid(AddCatagory)
{
    let check = 0;
    const UrlPattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
    console.log(AddCatagory.Category.value);
    if(AddCatagory.Title.value === "" || AddCatagory.URL.value === "" || (AddCatagory.Category.value === "" && AddCatagory.NewCat.value === ""))
    {
        if(AddCatagory.Title.value === "")
        {
            document.getElementById("ValidationTitle").innerHTML = "Please Enter a Title";
        }
        else
        {
            document.getElementById("ValidationTitle").innerHTML = "";
        }
        if(AddCatagory.URL.value === "")
        {
            document.getElementById("ValidationURL").innerHTML = "Please Enter URL";
        }
        else
        {
            document.getElementById("ValidationURL").innerHTML = "";
        }
        if(AddCatagory.Category.value === "" && AddCatagory.NewCat.value === "")
        {
            document.getElementById("ValidationCatagory").innerHTML = "Please Choose/Enter Category";
        }
        else
        {
            document.getElementById("ValidationCatagory").innerHTML = "";
        }
        return false;
    }
    else
    {
        if((AddCatagory.Title.value).length > 30)
        {
            document.getElementById("ValidationTitle").innerHTML = "Title must be at maximum 30 characters";
            check = 1;
        }
        if(UrlPattern.test(AddCatagory.URL.value) === false)
        {
            document.getElementById("ValidationURL").innerHTML = "Invalid URL";
            check= 2;
        }
        if(check == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}