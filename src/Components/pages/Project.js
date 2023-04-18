// import React, { createContext } from 'react';
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';
// import { AlignHorizontalRight } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar';

// function createData(name, ehours, lhours, status, jobs) {
//   return {
//     name,
//     ehours,
//     lhours,
//     status,
//     jobs,
//   };
// }

// const rows = [
//   createData('AkaraSimply Support', '-', '-', 67, 4.3),
//   createData('CloudKitch', '-', '-', 51, 4.9),
//   createData('Eclair', '-', '-', 24, 6.0),
//   createData('HCL', 159, 6.0, 24, 4.0),
//   createData('Wipro', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),

// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// // with exampleArray.slice().sort(exampleComparator)
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: 'Project Name',
//   },
//   {
//     id: 'ehours',
//     numeric: true,
//     disablePadding: false,
//     label: 'Estimated Hours',
//   },
//   {
//     id: 'lhours',
//     numeric: true,
//     disablePadding: false,
//     label: 'Logged Hours',
//   },
//   {
//     id: 'status',
//     numeric: true,
//     disablePadding: false,
//     label: 'Status',
//   },
//   {
//     id: 'jobs',
//     numeric: true,
//     disablePadding: false,
//     label: 'Jobs',
//   },
// ];

// const DEFAULT_ORDER = 'asc';
// const DEFAULT_ORDER_BY = 'ehours';
// const DEFAULT_ROWS_PER_PAGE = 5;

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler = (newOrderBy) => (event) => {
//     onRequestSort(event, newOrderBy);
//   };

//   return (

//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all Project',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Users
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };
// const Name = createContext();
// const data1 = "Projects";
// export const Project = () => {
//   const [order, setOrder] = React.useState(DEFAULT_ORDER);
//   const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [visibleRows, setVisibleRows] = React.useState(null);
//   const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
//   const [paddingHeight, setPaddingHeight] = React.useState(0);

//   React.useEffect(() => {
//     let rowsOnMount = stableSort(
//       rows,
//       getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY),
//     );

//     rowsOnMount = rowsOnMount.slice(
//       0 * DEFAULT_ROWS_PER_PAGE,
//       0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE,
//     );

//     setVisibleRows(rowsOnMount);
//   }, []);

//   const handleRequestSort = React.useCallback(
//     (event, newOrderBy) => {
//       const isAsc = orderBy === newOrderBy && order === 'asc';
//       const toggledOrder = isAsc ? 'desc' : 'asc';
//       setOrder(toggledOrder);
//       setOrderBy(newOrderBy);

//       const sortedRows = stableSort(rows, getComparator(toggledOrder, newOrderBy));
//       const updatedRows = sortedRows.slice(
//         page * rowsPerPage,
//         page * rowsPerPage + rowsPerPage,
//       );

