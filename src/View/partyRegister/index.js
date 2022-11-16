// import { useRef } from "react";
import { connect } from "react-redux";
import { RegistrationAction } from "../../Actions/index";
import { api } from "../../Api/api";
import "./party.css";

const PartyRegister = ({ state, dispatchRegistration }) => {
  const { partyName, partyColor, partySlogan, partyImage } = state;
  // let selectedFile = useRef();
  // console.log(selectedFile);

  const handleSubmit = async () => {
    const data = {
      partyName,
      partyColor,
      partySlogan,
      partyImage,
    };
    console.log(data);

    // if (selectedFile.current.files.length === 0) {
    //   return false;
    // } else {
    //   const formData = new FormData();
    //   formData.append("picture", selectedFile.current.files[0]);
    //   // formData.append("name", partyImage);
    // }

    const res = await api("partyRegister.php", data);
    console.log(res);

    //   dispatchRegistration("");
  };

  const handleFile = async (e) => {
    console.log(e.target.files);
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
  );
};

const mapStateToProps = ({ form }) => ({
  state: form.registerState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRegistration: (params) => dispatch(RegistrationAction(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PartyRegister);
