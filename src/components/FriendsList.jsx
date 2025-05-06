import { Friend } from './Friend';
import '../index.css';

export function FriendsList({ friends, onSelection, selectedFriend }) {
   return (
      <ul>
         {friends.map((friend) => (
            <Friend
               friend={friend}
               key={friend.id}
               onSelection={onSelection}
               selectedFriend={selectedFriend}
            />
         ))}
      </ul>
   );
}
