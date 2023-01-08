import Profile from './components/Profile/Profile'
import user from './user.json';
import data from './data.json'
import Statistics from './components/Statistics/Statistics';
import friends from './friends.json'
import FriendList from './components/FriendList/FriendList';


export default function App() {
    return <div>
<Profile
  avatar= {user.avatar}
  username= {user.username}
  tag={user.tag}
  stats={user.stats}
  location={user.location}
      />
      <Statistics title="Upload stats" stats={data} /> 
      <FriendList friends = {friends} />
    </div>;
  
}