import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen bg-grey-100 flex justify-center items-center">
        <div className="card shadow-xl w-96">
          <div className="card-body">
            <h2 className="card-title text-center">Weather Radio</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value="Name of city or town"
              />
            </div>
            <div>
              <button className="btn btn-primary">
                Lookup Weather
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
