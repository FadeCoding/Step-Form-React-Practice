import React, { Component } from 'react'
import { TextField, Button, Box } from '@mui/material';

// Shared TextField styling
const textFieldStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
    borderRadius: 2,
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.7)',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1976d2',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(0, 0, 0, 0.6)',
        fontWeight: 500,
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#1976d2',
    }
};
export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        
        return (
            <div style={{ 
                width: '100%', 
                height: '100vh', 
                position: 'relative',
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ffa726 25%, #ffcc02 50%, #ff8a65 75%, #ff7043 100%)'
            }}>
                <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 3, position: 'relative', zIndex: 1 }}>
                    <h2 style={{ color: 'white', textAlign: 'center', fontFamily: 'Bitcount Prop Single Ink, monospace', fontWeight: '600', fontSize: '2rem', marginBottom: '2rem' }}>Enter User Details</h2>
                    <TextField 
                        label="First Name" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal"
                        value={values.firstName}
                        onChange={handleChange('firstName')}
                        sx={textFieldStyle}
                    />
                    <TextField 
                        label="Last Name" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal"
                        value={values.lastName}
                        onChange={handleChange('lastName')}
                        sx={textFieldStyle}
                    />
                    <TextField 
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={values.email}
                        onChange={handleChange('email')}
                        sx={textFieldStyle}
                    />
                    <Box sx={{ mt: 3 }}>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={this.continue}
                            fullWidth
                            sx={{ height: 48, fontFamily: 'Open Sans, sans-serif', fontWeight: '600', fontSize: '1.1rem' }}
                        >
                            Next
                        </Button>
                    </Box>
                </Box>
            </div>
        )
    }
}

export default FormUserDetails
