import React from 'react';
import {
    MKSlider,
} from 'react-native-material-kit';

export default function Slider(props) {
    return (
        <MKSlider
         thumbRadius={7}
         trackLength={52}
         lowerTrackColor="rgb(83,45,62)"
         upperTrackColor="rgb(83,45,62)"
         min={0}
         max={100}
         {...props} />
    );
};