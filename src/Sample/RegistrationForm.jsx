import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

function RegistrationForm() {
    const formik=useFormik({
        initialValues:{
            username:'',    
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            username:Yup.string()
            .required('required'),
            email:Yup.string()
            .email('Invalid email address')
            .required('required'),
            password:Yup.string()
            .min(6,'Password must be at least 6 characters')
            .required('required')
        }),
        onSubmit:(values)=>{
            alert(JSON.stringify(values,null,2))
            console.log(values)
        }
    })
  return (
   <Box component="form" onSubmit={formik.handleSubmit} sx={{display:'flex',flexDirection:'column',gap:2,width:300,margin:'auto',mt:5}}>
    <TextField
    fullWidth
    margin='normal'
    type='text'
    id="username"
    name="username"
    label="Username"
    value={formik.values.username}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.username && Boolean(formik.errors.username)}
    helperText={formik.touched.username && formik.errors.username}
    />
    <TextField
    fullWidth
    margin='normal'
    id="email"
    type='text'
    name="email"
    label="Email"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.email && Boolean(formik.errors.email)}
    helperText={formik.touched.email && formik.errors.email}
    />
    <TextField
    fullWidth
    margin='normal'
    id="password"
    name="password"
    label="Password"
    type="password"
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={formik.touched.password && formik.errors.password}
    />
    <Button color="primary" variant="contained" fullWidth type="submit">Register</Button>
    </Box>  
  )
}

export default RegistrationForm
