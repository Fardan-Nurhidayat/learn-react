const Students = [
  { name: "Fardan Nurhidayat", age: 20, IPK: 4.0, NIM: 123456 },
  { name: "Farhan Nurhidayat", age: 20, IPK: 3.8, NIM: 23141 },
  { name: "Firdaus Nurhidayat", age: 20, IPK: 3.5, NIM: 41519 },
];

export default function StudentsList() {
  const StudentList = Students.map(Student => (
    <li key={Student.NIM}> {Student.name} </li>
  ));

  return <ul> {StudentList}</ul>;
}
