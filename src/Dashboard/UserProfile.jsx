import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import ProfileAllDetails from "./Personalinfo/InfoTabs";
import { useAuth } from "../Services/auth";
import { Redirect } from "react-router-dom";
const UserProfile = ({ addUserLocal, userActive }) => {
  const auth = useAuth();
  if (!auth.isAuthenticated()) {
    return <Redirect to="/login" />
  }
  return (
    <div>
      <section className="user-dashboard">
        <Sidebar userActive={userActive} />
        <section className="main-content">
          <Header addUserLocal={addUserLocal} />
          <div className="container-fluid personal-info-form">
            <ProfileAllDetails />
          </div>
        </section>
      </section>
    </div>
  );
};

export default UserProfile;
