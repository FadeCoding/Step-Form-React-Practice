import React from 'react';
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

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
    const continueStep = e => {
        e.preventDefault();
        nextStep();
    };

    const backStep = e => {
        e.preventDefault();
        prevStep();
    };

    return (
        <div style={{ 
            width: '100%', 
            height: '100vh', 
            position: 'relative',
            background: 'linear-gradient(135deg, #4ecdc4 0%, #26c6da 25%, #29b6f6 50%, #42a5f5 75%, #5c6bc0 100%)'
        }}>
            <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 3, position: 'relative', zIndex: 1 }}>
                <h2 style={{ color: 'white', textAlign: 'center', fontFamily: 'Bitcount Prop Single Ink, monospace', fontWeight: '600', fontSize: '2rem', marginBottom: '2rem' }}>Enter Personal Details</h2>
                <TextField
                    label="Occupation"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={values.occupation}
                    onChange={handleChange('occupation')}
                    sx={textFieldStyle}
                />
                <TextField
                    label="City"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={values.city}
                    onChange={handleChange('city')}
                    sx={textFieldStyle}
                />
                <TextField
                    label="Bio"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    value={values.bio}
                    onChange={handleChange('bio')}
                    sx={textFieldStyle}
                />
                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={backStep}
                        sx={{ height: 48, fontFamily: 'Open Sans, sans-serif', fontWeight: '600' }}
                    >
                        Back
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={continueStep}
                        sx={{ height: 48, fontFamily: 'Open Sans, sans-serif', fontWeight: '600' }}
                    >
                        Continue
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default FormPersonalDetails;
