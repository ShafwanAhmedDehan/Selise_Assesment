const categorySelect = document.getElementById('Category');
const NewCatInput = document.getElementById('NewCatdiv');

function VisiableNewCat ()
{
    if (categorySelect.disabled) 
    {
        categorySelect.removeAttribute('disabled');
        NewCatInput.style.display = 'none';
    } 
    else 
    {
        categorySelect.setAttribute('disabled', 'disabled');
        NewCatInput.style.display = 'block';
    }
}