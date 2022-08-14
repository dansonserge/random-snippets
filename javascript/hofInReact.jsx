const Users= () => {
    const currenttUserId=3
    const vipUserPurchase = 10000
    const raffleUserWinners = [1,4,3]
    
    // map
    const _users = users.map(user => (<p key={user.id}> {user.username} </p>))
    function reducerFunc(total, currVal){
        return total + currVal.lifeTimePurchase
    }
    
    //reduce
    const totalLifeTimePurchases= users.reduce(reducerFunc,0)
    
    // find
    const currentUser = users.find(user=> user.id== currentUserId)
    
    //filter
    const vipList = users.filter(user=> user.lifeTimePurchase >= vipUserPurchase)
    
    // includes
    const isRaffleWinner = users.map(user=>user.id).includes(currenttUserId)

 /*    return (
            <>
            {_users}
            <p>Total Purchase: {totalLifeTimePurchase} </p>
            <p>current user: {currentUser.username} </p>
            
                <h4> vip list <h4>
                {
                vipList.map(user=> <p key={user.id}> {user.username} </p>)
                }
            
                raffle status: {isRaffleWinner ? 'Congrats, you're a raffle winner' : 'Oops! Try again later'}
        
        </>;
    ); */
}