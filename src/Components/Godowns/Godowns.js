// import React, { useState, useEffect } from "react";
import './Godowns.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Modal,
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,Card, CardContent, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

  




const Godown = () => {
    // const classes = useStyles();
  const [godownData, setGodownData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [godownName, setGodownName] = useState('');
  const [godownLocation, setGodownLocation] = useState('');
  const [godownCapacities, setGodownCapacities] = useState('');
const [godownManagerId, setGodownManagerId] = useState('');
const [godownStartDate, setGodownStartDate] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from local API
    const fetchGodownData = async () => {
      try {
        const response = await fetch('http://localhost:3032/godown'); // Replace with your local API endpoint
        const data = await response.json();
        setGodownData(data);
      } catch (error) {
        console.error('Error fetching godown data:', error);
      }
    };
    fetchGodownData();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGodownNameChange = (event) => {
    setGodownName(event.target.value);
  };

  const handleGodownLocationChange = (event) => {
    setGodownLocation(event.target.value);
  };
  const handleGodownCapacitiesChange = (event) => {
    setGodownCapacities(event.target.value);
  };
  
  const handleGodownManagerIdChange = (event) => {
    setGodownManagerId(event.target.value);
  };
  
  const handleGodownStartDateChange = (event) => {
    setGodownStartDate(event.target.value);
  };
  

  const handleAddGodown = async () => {
    try {
      const response = await fetch('http://localhost:3032/godown', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: godownName,
          location: godownLocation,
          capacities_in_quintals:godownCapacities,
          manager_id:godownManagerId,
          start_date:godownStartDate,

        }),
      });
      const newGodown = await response.json();
      setGodownData([...godownData, newGodown]);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding godown:', error);
    }
  };

  return (
    <div>
     
      <Typography variant="h5" align="center" className="headingStyles">
      Godowns
    </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>capacities_in_quintals</TableCell>
              <TableCell>manager_id</TableCell>
              <TableCell>start_date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {godownData.map((godown) => (
              <TableRow key={godown.id}>
                <TableCell>{godown.id}</TableCell>
                <TableCell>{godown.name}</TableCell>
                <TableCell>{godown.location}</TableCell>
                <TableCell>{godown.capacities_in_quintals}</TableCell>
                <TableCell>{godown.manager_id}</TableCell>
                <TableCell>{godown.start_date}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    
   
    <Modal open={isModalOpen} onClose={handleCloseModal} className="modalContainer">
  <Card className="modalContent">
    <CardContent>
      <Typography variant="h6" component="h2">
        Add a godown
      </Typography>
      <TextField
        label="Name"
        value={godownName}
        onChange={handleGodownNameChange}
        fullWidth
        margin="normal"
        className="textField"
      />
      <TextField
        label="Location"
        value={godownLocation}
        onChange={handleGodownLocationChange}
        fullWidth
        margin="normal"
        className="textField"
      />
      <TextField
        label="Capacities in quintals"
        value={godownCapacities}
        onChange={handleGodownCapacitiesChange}
        fullWidth
        margin="normal"
        // className={classes.textField}
        className="textField"
      />
      <TextField
        label="Manager ID"
        value={godownManagerId}
        onChange={handleGodownManagerIdChange}
        fullWidth
        margin="normal"
        // className={classes.textField}
        className="textField"
      />
      <TextField
        label="Start Date"
        value={godownStartDate}
        onChange={handleGodownStartDateChange}
        fullWidth
        margin="normal"
        className="textField"
      />
    </CardContent>
    <div className="buttonContainer">
      <Button variant="contained" color="primary" onClick={handleAddGodown} className="addButton">
        Add
      </Button>
      <Button variant="contained" color="secondary" onClick={handleCloseModal}>
        Cancel
      </Button>
    </div>
  </Card>
</Modal>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="outlined"  
 onClick={handleOpenModal} className="addButton"  >
        Add a godown
      </Button>
      <Button variant="outlined"   
 onClick={() => navigate(-1)} className="addButton" >
        Back
      </Button>
      </div>
      
    </div>

  );
};

export default Godown;

