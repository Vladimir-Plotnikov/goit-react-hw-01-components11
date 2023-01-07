import Profile from './components/Profile'
import user from './user.json';
export default function App() {
    return <div>
<Profile
  avatar= {user.avatar}
  username= {user.username}
  tag={user.tag}
  stats={user.stats}
  location={user.location}
/>
    </div>;
}