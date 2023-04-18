import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function AddProject()
{
    const [formValue, setFormValue]= useState({pname:'', cname:'',pcost:'',phead:'',pmanager:'',puser:''});
    const [message, setMessage]= useState();
    const navigate= useNavigate();
    const handleInput=(e)=>{
     const {name, value}= e.target;
     setFormValue({...formValue, [name]:value});
    }
    const handleSubmit= async(e)=>{
       e.preventDefault();
       const allInputvalue= { pname: formValue.pname, cname:formValue.cname, pcost:formValue.pcost, phead:formValue.phead, pmanager:formValue.pmanager,puser:formValue.puser}; 

      let res= await fetch("http://localhost:5000/project",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(allInputvalue)
      });
      let resjson= await res.json();
      if(res.status===200)
      {
        setMessage(resjson.success);
        setTimeout(()=>{
            navigate('/project');
        }, 2000);

      } else{
        setMessage("Some Error Occured");
      }

       console.log(allInputvalue);
    }
	const data1="Add Project";
    return(
		<React.Fragment>
			<Navbar data1={data1} />
			
			<h5 ><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project Configuration details</b></h5>
		<Paper
 				sx={{
					p: 5,
 					marginTop: '2rem',
					marginLeft:'3rem',
					maxWidth: 1000,
				flexGrow: 1,
				backgroundColor: (theme) =>
					theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
			}}
			>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    
                    <p className="text-success"> { message } </p>
                    <form onSubmit={ handleSubmit}>
                        <div className="row">
                            <div className="col-md-10">
                                <div className="mb-3">
                                    <label className="form-lable">Project Name</label>
                                    <input type="text" name="pname" className="form-control" value={formValue.pname} onChange={ handleInput}/>
                                </div>
                            </div>
							<div className="col-md-10">
                                <div className="mb-3">
                                    <label className="form-lable">Client Name</label>
                                    <input type="text" name="cname" className="form-control" value={formValue.cname} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="mb-3">
                                    <label className="form-lable">Project Cost</label>
                                    <input type="number" name="pcost" className="form-control" value={formValue.pcost} onChange={ handleInput}/>
                                </div>
                            </div>
                            <div className="col-md-10">
							
                                <div className="mb-3">
                                    <label className="form-lable">Project Head</label>
                                    <input type="text" name="phead" className="form-control" value={formValue.phead} onChange={ handleInput}/>
                                </div>
                            
                            </div>
                            <div className="col-md-10">
							
                                <div className="mb-3">
                                    <label className="form-lable">Project Manager</label>
                                    <input type="text" name="pmanager" className="form-control" value={formValue.pmanager} onChange={ handleInput}/>
                                </div>
                            
                            </div>


						
							<div className="col-md-10">
                                <div className="mb-3">
                                    <label className="form-lable">Project User</label>
                                    <input type="text" name="puser" className="form-control" value={formValue.puser} onChange={ handleInput}/>
                                </div>
                            </div>
                           
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-lable"></label>
									
								
                                     </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
		</Paper>
	&nbsp;	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to={'/project'}>  <Button variant="contained" type="submit">Submit</Button></Link>

<Link to={'/project'} ><Button variant="transperent" >Cancel</Button></Link>
		</React.Fragment>
    );
}

export default AddProject;