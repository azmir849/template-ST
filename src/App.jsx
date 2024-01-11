import './asset/css/style.css';

function App() {

  return (
    <>
    {/* <div className="parent-div">
      <div className="child-div-1">
          <p>Chield div 1</p>
      </div>
      <div className="child-div-2">
          <p>Chield div 2</p>
      </div>
    </div> */}

    <div className="top-nav">
      <div className="left-element">
        <p>Logo</p>
      </div>
      <div className="right-element">
        <ul className='right-eleemnt-lists'>
          <li>facebook</li>
          <li>youtube</li>
          <li>instagram</li>
        </ul>
      </div>
    </div>

    <div className="hero-section">
      <div className="hero-left">
        <p>Hero left content</p>
      </div>
      <div className="hero-right">
        <p>Hero right content</p>
      </div>
    </div>
 

    </>
  )
}

export default App
