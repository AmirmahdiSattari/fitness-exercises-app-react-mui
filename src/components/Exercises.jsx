import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCrad from './ExerciseCrad'
const Exercises = ({ bodyPart, exercises, setExercises }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice
    (indexOfFirstExercise, indexOfLastExercise)


  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  }

  useEffect(() => {
    const fechExerciseData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData)
    }

    fechExerciseData();
  }, [bodyPart])

  return (
    <Box id="exercise"
      sx={{ mt: { lg: '110px' } }}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{
        gap: { lg: '110px', xs: '50' }
      }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercises, index) => (
          <ExerciseCrad key={index}
            exercise={exercises} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises