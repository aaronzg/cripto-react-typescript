import CriptoSearchForm from "./components/CriptoSearchForm"
// comment from chromebook
function App() {

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
      </div>

      <div className="content">
        <CriptoSearchForm />
      </div>
    </>
  )
}

export default App
