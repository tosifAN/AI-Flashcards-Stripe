'use client'

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from 'next/navigation';
import { Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";

export default function Flashcards() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [flashcards, setFlashcards] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function getFlashcards() {
      if (!user) return;
      const docRef = doc(collection(db, 'users'), user.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || [];
        setFlashcards(collections);
      } else {
        await setDoc(docRef, { flashcards: [] });
      }
    }
    getFlashcards();
  }, [user]);

  if (!isLoaded || !isSignedIn) {
    return <></>;
  }

  const handleCardClick = (id) => {
    router.push(`/flashcard?id=${id}`);
  };

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
        Your Flashcard Collections
      </Typography>
      <Grid container spacing={3}>
        {flashcards.map((flashcard, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden', transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardActionArea 
                onClick={() => {
                  handleCardClick(flashcard.name);
                }}
              >
                <CardContent sx={{ textAlign: 'center', backgroundColor: '#fff' }}>
                  <Typography variant="h6" sx={{ color: '#00796b' }}>
                    {flashcard.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}