import PropTypes from 'prop-types'

export default function FriendsListItem({ friend: { avatar, name, isOnline } }) {
    return <li class="item">
  <span class={isOnline? 'isOnline':'Offline'}></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class='className'>{name}</p>
</li> 
}

FriendsListItem.propTypes = {
    friend: PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })
}