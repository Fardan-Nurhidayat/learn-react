export default function Content({ content, data }) {
  return (
    <div>
      <p>Page ini adalah {content}</p>
      <button onClick={() => confirm("This is from content")}>Click Me</button>
      <p>{data}</p>
    </div>
  );
}
