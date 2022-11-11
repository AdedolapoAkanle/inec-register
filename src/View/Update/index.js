import "./update.css";
import { api } from "../../Api/api";
import { RegistrationAction } from "../../Actions";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Update = ({ state, dispatchRegistration }) => {
  const { name, address, gender, occupation } = state;

  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const data = {
      id: id,
    };

    const res = await api("update.php", data);
    // console.log(res);
    dispatchRegistration({
      ...state,
      name: res.name,
      address: res.address,
      occupation: res.occupation,
      gender: res.gender,
    });
  };

  const updateUser = async () => {
    const data = {
      id,
      name,
      address,
      gender,
      occupation,
    };
    console.log(data);

    const res = await api("newUser.php", data);
    alert(res);
  };

  return (
    <div>
      <div className="form-field">
        {/* <div className="header">Update</div> */}

        <input
          type="text"
          className="text"
          value={name}
          onChange={(e) => {
            dispatchRegistration({ ...state, name: e.target.value });
          }}
        />

        <input
          type="text"
          className="text"
          value={address}
          onChange={(e) => {
            dispatchRegistration({ ...state, address: e.target.value });
          }}
        />
        <input
          type="text"
          className="text"
          value={gender}
          onChange={(e) => {
            dispatchRegistration({ ...state, gender: e.target.value });
          }}
        />

        <input
          type="text"
          className="text"
          value={occupation}
          onChange={(e) => {
            dispatchRegistration({ ...state, occupation: e.target.value });
          }}
        />

        <button className="button" onClick={updateUser}>
          update
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

export default connect(mapStateToProps, mapDispatchToProps)(Update);
