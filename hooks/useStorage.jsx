import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {

  const getItem = async (key) => {
    try {
      const passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords) || [];
    } catch (error) {
      console.log('Erro ao buscar', error);
      return [];
    }
  };

  const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key);
      passwords.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log('erro ao salvar no banco', error);
    }
  };

  const removeItem = async (key, item) => {
    try {
      let passwords = await getItem(key);
      let myPass = passwords.filter((password) => password !== item);
      await AsyncStorage.setItem(key, JSON.stringify(myPass));
      return myPass;
    } catch (error) {
      console.log('erro ao deletar no banco', error);
    }
  };

  return { getItem, saveItem, removeItem };
};

export default useStorage;
