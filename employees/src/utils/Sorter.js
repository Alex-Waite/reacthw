
function SortByName(EmployeesArray, isAscending) {

    // copy rom stack overflow user RiaD with minor edits https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
    let AscDescEmp = EmployeesArray.sort(function(a, b) {
        if (isAscending === true) {
            
            if(a.firstname < b.firstname) { return -1; }
            if(a.firstname > b.firstname) { return 1; }
            
        } else if (isAscending === false) {
    
            if (a.name.first > b.name.first) { return -1; }
            if (a.name.first < b.name.first) { return 1; }
    
        } else { console.log(`Something has gone wrong with sorting order => ${isAscending}`); return 0;}
    })

    if (isAscending === true) {
        return {Employees : AscDescEmp, isAscending: true};
    } else {
       return {Employees : AscDescEmp, isAscending: false};
    }
}

export default SortByName
