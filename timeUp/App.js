import { StatusBar } from 'expo-status-bar';
import { SplashScreen} from './src/screens/SplashScreen';
import { HelperScreen } from './src/screens/SplashScreen/info';
import { useFonts } from '@expo-google-fonts/poppins';


export default function App() {
  return (
    <HelperScreen/>
  );
 
}


