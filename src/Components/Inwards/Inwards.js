
// import React, { useState, useEffect } from "react";

// import { useNavigate } from 'react-router-dom';
// import { useNavigation } from "react-router-dom";

// import Button from "@material-ui/core/Button";

// const Inwards = () => {
//   const [inwardItems, setInwardItems] = useState([]);
//   const navigate = useNavigate();

//   const handleGoBack = () => {
//     navigate.goBack();
//   };

  

//   useEffect(() => {
//     fetch("http://localhost:3031/Inwards")
//       .then(response => response.json())
//       .then(data => setInwardItems(data))
//       .catch(error => console.error("Error fetching inward items:", error));
//   }, []);

//   return (
//     <div>
//       <h2>Inwards</h2>
//       <ul>
//         {inwardItems.map((item, index) => (
//           <li key={index}>
//             Product Code: {item.productCode}, Product Name: {item.productName},{" "}
//             Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//       <Button variant="contained" color="primary" onClick={handleGoBack}>
//         Back
//       </Button>
//     </div>
//   );
// };

// export default Inwards;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  tableContainer: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
  backButton: {
    marginTop: theme.spacing(2),
  },
}));

const Inwards = () => {
  const classes = useStyles();
  const [inwardItems, setInwardItems] = useState([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Route back to home page
  };

  useEffect(() => {
    fetch("http://localhost:3031/Inwards")
      .then((response) => response.json())
      .then((data) => setInwardItems(data))
      .catch((error) =>
        console.error("Error fetching inward items:", error)
      );
  }, []);

  return (
    <Container component="main" maxWidth="md" className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Inwards
      </Typography>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Code</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inwardItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.productCode}</TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoBack}
        className={classes.backButton}
      >
        Back
      </Button>
    </Container>
  );
};

export default Inwards;


