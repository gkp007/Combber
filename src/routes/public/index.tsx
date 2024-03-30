import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {PublicRoutesTypes} from './types';
import {PrivateNavigationProp} from '../private/types';
import {Auth, Public} from '../../screens';

const Stack = createSharedElementStackNavigator<PublicRoutesTypes>();

type PublicRouteProps = {
  initialRouteName?: keyof PublicRoutesTypes;
};

export default function PublicRoutes({initialRouteName}: PublicRouteProps) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Public.Onboarding} />
      <Stack.Screen name="Splash" component={Public.Splash} />
      <Stack.Screen name="Login" component={Auth.Login} />
      <Stack.Screen name="Register" component={Auth.Register} />
      <Stack.Screen name="ForgetPassword" component={Auth.ForgetPassword} />
      <Stack.Screen name="ResetPassword" component={Auth.ResetPassword} />
      <Stack.Screen name="OtpScreen" component={Auth.OtpScreen} />
    </Stack.Navigator>
  );
}
