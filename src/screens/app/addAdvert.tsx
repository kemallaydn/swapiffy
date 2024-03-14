import { Image, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/container";
import notifee from '@notifee/react-native';
import TextInput from "../../components/TextInput";
import Button from "../../components/button";
import CustomView from "../../components/customView";
import CustomDropdown from "../../components/dropDown";
import ImagePickerScreen from "../../components/Image";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useState } from "react";
import axios from "axios";
function Favorites() {
  const [imageData, setImageData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(false);
  async function onDisplayNotification() {
    await axios.post('http://localhost:8080/photos/upload', imageData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  }
  return (
    <Container >
      <CustomView>
        <Text style={{ fontSize: 15 }}>Ürün Adı</Text>
        <TextInput placeholder="Ürün Adı" handleChange={undefined} />
        <Text style={{ fontSize: 15 }}>Ürün Kategorisi</Text>
        <TextInput placeholder="Ürün Kategorisi" handleChange={undefined} />
        <Text style={{ fontSize: 15 }}>Ürün Resmi</Text>
        {
          imageData!=null 
          ? (
            <View style={{flexDirection:'row',marginVertical:10 }}>
              <Image source={{ uri: imageData._parts[0][1].uri }} style={{ width: 70, height: 70,borderRadius:10}} />
              <TouchableOpacity onPress={()=>{setSelectedImage(true)}} style={{justifyContent:'center',alignItems:'center',backgroundColor:'#7E8087',borderRadius:10,width: 70, height: 70,marginLeft:10}}>
                <Ionicons name="add" size={30} color="black" style={{}}/>
              </TouchableOpacity>
            </View>

          )
          
          :  <Button size="sm" title="Resim Seç" onPress={()=>{setSelectedImage(true)}} style={{marginVertical:'5%'}}/>

        }
         <ImagePickerScreen setImageData={setImageData} visible={selectedImage} setVisible={setSelectedImage}/>

        <Text style={{ fontSize: 15 }}>Ürün Açıklaması</Text>
        <TextInput placeholder="Ürün Açıklaması" handleChange={undefined} />
        <Text style={{ fontSize: 15 }}>Ürün Durumu</Text>
        <CustomDropdown options={["Sıfır","Az Kullanılmış","Kullanılmış","Kötü"]}/>
      <Button size="sm" title="Takasa Hazır" onPress={onDisplayNotification} style={{marginVertical:'8%'}}/>
      </CustomView>
    </Container>
  );
}
export default Favorites;