import { FriendsList } from './FriendsList';
import { Button } from './Button';
import { FormAddFriend } from './FormAddFriend';
import { FormSplitBill } from './FormSplitBill';
import { useState } from 'react';
import '../index.css';

const initialFriends = [
   {
      id: 118836,
      name: 'Rushikesh',
      image: 'https://i.pravatar.cc/48?u=118836',
      balance: -7,
   },
   {
      id: 933372,
      name: 'Om',
      image: 'https://i.pravatar.cc/48?u=933372',
      balance: 20,
   },
   {
      id: 499476,
      name: 'Sejal',
      image: 'https://i.pravatar.cc/48?u=499476',
      balance: 0,
   },
];

export function App() {
   const [friends, setFriends] = useState(initialFriends);
   const [selectedFriend, setSelectedFriend] = useState(null);
   const [showAddFriend, setShowAddFriend] = useState(false);

   const handleShowAddFriend = () => {
      setShowAddFriend((show) => !show);
   };

   const handleAddFriend = (friend) => {
      setFriends(() => [...friends, friend]);
      setShowAddFriend(false);
   };

   const handleSelection = (friend) => {
      setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
      setShowAddFriend(false);
   };

   const handleSplitBill = (value) => {
      setFriends((friends) =>
         friends.map((friend) =>
            friend.id === selectedFriend.id
               ? { ...friend, balance: friend.balance + value }
               : friend
         )
      );

      setSelectedFriend(null);
   };

   return (
      <div className="app">
         <div className="sidebar">
            <FriendsList
               friends={friends}
               onSelection={handleSelection}
               selectedFriend={selectedFriend}
            />

            {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

            <Button onClick={handleShowAddFriend}>
               {showAddFriend ? 'Close' : 'Add Friend'}
            </Button>
         </div>

         {selectedFriend && (
            <FormSplitBill
               selectedFriend={selectedFriend}
               onSplitBill={handleSplitBill}
            />
         )}
      </div>
   );
}
