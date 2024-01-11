import { Text, View } from "react-native";
import Container from "../../components/container";
import notifee from '@notifee/react-native';
import TextInput from "../../components/TextInput";
import Button from "../../components/button";
import CustomView from "../../components/customView";
import CustomDropdown from "../../components/dropDown";
function Favorites() {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <Container>
      <CustomView>
        <Text style={{ fontSize: 15 }}>Ürün Adı</Text>
        <TextInput placeholder="Ürün Adı" />
        <Text style={{ fontSize: 15 }}>Ürün Kategorisi</Text>
        <TextInput placeholder="Ürün Kategorisi" />
        <Text style={{ fontSize: 15 }}>Ürün Resmi</Text>
        <Button size="sm" title="Resim Seç" onPress={onDisplayNotification} />
        <Text style={{ fontSize: 15 }}>Ürün Açıklaması</Text>
        <TextInput placeholder="Ürün Açıklaması" />
        <Text style={{ fontSize: 15 }}>Ürün Durumu</Text>
        <CustomDropdown options={["Sıfır","Az Kullanılmış","Kullanılmış","Kötü"]}/>
      </CustomView>
      <Button size="lg" title="Takasa Hazır" onPress={onDisplayNotification} />
    </Container>
  );
}
export default Favorites;