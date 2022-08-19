let employee = {
    name: 'Sam',
    streetAddress: '12 Broadway',
}

// returns an employee with the original key value pairs and the new key value pair
// it does not modify the original employee
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {
        ...employee,
        name: 'Sam',
        streetAddress: "11 Broadway",
    }
    return employee, newEmployee;
}

//  updates employee and returns the entire updated employee
function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = '12 Broadway';
    return employee;
}

// deletes `key` from a clone of employee and returns the new employee
function deleteFromEmployeeByKey(employee, key){
    let delEmployee = {
        ...employee
    }
    delete delEmployee.name;
    return delEmployee;
}

// modifies the original employee & returns employee without the deleted key/value pair
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}