import './App.css'

function App() {

  let name = "Mandip";

  const click = ()=>{
    name = "Sandip"
    document.querySelector("span").innerHTML = name;
  }

  return (
    <>
      <div>
        <p> <span>{name}</span> is cool.</p>
        <button onClick={click}>Click</button>
      </div>
    </>
  )
}

export default App
