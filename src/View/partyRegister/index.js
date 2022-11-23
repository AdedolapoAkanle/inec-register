import { connect } from "react-redux";
import { RegistrationAction } from "../../Actions/index";
import { api } from "../../Api/api";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import "./party.css";

const PartyRegister = ({ state, dispatchRegistration }) => {
  const { partyName, partyColor, partySlogan, partyImage } = state;
  // let selectedFile = useRef();
  // console.log(selectedFile);

  const handleSubmit = async () => {
    const formData = new FormData();

    const data = {
      partyName,
      partyColor,
      partySlogan,
      partyImage,
    };
    // console.log(data);

    formData.append("partyImage", partyImage);
    formData.append("partyName", partyName);
    formData.append("partyColor", partyColor);
    formData.append("partySlogan", partySlogan);
    console.log(formData);

    const res = await api("partyRegister.php", formData);
    console.log(res);

    //   dispatchRegistration("");
  };

  const handleFile = async (e) => {
    // console.log(e.target.files[0].name);
    dispatchRegistration({ ...state, partyImage: e.target.files[0] });
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
              dispatchRegistration({ ...state, partyName: e.target.value })
            }
            placeholder="Name"
          />

          <input
            type="text"
            className="form-input"
            onChange={(e) =>
              dispatchRegistration({ ...state, partyColor: e.target.value })
            }
            placeholder="Color"
          />

          <input
            type="text"
            className="form-input"
            onChange={(e) =>
              dispatchRegistration({ ...state, partySlogan: e.target.value })
            }
            placeholder="Slogan"
          />

          <input
            type="file"
            name="file"
            className="form-image"
            // ref={selectedFile}
            onChange={handleFile}
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

export default connect(mapStateToProps, mapDispatchToProps)(PartyRegister);
