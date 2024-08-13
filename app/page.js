import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Create Flashcards Effortlessly
          </Typography>
          <Typography variant="h5" paragraph>
            Transform your text into smart flashcards with our AI-powered SaaS.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mr: 2 }}
            >
              Sign Up
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Log In
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Key Features
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                AI-Powered Flashcards
              </Typography>
              <Typography variant="body1">
                Automatically generate flashcards from any text input using our
                advanced AI algorithms.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Easy to Use
              </Typography>
              <Typography variant="body1">
                A user-friendly interface that allows you to create and manage
                your flashcards with ease.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom>
                Customizable Decks
              </Typography>
              <Typography variant="body1">
                Organize your flashcards into decks and customize them to fit
                your learning style.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ py: 8, backgroundColor: 'grey.100' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Pricing Plans
          </Typography>
          <Typography variant="h6" paragraph align="center">
            Choose the plan that’s right for you.
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: 'white',
                  p: 4,
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: 1,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Free Plan
                </Typography>
                <Typography variant="h4" gutterBottom>
                  $0/month
                </Typography>
                <Typography variant="body1" paragraph>
                  Basic features with limited flashcard creation.
                </Typography>
                <Button variant="contained" color="primary">
                  Sign Up
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  p: 4,
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: 1,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Pro Plan
                </Typography>
                <Typography variant="h4" gutterBottom>
                  $9.99/month
                </Typography>
                <Typography variant="body1" paragraph>
                  Unlimited flashcards and premium features.
                </Typography>
                <Button variant="contained" color="secondary">
                  Sign Up
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: 'white',
                  p: 4,
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: 1,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Enterprise Plan
                </Typography>
                <Typography variant="h4" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                  Custom solutions for large organizations.
                </Typography>
                <Button variant="contained" color="primary">
                  Contact Sales
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
