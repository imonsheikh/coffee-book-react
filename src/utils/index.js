
import toast from "react-hot-toast";


//get all coffees from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites')
    
    if(all){
        const favorites = JSON.parse(all)
        console.log(favorites);
        return favorites
    }else{
        console.log([]);    
        return []
    }
    
}

//add a coffee to local storage
const addFavorite = (coffee) => {
    console.log(coffee);
    // const favorites = []
    const favorites = getAllFavorites()
    console.log(favorites);

    //check duplicate
    const isExisted = favorites.find(item => item.id === coffee.id)
    // if(isExisted) return alert('already existed')
    if(isExisted) return toast.error('Coffee already existed')

    favorites.push(coffee)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('successfully added')
    
}
//remove a coffee from local storage
const removeFavorite = id => {
 const favorites = getAllFavorites()
 const remaining = favorites.filter(coffee => coffee.id !==id)
 localStorage.setItem('favorites', JSON.stringify(remaining))
 toast.success('Successfully Removed')

}

export {addFavorite, getAllFavorites, removeFavorite}  