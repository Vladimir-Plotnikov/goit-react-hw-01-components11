import PropTypes from 'prop-types'
import css from './FriendsListItem.module.css'

export default function FriendsListItem({ friend: { avatar, name, isOnline } }) {
    return <li className={css.item} >
  <span className={isOnline ? css.isOnline: css.offline}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.className}>{name}</p>
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