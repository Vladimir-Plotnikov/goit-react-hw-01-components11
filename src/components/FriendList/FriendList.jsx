import PropTypes from 'prop-types';
import FriendsListItem from '../FriendsListItem/FriendsListItem'
import css from './FriendsList.module.css'

export default function FriendList({ friends }) {
    return (<ul className={css.friendList}>
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
