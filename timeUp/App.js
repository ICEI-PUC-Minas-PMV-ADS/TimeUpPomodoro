import { StatusBar } from 'expo-status-bar';
import { SplashScreen} from './src/screens/SplashScreen';
import { useFonts, SourceSansPro_400Regular,SourceSansPro_700Bold, SourceSansPro_600SemiBold, SourceSansPro_900Blasck  } from '@expo-google-fonts/source-sans-pro';
import { HelperScreen } from './src/screens/SplashScreen/info';


export default function App() {
  return (
    <HelperScreen/>
  );
}

