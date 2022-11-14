import { connect } from "react-redux";
import { RegistrationAction } from "../../Actions";
import { api } from "../../Api/api";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./list.css";
import { FaTimes, FaPen } from "react-icons/fa";

const List = ({ state, dispatchRegistration }) => {
  const { arr, searchType } = state;

  useEffect(() => {
    searchUser();
  }, []);

  const searchUser = async (search = "") => {
    const data = {
      search,
      searchType,
    };
    // console.log(data);

    const list = [];
    const res = await api("menu.php", data);

    for (const i of res) {
      list.push({
        id: i.id,
        name: i.name,
        email: i.email,
        address: i.address,
        gender: i.gender,
        occupation: i.occupation,
      });
    }

    dispatchRegistration({ ...state, arr: list });
  };

  const eraseUser = async (id) => {
    const data = {
      id,
    };

    const res = await api("delete.php", data);
    alert(res);
    searchUser();
  };
  return (
    <div className="container">
      <div className="main">
        <div className="filter">
          <select
            className="drop"
            name="Search"
            onChange={(e) =>
              dispatchRegistration({ ...state, searchType: e.target.value })
            }
          >
            <option value="" hidden className="value">
              Select...
            </option>
            <option value="name" className="value">
              Name
            </option>
            <option value="email" className="value">
              Email
            </option>
            <option value="address" className="value">
              Address
            </option>
            <option value="occupation" className="value">
              Occupation
            </option>
            <option value="gender" className="value">
              Gender
            </option>
          </select>
          <input
            type="text"
            className="field"
            onChange={(e) => searchUser(e.target.value)}
            placeholder="Search..."
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Occupation</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((usr) => (
              <tr key={usr.id}>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr.address}</td>
                <td>{usr.occupation}</td>
                <td>{usr.gender}</td>
                <td>
                  <div className="icon">
                    <Link className="link tooltip" to={`/update/${usr.id}`}>
                      <FaPen className="pen" />
                      <span className="tooltip-text">Edit</span>
                    </Link>

                    <span className="tooltip">
                      <FaTimes
                        className="times "
                        onClick={() => eraseUser(usr.id)}
                      />
                      <span className="tooltip-text">Delete</span>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Occupation</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
        <div class="pagination_section">
          <a href="#"> Previous</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#" className="active">
            4
          </a>
          <a href="#">5</a>
          <a href="#">Next</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
