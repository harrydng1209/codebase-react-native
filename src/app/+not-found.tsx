import BaseButton from '@/components/base/BaseButton';
import BaseText from '@/components/base/BaseText';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <View className="nw-absolute-center">
      <BaseText className="nw-mb-[16] nw-text-center">
        This screen does not exist
      </BaseText>

      <BaseButton onPress={() => router.push('/')}>
        Go to home screen
      </BaseButton>
    </View>
  );
};

export default NotFound;
