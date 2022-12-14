import { connect } from "react-redux";
import { RegistrationAction } from "../../Actions/index";
import { api } from "../../Api/api";
import { Link } from "react-router-dom";
import { AiOutlinePoweroff, AiOutlineHome } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import "./register.css";

const Register = ({ state, dispatchRegistration }) => {
  const { name, address, email, occupation, gender } = state;

  const handleSubmit = async () => {
    const data = {
      name,
      address,
      email,
      occupation,
      gender,
    };
    // console.log(data);

    const res = await api("index.php", data);
    alert(res);

    //   dispatchRegistration("");
  };

  return (
    <div className="body">
      <div className="nav">
        <div className="nav-text">
          <Link to={"/menu"} className="txt tooltip">
            <AiOutlineHome />
            <span className="tooltip-text">Home</span>
          </Link>
          <Link className="txt report tooltip">
            <FaRegAddressBook />
            <span className=" tooltip-text">Report</span>
          </Link>
        </div>
        <div className="power">
          <Link to={"/"} className="txt  tooltip">
            <AiOutlinePoweroff className="logout " />
            <span className="tooltip-text">Logout</span>
          </Link>
        </div>
      </div>
      <div className="form-body">
        <div className="form-container">
          <input
            type="text"
            className="form-input"
            onChange={(e) =>
              dispatchRegistration({ ...state, name: e.target.value })
            }
            placeholder="Name"
          />

          <input
            type="text"
            className="form-input"
            onChange={(e) =>
              dispatchRegistration({ ...state, address: e.target.value })
            }
            placeholder="Address"
          />

          <input
            type="text"
            className="form-input"
            onChange={(e) =>
              dispatchRegistration({ ...state, email: e.target.value })
            }
            placeholder="Email"
          />

          <input
            type="text"
            className="form-input"
            onChange={(e) =>
              dispatchRegistration({ ...state, occupation: e.target.value })
            }
            placeholder="Occupation"
          />

          <select
            name="gender "
            className="form-dropdown"
            onChange={(e) =>
              dispatchRegistration({ ...state, gender: e.target.value })
            }
          >
            <option value="" hidden className="option">
              Select gender
            </option>
            <option value="male" className="option">
              Male
            </option>
            <option value="female" className="option">
              Female
            </option>
          </select>
          <button className="form-btn" onClick={handleSubmit}>
            register
          </button>
          {/* <Link className="arrow" to="/list">
          <FaArrowRight />
        </Link> */}
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
