import { Children } from 'react';
import {Text}  from './styles';


export const CustomText = ({Children, color}) => {
return (
    <CustomText color = {color} >
        {Children}
    </CustomText>
)
}


