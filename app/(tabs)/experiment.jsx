import { View, Text, Image, KeyboardAvoidingView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native'
import icons from '../../constants/icons'
import { SearchBar } from '@rneui/base'
import Breadcumb from '../../components/breadcumb'
import Lesson from '../../components/lesson_item'
import image from '../../constants/image'
const experiment = () => {


    const lessonsData = [
        {
            number: 1,
            name: "Giới thiệu về ngữ pháp tiếng Anh",
            avtInstructor: image.profile, // Đường dẫn tới ảnh đại diện
            instructor: "Nguyễn Văn A",
            time: 'Hôm nay, 10/13/2024'
        },
        {
            number: 2,
            name: "Thì hiện tại đơn",
            avtInstructor: image.profile, // Giữ nguyên
            instructor: "Trần Thị B",
            time: 'Hôm nay, 10/13/2024'
        },
        {
            number: 3,
            name: "Thì quá khứ đơn",
            avtInstructor: image.profile, // Giữ nguyên
            instructor: "Lê Văn C",
            time: 'Hôm nay, 10/13/2024'
        },
        {
            number: 4,
            name: "Thì tương lai đơn",
            avtInstructor: image.profile, // Giữ nguyên
            instructor: "Phạm Thị D",
            time: 'Hôm nay, 10/13/2024'
        },
        {
            number: 5,
            name: "Cấu trúc câu hỏi",
            avtInstructor: image.profile, // Giữ nguyên
            instructor: "Nguyễn Thị E",
            time: 'Hôm nay, 10/13/2024'
        },
        {
            number: 6,
            name: "Từ vựng chủ đề gia đình",
            avtInstructor: image.profile, // Giữ nguyên
            instructor: "Trần Văn F",
            time: 'Hôm nay, 10/13/2024'
        },
        {
            number: 7,
            name: "Nghe hiểu cơ bản",
            avtInstructor: image.profile, // Giữ nguyên
            instructor: "Lê Thị G",
            time: 'Hôm nay, 10/13/2024'
        },
        {
            number: 8,
            name: "Nói chuyện hàng ngày",
            avtInstructor: image.profile, // Giữ nguyên
            instructor: "Phạm Văn H",
            time: 'Hôm nay, 10/13/2024'
        },
        {
            number: 9,
            name: "Đọc hiểu văn bản",
            avtInstructor: image.profile, // Giữ nguyên
            instructor: "Nguyễn Văn I",
            time: 'Hôm nay, 10/13/2024'
        },
        {
            number: 10,
            name: "Viết đoạn văn ngắn",
            avtInstructor: image.profile, // Giữ nguyên
            instructor: "Trần Văn J",
            time: 'Hôm nay, 10/13/2024'
        },
    ];

    return (
        <SafeAreaView className='w-full h-full'>
            <StatusBar style='dark' backgroundColor='white' />

            <View className="h-full bg-white">
                {/* //header */}
                <View className='flex-row justify-between h-[100px] items-center mx-5'>
                    <View className='flex-row items-center justify-start '>
                        <Text className='text-3xl font-semibold'>Bài thực hành</Text>
                    </View>

                    <TouchableOpacity>
                        <Image source={icons.message} className='w-6 h-6' resizeMode='contain' />
                    </TouchableOpacity>
                </View>

                {/* Search bar */}
                <SearchBar platform='android' round={true} placeholder='Tìm kiếm...'
                    containerStyle={{
                        backgroundColor: '#f7f7f9',
                        borderRadius: 50,
                        marginHorizontal: 15,
                    }}
                />

                {/* khối ngày */}
                <View className='mx-5 my-5'>
                    <Breadcumb classType={10} type={'Ngày'} />
                </View>

                <FlatList
                    data={lessonsData}
                    renderItem={({ item }) => <Lesson number={item.number} avtInstructor={item.avtInstructor} name={item.name} instructor={item.instructor} time={item.time} />}
                    keyExtractor={(item, index) => index.toString()}
                    key={lessonsData.id}
                />
            </View>



        </SafeAreaView>
    )
}

export default experiment