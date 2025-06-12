import { StyleSheet, Text, View ,TextInput } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../Hooks/useResults'
import ResultsList from '../components/ResultsList'



export default function SearchScreen() {
    const [searchApi,result] =useResults()
    console.log(result);

    const filterByResultsByPrice = (price) => {
        return result.filter((result)=> {
            return result.price===price
        })
    }
  return (
    <View>
        <SearchBar/>
        <ResultsList title='Ucuz Restoranlar' results={filterByResultsByPrice('₺ ')}/>
        <ResultsList title='Ucuz Restoranlar' results={filterByResultsByPrice('₺₺ ')}/>
        <ResultsList title='Ucuz Restoranlar' results={filterByResultsByPrice('₺₺₺')}/>
    </View>
  )
}

const styles = StyleSheet.create({

    


})