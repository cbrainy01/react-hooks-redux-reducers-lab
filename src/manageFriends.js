export function manageFriends(state, action) {
  // your code here
// original state is { friends: [] }
console.log(state)
  switch (action.type) {
    
    case "friends/add": 
    const newFriend = action.payload 
     return { friends: [ ...state.friends, newFriend ] };
    
    case "friends/remove": 
    const newFriends = state.friends.filter( (friend) => action.payload != friend.id  )
    console.log("NEW FRIENDS: ", newFriends)
    console.log("ACtion: ", action)
    return { friends: newFriends } ;

      
  
    default: return state
  }
}
