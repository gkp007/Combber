// import {
//   Heading,
//   HStack,
//   Icon,
//   Input,
//   VStack,
//   Text,
//   FlatList,
// } from 'native-base';
// import React, {useEffect, useState} from 'react';
// import {
//   Image,
//   Modal,
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {Country} from '../../constant';

// type Props = {
//   visible: boolean;
//   onSelect: (country: any) => void;
//   onClose: () => void;
//   selectedCountry?: any;
// };

// const CountryPicker = ({onClose, onSelect, visible}: Props) => {
//   const [searchTxt, setSearchTxt] = useState('');
//   const [searchRes, setSearchRes] = useState(() => Country);
//   useEffect(() => {
//     if (searchTxt) {
//       const resArr = Country?.filter(item =>
//         item?.name?.toLowerCase().includes(searchTxt.toLowerCase()),
//       );
//       setSearchRes(resArr);
//     } else {
//       setSearchRes(Country);
//     }
//   }, [searchTxt]);
//   return (
//     <>
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={visible}
//         onRequestClose={() => onClose()}>
//         <TouchableWithoutFeedback onPress={() => onClose()}>
//           <SafeAreaView style={styles.container}>
//             <VStack w="100%" space={5} alignSelf="center">
//               <HStack mt={2} space={8}>
//                 <Pressable onPress={() => onClose()}>
//                   <MaterialIcons name="arrow-back" size={25} color="#000" />
//                 </Pressable>
//                 <Heading alignSelf={'center'} fontSize="lg">
//                   Select Your Country
//                 </Heading>
//               </HStack>

//               <Input
//                 placeholder="Search by country name"
//                 width="100%"
//                 borderRadius="4"
//                 backgroundColor={'#fff'}
//                 py="3"
//                 px="1"
//                 fontSize="14"
//                 InputLeftElement={
//                   <Icon
//                     m="2"
//                     ml="3"
//                     size="6"
//                     color="gray.400"
//                     as={<MaterialIcons name="search" />}
//                   />
//                 }
//                 value={searchTxt}
//                 onChangeText={setSearchTxt}
//               />
//             </VStack>

//             <FlatList
//               keyboardShouldPersistTaps="always"
//               data={searchRes}
//               renderItem={({item}: any) => (
//                 <>
//                   <TouchableOpacity
//                     style={styles.flagWrapper}
//                     onPress={() => onSelect(item)}>
//                     <Image
//                       source={{
//                         uri: `https://flagcdn.com/w20/${item.code.toLowerCase()}.png`,
//                       }}
//                       style={styles.flag}
//                     />
//                     <Text color={'black'}>{item.name}</Text>
//                   </TouchableOpacity>
//                 </>
//               )}
//               keyExtractor={(item: any) => item.code}
//               showsVerticalScrollIndicator={false}
//             />
//           </SafeAreaView>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </>
//   );
// };
// export default CountryPicker;

// const styles = StyleSheet.create({
//   flag: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//     resizeMode: 'contain',
//   },
//   flagWrapper: {padding: 10, flexDirection: 'row'},
//   container: {
//     flex: 1,
//     padding: 10,
//   },
// });
