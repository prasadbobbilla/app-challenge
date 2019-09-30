document.getElementById("addButton").addEventListener('click', calculateAverage)
function calculateAverage()
{
    const students=Number(document.getElementById("students").value)
    const sections=Number(document.getElementById("sections").value)
    
    const average=students/sections;

    document.getElementById("average").value = average;
    
}