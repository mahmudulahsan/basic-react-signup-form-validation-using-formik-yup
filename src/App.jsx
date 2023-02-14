import landing_img from "./assets/landing_img.png";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 d-flex justify-content-center">
          <img className="img-fluid" src='https://cdn-icons-png.flaticon.com/512/6028/6028631.png' alt="langding image" />
        </div>
      </div>
    </div>
  );
}

export default App;
