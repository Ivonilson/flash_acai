/*import { StyleSheet } from 'react-native';*/
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import TelaInicial from './components/tela_inicial/Tela_Inicial';
import Venda from  './components/venda/Venda';
import UltimasVendas from './components/ultimas_vendas/Ultimas_Vendas';
import Produtos from './components/teste/Produtos';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  //const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Inicio" component={TelaInicial}
            options={{
                tabBarLabelStyle: {fontSize: 20, color:"purple"},
                tabBarIcon: () => (
                 <Icon name="home" size={30} color="purple" />
                ),
               tabBarStyle: {backgroundColor: 'white', paddingBottom: 8, paddingTop: 8, height: 80},
            }}
        />

      <Tabs.Screen name="Venda" component={Venda}
            options={{
              tabBarLabelStyle: { fontSize: 20, color: "purple" },
                tabBarIcon: () => (
                  <Icon name="edit" size={30} color="purple" />
                ),
               tabBarStyle: {backgroundColor: 'white', paddingBottom: 8, paddingTop: 8, height: 80},
            }}
        />   
        
        <Tabs.Screen name="Últimas" component={UltimasVendas}
            options={{
              tabBarLabelStyle: { fontSize: 20, color: "purple" },
                tabBarIcon: () => (
                  <Icon name="search" size={30} color="purple"/>
                ),
               tabBarStyle: {backgroundColor: 'white', paddingBottom: 8, paddingTop: 8, height: 80},
            }}
        /> 

        <Tabs.Screen name="Produtos" component={Produtos}
            options={{
                tabBarLabelStyle: {fontSize: 20, color: 'purple'},
                tabBarIcon: () => (
                 <Icon name="dollar" size={30} color="purple"/>
                ),
               tabBarStyle: {backgroundColor: 'white', paddingBottom: 8, paddingTop: 8, height: 80},
            }}
        />     

        
      </Tabs.Navigator>
      
    </NavigationContainer >
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white'
  }
});*/
