import user from './data/user.json';
import Profile from './components/Profile/Profile'
import data from './data/data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './data/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

export default function App() {
    return <div>
<Profile
  avatar= {user.avatar}
  username= {user.username}
  tag={user.tag}
  stats={user.stats}
  location={user.location}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>;
  
}