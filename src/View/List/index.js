import { connect } from "react-redux";
import { RegistrationAction } from "../../Actions";
import { api } from "../../Api/api";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./list.css";
import { FaTimes, FaPen } from "react-icons/fa";

const List = ({ state, dispatchRegistration }) => {
  // $(document).ready(function () {
  //   $('#dtBasicExample').DataTable();
  //   $('.dataTables_length').addClass('bs-select');
  // });

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
            placeholder="search..."
          />
        </div>

        {/* <div className="table">
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                <td>occupation</td>
                <td>Gender</td>
                <td>Action</td>
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
                      <Link className="link" to={`/update/${usr.id}`}>
                        <FaPen className="pen" />
                      </Link>
                      <FaTimes
                        className="times"
                        onClick={() => eraseUser(usr.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        <table
          id="dtBasicExample"
          class="table table-striped table-bordered table-sm"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th class="th-sm">Name</th>
              <th class="th-sm">Email</th>
              <th class="th-sm">Address</th>
              <th class="th-sm">Occupation</th>
              <th class="th-sm">Gender</th>
              <th class="th-sm">Actions</th>
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

                    <FaTimes
                      className="times "
                      onClick={() => eraseUser(usr.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </tfoot>
        </table>
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
