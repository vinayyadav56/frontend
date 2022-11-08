import React, {useEffect} from "react";
import Sidebar from "./Dashboardsidebar";
import Header from "./Dashboardheader";
import "../Homepages/homepage.css";
import Tripsearch from "../Homepages/Tripsearch";
import {makeRequest} from "../Services/api";
import {useAuth} from "../Services/auth";
import {useAlert} from "react-alert";
const Postavailablity = ({addUserLocal,  userActive }) => {
  const {user, setLoading} = useAuth();
  const alert = useAlert();

  useEffect(() => {
    checkAvailability();
  }, []);

  const checkAvailability = () => {
    const availability = window.localStorage.getItem('availability');

    if(availability && availability.length > 0){
      try{
        const payload = JSON.parse(availability);

        payload.user_id = user.id;

        setLoading(true);
        makeRequest('POST', 'createUserAvailability', payload).then(res => {
          if(res.success) {
            alert.success(res.message)
            window.localStorage.removeItem('availability');
          }else{
            alert.error(res.message);
          }
          window.localStorage.removeItem('availability');
        }).catch(err => {
          alert.error(err.message);
        }).finally(() => setLoading(false));
      }catch(e){
        setLoading(false);
        alert.error(e.message);
      }
    }
  }

  return (
    <div>
      <section className="user-dashboard">
        <Sidebar userActive={userActive}/>
        <section className="main-content">
          <Header addUserLocal={addUserLocal}/>
          <div className="mt-5 trip_form">
            <Tripsearch />
          </div>

        </section>
      </section>
    </div>
  );
};

export default Postavailablity;
