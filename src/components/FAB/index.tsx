import React from 'react'
import { Appearance, useColorScheme } from 'react-native'
import { FloatingAction } from "react-native-floating-action";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export interface FABProps {

}



const FAB: React.FC<FABProps> = () => {

    const deviceTheme = Appearance.getColorScheme()


    console.log(deviceTheme)






    return (



        <FloatingAction

            color='#fdd835'
            distanceToEdge={{ vertical: 60, horizontal: 30 }}

            
            floatingIcon={<Entypo name="plus" size={28} color="#000a12" />}
            overlayColor='none'
            showBackground={false}
        >

        </FloatingAction>




    );


}

export default FAB;

