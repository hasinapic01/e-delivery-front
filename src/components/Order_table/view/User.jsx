import { useState ,useEffect, useRef} from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import Basicmodal from '../../Modal';
import Scrollbar from 'src/components/scrollbar';
import axios from 'axios'

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker'
import Field from '../../field/Field';
import {API_URL} from '../../sign_up/config'
// ----------------------------------------------------------------------

export default function UserView() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('design');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [orders,setOrdersValue]=useState([])

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = orders.map((n) => n.attributes.design);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };
  
  const dataFiltered = applyFilter({
    inputData: orders,
    comparator: getComparator(order, orderBy),
    filterName,
  });
  
  
  const fetchdata=()=>{
    fetch("http://localhost:1337/api/orders",{
      method:"GET",
      headers:{
        "Accept":"Application.json"
      }
    }).then(res=>res.json())
    .then(re=>
    setOrdersValue(re.data))
  }

 
  const notFound = !orders.length && !!filterName;

  useEffect(()=>{
    fetchdata()
  },[])
  
  ///////////////////MODAL

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
};
  
const handleClose = () =>{
  setOpen(false) 
  setDatamodif({
  delivery_address:"",
  design:""
})} ;
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const handleDateTimeChange = (newDateTime) => {
    let da=new Date(newDateTime.$d)
    setSelectedDateTime(da.toISOString());
  };

  const [datamodif,setDatamodif]=useState({delivery_address:null,design:null})
  const [data,setData]=useState({delivery_address:null,design:null})
  const Change=(event)=>{
    setData({
      ...data,
      [event.target.name]:event.target.value
  })
  }
  
  const Addorder=()=>{
    axios.post(API_URL+"/orders",{
      "data":{
        "delivery_address":data.delivery_address,
        "design":data.design,
        "order_date":selectedDateTime
      }
    }).then(
      r=>{
        if(r.status===200){
          alert("success")
      }
      }).catch(er=>console.log(er))
  }

  const RemoveOrder=(id)=>{
    axios.delete(API_URL+"/orders/"+id).then(
      r=>{
        if(r.status===200)alert("Delivery cancelled")
      }).catch(er=>console.log(er))
    }

  const ModifyOrder=async(id)=>{
    axios.get(API_URL+"/orders/"+id).then(res=>{
    if(res.status==200){
    let design_data=res.data.data.attributes.design
    let delivery_data=res.data.data.attributes.delivery_address
    const  date=new Date(res.data.data.attributes.order_date)
    setDatamodif({
      design:design_data,
      delivery_address:delivery_data})
    setOpen(true)
    }
   }).catch(er=>alert(er)) 
  }

  const Submit=(e)=>{
    e.preventDefault()
    Addorder()
    setOpen(false)
  }

////////popover
const Action=(e)=>{
  if(e.target.className==="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-1lznhn3-MuiButtonBase-root-MuiButton-root"){
    ModifyOrder(e.target.id)
  }else{
    RemoveOrder(e.target.id)
  }
}
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Orders</Typography>
        {datamodif.design ?
        <Basicmodal handleClose={handleClose} open={open} handleOpen={handleOpen} onSubmit={Submit} label_button="Edit">
          <Field type="text" name="design" placeholder="Design" onChange={Change} value={datamodif.design}/>
          <Field type="text" name="delivery_address" placeholder="Delivery address" onChange={Change} value={datamodif.delivery_address}/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateTimePicker orientation="landscape"
            onChange={handleDateTimeChange}/>
          </LocalizationProvider>
        </Basicmodal>:
        <Basicmodal handleClose={handleClose} open={open} handleOpen={handleOpen} onSubmit={Submit} label_button="Add">
        <Field type="text" name="design" placeholder="Design" onChange={Change}/>
        <Field type="text" name="delivery_address" placeholder="Delivery address" onChange={Change} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker orientation="landscape"
          onChange={handleDateTimeChange}/>
        </LocalizationProvider>
      </Basicmodal>
        }
      </Stack>
       
      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={orders.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'design', label: 'Design' },
                  { id: 'delivery_address', label: 'Delivery_address' },
                  { id: 'order_date', label: 'Order_date' },
                  { id: 'delivery_status', label: 'Delivery_status',alignItems:"center" },
                  { id: '',label:'action'},
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) =>{ 
                    let order_date=new Date(row.attributes.order_date)
                    order_date=order_date.toLocaleString()
                    return(
                    <UserTableRow
                      key={row.id}
                      design={row.attributes.design}
                      delivery_address={row.attributes.delivery_address}
                      delivery_status={row.attributes.delivery_status}
                      order_date={order_date}
                      avatarUrl={row.avatarUrl}                    
                      selected={selected.indexOf(row.attributes.design) !== -1}
                      handleClick={(event) => handleClick(event, row.attributes.design)}
                      onClick={Action}
                      button_key={row.id}
                    />
                  )})}

                <TableEmptyRows
                  height={7}
                  emptyRows={emptyRows(page, rowsPerPage, orders.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
        <TablePagination
          page={page}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}


