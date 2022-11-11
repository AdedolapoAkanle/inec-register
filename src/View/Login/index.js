import { RegistrationAction } from "../../Actions";
import { connect } from "react-redux";
import { api } from "../../Api/api";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ state, dispatchRegistration }) => {
  const { email, password } = state;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {
      email,
      password,
    };

    const res = await api("userLogin.php", data);
    alert(res);

    if (res === true) {
      // <Route path="/login" element={<Navigate to="/menu" />} />;
      navigate("/menu");
    }
  };
  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="email"
          onChange={(e) =>
            dispatchRegistration({ ...state, email: e.target.value })
          }
        />
        <input
          type="password"
          className="input"
          placeholder="password"
          onChange={(e) =>
            dispatchRegistration({ ...state, password: e.target.value })
          }
        />

        <button className="button btn" onClick={handleSubmit}>
          login
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ form }) => ({
  state: form.registerState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRegistration: (params) => dispatch(RegistrationAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
