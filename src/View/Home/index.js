import { Link } from "react-router-dom";
import { RegistrationAction } from "../../Actions";
import { connect } from "react-redux";
import { api } from "../../Api/api";

const Home = ({ state, dispatchRegistration }) => {
  const { name, email, password } = state;

  const handleSubmit = async () => {
    const data = {
      name,
      email,
      password,
    };
    console.log(data);

    const res = await api("registerUser.php", data);
    alert(res);

    //   dispatchRegistration("");
  };

  return (
    <div className="form">
      <div className="header">Register</div>
      <input
        type="text"
        className="input"
        placeholder="name"
        onChange={(e) =>
          dispatchRegistration({ ...state, name: e.target.value })
        }
      />
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
      {name} {email} {password}
      <button className="button btn" onClick={handleSubmit}>
        submit
      </button>
      <Link className="arrow" to="/">
        Login?
      </Link>
    </div>
  );
};
const mapStateToProps = ({ form }) => ({
  state: form.registerState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRegistration: (params) => dispatch(RegistrationAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
