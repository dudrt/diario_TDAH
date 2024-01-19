import { router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { View ,ActivityIndicator} from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Index(){
    const [fontsLoaded, fontError] = useFonts({
        'Inter-Black': require('../assets/fonts/static/Inter-Black.ttf'),
        'Inter-Medium': require('../assets/fonts/static/Inter-Medium.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
          router.replace('/home');
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
      
      return(
        <View onLayout={onLayoutRootView}></View>
      )
}