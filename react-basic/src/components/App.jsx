import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Button from "./Button";
import List from "./List";
import StudentsList from "./List";
const App = () => {
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <Header list={["Home", "About", "Contact"]} value="React Basic" />
      <StudentsList />
      <Content content="Hello World" data={data.name} />
      <Button title="Click Me" />
      <Footer />
    </div>
  );
};

const data = {
  name: "John",
  age: 30,
  sekolah: {
    nama: "SMK Telkom Malang",
    jurusan: "Rekayasa Perangkat Lunak",
  },
};
const {
  name,
  age,
  alamat,
  sekolah: { nama: namaSekolah },
} = data;

console.log(name, age, namaSekolah);
export default App;
