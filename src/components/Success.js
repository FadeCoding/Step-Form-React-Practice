import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Success = () => {
    return (
        <div style={{ 
            width: '100%', 
            height: '100vh', 
            position: 'relative',
            background: 'linear-gradient(135deg, #66bb6a 0%, #8bc34a 25%, #cddc39 50%, #ffeb3b 75%, #ffc107 100%)'
        }}>
            <Box 
                sx={{ 
                    maxWidth: 500, 
                    margin: '0 auto', 
                    padding: 3, 
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: 3, padding: 4 }}>
                    <CheckCircleIcon 
                        sx={{ fontSize: 80, color: 'green', mb: 2 }} 
                    />
                    <Typography variant="h4" gutterBottom style={{ fontFamily: 'Bitcount Prop Single Ink, monospace', fontWeight: '600', fontSize: '2.5rem' }}>
                        Thank You For Your Submission
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                        Your information has been successfully submitted!
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => window.location.reload()}
                        sx={{ height: 48, fontFamily: 'Open Sans, sans-serif', fontWeight: '600', fontSize: '1.1rem' }}
                    >
                        Submit Another Response
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Success;
