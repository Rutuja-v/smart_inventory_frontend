
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import './home.css';
import Widget from './widget/Widget';







const Home = () => {
    return (
        <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
      <Navbar/>
      
      <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />

        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Branches</div>
       <Table/>
        </div> */}
  <div className="listContainer">
          <div className="listTitle">Latest Branches</div>
         
        </div>
      </div>
      </div>
       
    );
}

export default Home;
