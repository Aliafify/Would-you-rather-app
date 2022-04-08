import React, { Component } from 'react'
import { connect } from 'react-redux'
import BoardScore from './BoardScore'
class LeaderBoard extends Component {
    render() {
        const { sortUsersById } = this.props
        return (
            <div className='center'>
                <h3 className='leaderboard'>Leader Board </h3>
                <ul>
                    {sortUsersById.map((id) => (
                        <li key={id}>
                            <BoardScore id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
function mapStateToProps({users}){
    const uids = Object.keys(users)

    const sortUsersById = uids.sort((a,b)=>{
        const A = Object.keys(users[a].answers).length + users[a].questions.length 
        const B = Object.keys(users[b].answers).length + users[b].questions.length 
        return B - A
    })



    return{
        sortUsersById,
    }
}
export default connect(mapStateToProps)(LeaderBoard);