//       setVisibleRows(updatedRows);
//     },
//     [order, orderBy, page, rowsPerPage],
//   );

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.name);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = React.useCallback(
//     (event, newPage) => {
//       setPage(newPage);

//       const sortedRows = stableSort(rows, getComparator(order, orderBy));
//       const updatedRows = sortedRows.slice(
//         newPage * rowsPerPage,
//         newPage * rowsPerPage + rowsPerPage,
//       );

//       setVisibleRows(updatedRows);

//       // Avoid a layout jump when reaching the last page with empty rows.
//       const numEmptyRows =
//         newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;

//       const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
//       setPaddingHeight(newPaddingHeight);
//     },
//     [order, orderBy, dense, rowsPerPage],
//   );

//   const handleChangeRowsPerPage = React.useCallback(
//     (event) => {
//       const updatedRowsPerPage = parseInt(event.target.value, 10);
//       setRowsPerPage(updatedRowsPerPage);

//       setPage(0);

//       const sortedRows = stableSort(rows, getComparator(order, orderBy));
//       const updatedRows = sortedRows.slice(
//         0 * updatedRowsPerPage,
//         0 * updatedRowsPerPage + updatedRowsPerPage,
//       );
//       setVisibleRows(updatedRows);

//       // There is no layout jump to handle on the first page.
//       setPaddingHeight(0);
//     },
//     [order, orderBy],
//   );

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   return (

//     <Box sx={{ width: '100%' }}>
//       <Navbar data1={data1} />
//       <Link to='/addProject' style={{
//         textAlign: "center",
//         marginLeft: "1000px",
//         color: "grey"
//       }} ><Button variant="contained">+ Add Project</Button></Link>
//       <Paper sx={{ width: '100%', mb: 2 }}>

//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {visibleRows
//                 ? visibleRows.map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.name}
//                       selected={isItemSelected}
//                       sx={{ cursor: 'pointer' }}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           inputProps={{
//                             'aria-labelledby': labelId,
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{row.ehours}</TableCell>
//                       <TableCell align="right">{row.lhours}</TableCell>
//                       <TableCell align="right">{row.status}</TableCell>
//                       <TableCell align="right">{row.jobs}</TableCell>
//                     </TableRow>
//                   );
//                 })
//                 : null}
//               {paddingHeight > 0 && (
//                 <TableRow
//                   style={{
//                     height: paddingHeight,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }
// export { Name };

















import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtn,
    MDBBtnGroup,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink
} from "mdb-react-ui-kit";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const Project = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(4);
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [pname,setPname] =useState("");
  const [cname,setCname] =useState("");
   const [pcost,setPcost] = useState("");
   const [phead,setPhead] = useState("");
   const [pmanager,setPmanager] = useState("");
   const [puser,setPuser] = useState("");
   const [description,setDescription] = useState("");

    const soertOptions = ["pname", "cname", "pcost", "phead", "pmanager","puser"];

    useEffect(() => {
        loadUsersData(0, 4, 0);
    }, []);

    const loadUsersData = async (start, end, increase) => {
        return await axios
            .get(`http://localhost:5000/project?_start=${start}&_end=${end}`)
            .then((response) => {
                setData(response.data);
                setCurrentPage(currentPage + increase);
            })
            .catch((err) => console.log(err));
    }

    console.log("data", data);

    const handlleReset = () => {
        loadUsersData();
    };
    const handleSearch = async (e) => {
        e.preventDefault();
        return await axios
            .get(`http://localhost:5000/project?q=${pcost}`)
            .then((respone) => {
                setData(respone.data);
                setSortValue("");
            })
            .catch((err) => console.log(err));
    };

    const handleSort = async (e) => {
        let value = e.target.value;
        setSortValue(value);
        return await axios
            .get(`http://localhost:5000/project?_sort=${cname}&_order=asc`)
            .then((respone) => {
                setData(respone.data);
            })
            .catch((err) => console.log(err));
    };

    const handleFilter = async (value) => {
        return await axios
            .get(`http://localhost:5000/project?status=${cname}`)
            .then((respone) => {
                setData(respone.data);
            })
            .catch((err) => console.log(err));
    };

    const renderPagination = () => {
        if (data.length < 4 && currentPage === 0) return null;
        if (currentPage === 0) {
            return (
               
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem>
                        <MDBPaginationLink>1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBBtn onClick={() => loadUsersData(4, 8, 1)}>Next</MDBBtn>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        } else if (currentPage < pageLimit - 1 && data.length === pageLimit) {
            return (
                <MDBPagination className='mb-0'>

                    <MDBPaginationItem>
                        <MDBBtn onClick={() =>
                            loadUsersData((currentPage - 1) * 4, currentPage * 4, -1)
                        }
                        >
                            Prev
                        </MDBBtn>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
                    </MDBPaginationItem>


                    <MDBPaginationItem>
                        <MDBBtn onClick={() => loadUsersData((currentPage + 1) * 4, (currentPage + 2) * 4, 1)}>
                            Next
                        </MDBBtn>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        } else {
            return (
                <MDBPagination className='mb-0'>
                    <MDBPaginationItem>
                        <MDBBtn
                            onClick={() =>
                                loadUsersData(
                                    (currentPage - 1) * 4,
                                    currentPage * 4,
                                    -1
                                )}>Prev</MDBBtn>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            );
        }
    };
    const name = "Project";
    return (
        <div>
           <Navbar name={name} />
           <Link  to = '/addProject' ><Button variant="contained">+ Add Project</Button></Link>
            <MDBContainer>
                <form style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center",
                }}
                    className="d-flex input-group w-auto"
                    onSubmit={handleSearch}
                >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Name... "
                        value={sortValue}
                        onChange={(e) => setSortValue(e.target.value)}
                    />

                    <MDBBtn type="submit" color='dark'>Search</MDBBtn>
                    <MDBBtn className='mx-2' color='info' onClick={() => handlleReset()}>Reset</MDBBtn>

                </form>
                <div style={{ marginTop: "100px" }}>

                   
                    <MDBRow>
                        <MDBCol size="12">
                            <MDBTable>
                                <MDBTableHead dark>
                                    <tr>
                                        <th scope="col">Project Name</th>
                                        <th scope="col">Client Name</th>
                                        <th scope="col">Project Cost</th>
                                        <th scope="col">Project Head</th>
                                        <th scope="col">Project Manager</th>
                                        <th scope="col">Porject User</th>

                                    </tr>
                                </MDBTableHead>
                                {data.length === 0 ? (
                                    <MDBTableBody className="align-center mb-0">
                                        <tr>
                                            <td colSpan={8} className="text-center mb-0">No Data Found</td>
                                        </tr>
                                    </MDBTableBody>
                                ) : (
                                    data.map((item, index) => (
                                        <MDBTableBody key={index}>
                                            <tr>
                                              
                                                <td>{item.pname}</td>
                                                <td>{item.cname}</td>
                                                <td>{item.pcost}</td>
                                                <td>{item.phead}</td>
                                                <td>{item.pmanager}</td>
                                                <td>{item.puser}</td>
                                            </tr>
                                        </MDBTableBody>
                                    ))
                                )}
                            </MDBTable>
                        </MDBCol>
                    </MDBRow>
                    <div style={{
                        margin: "auto",
                        padding: "15px",
                        maxWidth: "250px",
                        alignContent: "center",
                    }}
                    > {renderPagination()}
                    </div>
                </div>
                <MDBRow>
                    <MDBCol size="8">
                        <h5>Sort By:</h5>
                        <select style={{ width: "50%", borderRadius: "2px", height: "35px" }}
                            onChange={handleSort}
                            value={sortValue}
                        >
                            <option>Please Select Value</option>
                            {soertOptions.map((item, index) => (
                                <option value={item} key={index}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </MDBCol>
                   
                </MDBRow>
            </MDBContainer>    
        </div>
    );
}

export default Project;

