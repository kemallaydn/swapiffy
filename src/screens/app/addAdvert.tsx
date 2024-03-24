import { Image, Text,TouchableOpacity, View } from "react-native";
import Container from "../../components/container";
import notifee from '@notifee/react-native';
import TextInput from "../../components/TextInput";
import Button from "../../components/button";
import CustomView from "../../components/customView";
import CustomDropdown from "../../components/dropDown";
import ImagePickerScreen from "../../components/Image";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useEffect,useState } from "react";
import axios from "axios";
import { context } from "../../context";
import { sendAdvertisement } from "../../services/Advertisement";
function Favorites() {
  const { authState:{userDetails:{id}} } = context();
  const [imageData, setImageData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(false);
  const [resim, setResim] = useState(null);
  const [status, setStatus] = useState(null);
  const [advert, setAdvert] = useState({ title: "", category: "", imageurl: null, description: "", status: "", userid: id });
  const handleChnage = (e: { target: any; }) => {
    setAdvert({ ...advert, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    if (imageData != null) {
      handleChnage({ target: { name: "imageurl", value: imageData[0].data } });
    }
  }, [imageData])
  useEffect(()=>{
    handleChnage({ target: { name: "status", value: status} });
  },[status])
  return (
    <Container >
      <CustomView>
        <Text style={{ fontSize: 15 }}>Ürün Adı</Text>
        <TextInput placeholder="Ürün Adı" onChangeText={(e:any) => {handleChnage({ target: { name: "title", value: e } });
        }} handleChange={undefined} />
        <Text style={{ fontSize: 15 }}>Ürün Kategorisi</Text>
        <TextInput placeholder="Ürün Kategorisi" handleChange={undefined} onChangeText={(e:any) => {handleChnage({ target: { name: "category", value: e } });}} />
        <Text style={{ fontSize: 15 }}>Ürün Resmi</Text>
        {
          imageData != null
            ? 
            (
              <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Image source={{ uri: imageData[0].sourceURL }} style={{ width: 70, height: 70, borderRadius: 10 }} />
                {resim && <Image source={{ uri: resim }} style={{ width: 70, height: 70, borderRadius: 10 }} />}
                <TouchableOpacity onPress={() => { setSelectedImage(true) }} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#7E8087', borderRadius: 10, width: 70, height: 70, marginLeft: 10 }}>
                  <Ionicons name="add" size={30} color="black" style={{}} />
                </TouchableOpacity>
              </View>
            )
            : <Button size="sm" title="Resim Seç" onPress={() => { setSelectedImage(true) }} style={{ marginVertical: '5%' }} />

        }
        <ImagePickerScreen setContent={setStatus} setImageData={setImageData} visible={selectedImage} setVisible={setSelectedImage} />

        <Text style={{ fontSize: 15 }}>Ürün Açıklaması</Text>
        <TextInput placeholder="Ürün Açıklaması" handleChange={undefined} onChangeText={(e:any) => {handleChnage({ target: { name: "description", value: e } });}} />
        <Text style={{ fontSize: 15 }}>Ürün Durumu</Text>
        <CustomDropdown setStatus={setStatus} options={["Sıfır", "Az Kullanılmış", "Kullanılmış", "Kötü"]} />
        <Button size="sm" title="Takasa Hazır" onPress={()=>sendAdvertisement(advert)} style={{ marginVertical: '8%' }} />
      </CustomView>
    </Container>
  );
}
export default Favorites;