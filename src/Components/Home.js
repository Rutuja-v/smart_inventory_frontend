import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import "./home.css";
import Widget from "./widget/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle">Latest Branches</div>
        </div>
        <div className="widgets">
          <Widget type="Cheenai" />
          <Widget type="Pune" />
          <Widget type="Hydrabad" />
          <Widget type="Bangolre" />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Branches</div>
       <Table/>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
