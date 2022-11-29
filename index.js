// Write your solution in this file!
// function updateEmployeeWithKeyAndValue
var employee ={}
employee.name="Martin"
employee.address="88888 Moringa Institute"

function updateEmployeeWithKeyAndValue(employee, key, value) 
{
  const newUpdatedObject = { ...employee };
  newUpdatedObject[key] = value;
  return newUpdatedObject;
}

const updated_data = updateEmployeeWithKeyAndValue
(
  employee,
  "newName",
  "MK SACCO LIMITED"
);

employee.name;
// answer is Martin

updated_data.newName;
// answer is "MK SACCO LIMITED"

//NUMBER TWO
// function destructivelyUpdateEmployeeWithKeyAndValue
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) 
{
  employee[key] = value; 
  return employee;
}

const newUpdate= destructivelyUpdateEmployeeWithKeyAndValue(employee, "newName", "new street address");

newUpdate;
// answer is {
//   name: 'Martin',
//   address: '88888 Moringa Institute',
//   newName: 'new street address'
// }

newUpdate.newName;
// answer is new street address


//NUMBER THREE
// function deleteFromEmployeeByKey

delete employee.name;
// answer is { address: '88888 Moringa Institute', newName: 'new street address' }


//NUMBER FOUR
// function destructivelyDeleteFromEmployeeByKey

function destructivelyDeleteFromEmployeeByKey(employee,key,value)
{
    const removeProp = key;
    return { [removeProp]: remove, ...rest } = employee;
}

const newUpdateData= destructivelyDeleteFromEmployeeByKey(employee, "name", "new street address");
newUpdateData; 
// answer is { address: '88888 Moringa Institute', newName: 'new street address' }
