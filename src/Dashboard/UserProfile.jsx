import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import ProfileAllDetails from "./Personalinfo/InfoTabs";
const UserProfile = ({ addUserLocal, userActive }) => {
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
