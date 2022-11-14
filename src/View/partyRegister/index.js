import { connect } from "react-redux";
import { RegistrationAction } from "../../Actions/index";
import { api } from "../../Api/api";
import "./party.css";

const PartyRegister = ({ state, dispatchRegistration }) => {
  const { partyName, partyColor, partySlogan, partyImage } = state;

  const handleSubmit = async () => {
    const data = {
      partyName,
      partyColor,
      partySlogan,
      partyImage,
    };
    console.log(data);

    const res = await api("partyRegister.php", data);
    console.log(res);

    //   dispatchRegistration("");
    upload();
  };

  const upload = async () => {
    const data = {
      partyImage,
    };

    console.log(data);

    const res = await api("upload.php", data);
    console.log(res);
  };

  return (
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
          name="image"
          className="form-image"
          onChange={(e) =>
            dispatchRegistration({ ...state, partyImage: e.target.value })
          }
        />

        <button name="register" className="form-btn" onClick={handleSubmit}>
          register
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

export default connect(mapStateToProps, mapDispatchToProps)(PartyRegister);
