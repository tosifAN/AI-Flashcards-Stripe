'use client'

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { Box, Typography, Container, Grid, CardContent, CardActionArea, Card } from "@mui/material";
import { db } from "../../firebase.js";
import { useSearchParams } from "next/navigation";

export default function Flashcard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  
  const searchParams = useSearchParams();
  const search = searchParams.get('id');

  useEffect(() => {
    async function getFlashcard() {
      if (!search || !user) return;
      const colRef = collection(doc(collection(db, 'users'), user.id), search);
      const docs = await getDocs(colRef);
      const flashcards = [];

      docs.forEach((doc) => {
        flashcards.push({ id: doc.id, ...doc.data() });
      });
      setFlashcards(flashcards);
    }
    getFlashcard();
  }, [user, search]);

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isLoaded || !isSignedIn) {
    return <></>;
  }

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        background: 'linear-gradient(to bottom right, #e0f7fa, #80deea)', // Gradient background
        minHeight: '100vh', // Ensure full height
        padding: '20px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b', mb: 4, textAlign: 'center' }}>
        Your Flashcards
      </Typography>
      <Grid container spacing={3}>
        {flashcards.map((flashcard, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
              <CardActionArea
                onClick={() => {
                  handleCardClick(index);
                }}
              >
                <CardContent>
                  <Box sx={{
                    perspective: '1000px',
                    ' & > div': {
                      transition: 'transform 0.6s',
                      transformStyle: 'preserve-3d',
                      position: 'relative',
                      width: '100%',
                      height: '200px',
                      boxShadow: '0 4px 8px 0 rgba(0,0,0, 0.2)',
                      transform: flipped[index]
                        ? 'rotateY(180deg)' 
                        : 'rotateY(0deg)',
                    },
                    ' & > div > div': {
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: "hidden",
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 2,
                      boxSizing: 'border-box',
                      backgroundColor: '#fff',
                      borderRadius: '8px',
                    },
                    ' & > div > div:nth-of-type(2)': {
                      transform: 'rotateY(180deg)',
                    },
                  }}
                  >
                    <div>
                      <div>
                        <Typography variant="h5" component="div" sx={{ color: '#00796b' }}>
                          {flashcard.front}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h5" component="div" sx={{ color: '#00796b' }}>
                          {flashcard.back}
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}