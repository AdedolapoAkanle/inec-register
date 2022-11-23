import "./menu.css";
import { Link } from "react-router-dom";
import { FaRegAddressBook } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUserAdd,
  AiOutlineReconciliation,
  AiOutlineIdcard,
  AiOutlinePoweroff,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { SiVultr } from "react-icons/si";
const Menu = () => {
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
      <div className="menu">
        <div className="box-container">
          <div className="row1-container">
            <Link to={"/register"} class="box box-left green">
              <h2 className="head">Voters Registration</h2>
              <p className="texts">
                Register to vote in the forthcoming election
              </p>
              <div className="icon icon-green">
                <AiOutlineUserAdd />
              </div>
            </Link>

            <Link to={"/party"} className="box box-right red">
              <h2 className="head">Party Management</h2>
              <p className="texts">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="icon icon-red">
                <AiOutlineReconciliation />
              </div>
            </Link>
          </div>
          <div className="center">
            <Link to={"/candidate"} className="box box-center grey">
              <h2 className="head">Candidates</h2>
              <p className="texts">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <div className="icon icon-grey">
                <AiOutlineUsergroupAdd />
              </div>
            </Link>
          </div>

          <div className="row2-container">
            <div className="box box-bottom-left blue">
              <h2 className="head">Voter's Card</h2>
              <p className="texts">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <div className="icon icon-blue">
                <AiOutlineIdcard />
              </div>
            </div>
            <div className="box box-bottom-right orange">
              <h2 className="head">Votes</h2>
              <p className="texts">
                review number of votes casted for each party
              </p>
              <div className="icon icon-orange">
                <SiVultr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <footer className="footer">
          <div className="footer-text">Home</div>
          <div className="footer-text">Services</div>
          <div className="footer-text">About Us</div>
          <div className="footer-text">Private Policy</div>
        </footer>
        <p className="copyright">Dolapo Akanle © 2022</p>
      </div>
    </div>
  );
};

export default Menu;
