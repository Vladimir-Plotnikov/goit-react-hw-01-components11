import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem'

export default function FriendList({ friends }) {
    return (<ul class="friend-list">
        {friends.map(friend => (
      <FriendsListItem key={friend.id} friend = {friend}/>
  ))}
</ul>)
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired
}
