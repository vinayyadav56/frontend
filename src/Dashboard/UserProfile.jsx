import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import Profileform from "./Profileform";
import Paymentform from "./Paymentform";
const UserProfile = ({ addUserLocal, userActive }) => {
  // const [stableUser, setstableUser] = useState([]);
  // const fetch_Url = "http://127.0.0.1:8000/api/fetch-user/1";

  // const fetchUser = async () => {
  //   const response = await axios.get(fetch_Url);
  //   try {
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUser()
  // }, [])

  return (
    <div>
      <section className="user-dashboard">
        <Sidebar userActive={userActive} />
        <section className="main-content">
          <Header />
          <div className="container-fluid personal-info-form">
            <div className="row">
              <div className="col-lg-6 mt-4">
                  <div className="headings">
                    <h3>Personal Info</h3>
                    <p>Update your personal detail here</p>
                  </div>
                  <Profileform />
              </div>
              <div className="col-lg-6 mt-4">
                  <div className="headings">
                    <h3>Payment Details</h3>
                    <p>See your payment detail here</p>
                  </div>
                  <Paymentform />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default UserProfile;
