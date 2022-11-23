import { connect } from "react-redux";
import { RegistrationAction } from "../../Actions/index";
import { api } from "../../Api/api";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import "./candidate.css";

const CandidateRegister = ({ state, dispatchRegistration }) => {
  const {
    candidateName,
    candidateParty,
    candidateDob,
    candidateGender,
    candidatePosition,
  } = state;

  const handleSubmit = async () => {
    const data = {
      candidateName,
      candidateParty,
      candidateDob,
      candidateGender,
      candidatePosition,
    };
    console.log(data);

    const res = await api("candidateRegister.php", data);
    console.log(res);

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
              dispatchRegistration({ ...state, candidateName: e.target.value })
            }
            placeholder="Full Name"
          />
          <input
            type="text"
            className="form-input"
            onChange={(e) =>
              dispatchRegistration({ ...state, candidateParty: e.target.value })
            }
            placeholder="Party"
          />

          <select
            className="form-dropdown"
            onChange={(e) =>
              dispatchRegistration({
                ...state,
                candidateGender: e.target.value,
              })
            }
          >
            <option value="" hidden className="value">
              Select Gender
            </option>
            <option value="male" className="value">
              Male
            </option>
            <option value="female" className="value">
              Female
            </option>
          </select>

          <select
            className="form-dropdown"
            onChange={(e) =>
              dispatchRegistration({
                ...state,
                candidatePosition: e.target.value,
              })
            }
          >
            <option value="" hidden className="value">
              Select Position
            </option>
            <option value="president" className="value">
              President
            </option>
            <option value="governor" className="value">
              Governor
            </option>

            <option value="senate" className="value">
              Senate
            </option>
            <option value="chairman" className="value">
              Chairman
            </option>
            <option value="house of rep" className="value">
              House Of Representative
            </option>
            <option value="councillorship" className="value">
              Councillorship
            </option>
          </select>

          <input
            type="date"
            className="form-input"
            onChange={(e) =>
              dispatchRegistration({ ...state, candidateDob: e.target.value })
            }
          />

          <button name="register" className="form-btn" onClick={handleSubmit}>
            register
          </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CandidateRegister);
