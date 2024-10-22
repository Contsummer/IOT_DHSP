import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Config = () => {
  return (
    <View className='w-full h-full items-center justify-center bg-white'>
    <View className='h-[95%] items-center justify-center py-5 rounded-2xl' style={{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '95%',
        // Các thuộc tính đổ bóng
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10, // Chỉ dành cho Andr
    }}>
      <View className="h-[100%] w-[100%]">
        <Text style={{color: '#b1b1b1', fontSize: 20, alignSelf: 'center'}}>Thông tin thí nghiệm</Text>

        <View className='w-full mt-3'>
          <Text style={styles.title}>Tên thí nghiệm</Text>
          <TextInput style={styles.input} placeholder="Tên thí nghiệm" value="Đo hệ số căng bề mặt của chất lỏng" editable={false} />

          <Text style={styles.title}>Thiết bị</Text>
          <TextInput style={styles.input} placeholder="Thiết bị" value="Chưa kết nối" editable={false} />

          <Text style={styles.title}>Số lần thí nghiệm</Text>
          <TextInput style={styles.input} placeholder="Số lần thí nghiệm" value="1" editable={false} />

          <Text style={styles.title}>Khối lượng</Text>
          <TextInput style={styles.input} placeholder="Khối lượng" value="0" editable={false} />

          <Text style={styles.title}>Tốc độ lấy mẫu</Text>
          <TextInput style={styles.input} placeholder="Tốc độ lấy mẫu" value="0" editable={false} />

          <Text style={styles.title}>Thời gian lấy mẫu</Text>
          <TextInput style={styles.input} placeholder="Thời gian lấy mẫu" value="0,00s" editable={false} />

        </View>

        <View>
          <TouchableOpacity className='bg-black h-[5vh] justify-center items-center rounded-xl mt-2'>
            <Text className='text-white'>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  input:{
    height: 40,
    borderColor: '#ccc',
    borderWidth: 0,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  title:{
    color: '#949aa4',
    fontSize: 14,
    marginBottom: 12,
  }
})


export default Config