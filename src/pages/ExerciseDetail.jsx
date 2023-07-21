import React, { useEffect, useState }
    from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from './../components/Detail';
import ExerciseVideos from './../components/ExerciseVideos';
import SimilarExercises from './../components/SimilarExercises';



const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])

    const { id } = useParams();

    useEffect(() => {
        const fetchExerciseData = async () => {

            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(
                `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideosData.contents);

            console.log("🟢",exerciseDetailData);

            const targetMuscleExerciseData = await fetchData(`
            ${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercises(targetMuscleExerciseData);

            console.log("🟣",targetMuscleExerciseData);

            const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equipmentExerciseData);
        }

        fetchExerciseData();
    }, [id])

    return (
        <Box>
        
            <Detail
                exerciseDetail={exerciseDetail}
            />

            <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            />

            <SimilarExercises
                targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
            />

        </Box>
    )
}

export default ExerciseDetail