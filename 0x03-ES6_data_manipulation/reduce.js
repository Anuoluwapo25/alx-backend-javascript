export default function getStudentIdsSum(students) {
  let idArray = [];
  let initialValue = 0;
  let totalId;

  for (let i = 0; i < students.lenght; i++) {
    const arraylist = idArray[i];
    idArray.push(arraylist.id)
	}
  return totalId = idArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
}
