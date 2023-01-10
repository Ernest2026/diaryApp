import * as SecureStore from 'expo-secure-store'

export const saveItem = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value)
    return 'saved item successfully'
}

export const getItem = async (key: string) => {
    let result = await SecureStore.getItemAsync(key)
    if (!result) return { status: false, pin: null }
    return { status: true, pin: result }
}

export const deleteItem = async (key: string) => {
    await SecureStore.deleteItemAsync(key)
    return 'deleted item successfully'
}
