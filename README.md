## useEffect is not needed

In [App2.tsx](./Archive/App2.tsx), `useEffect` is used to move the black dot after pressing the right arrow "=>".This works right but using useEffect is not needed.Besides, you can just put the motion logic into the handleMoveRight() function, [App3.tsx](./Archive/App3.tsx).

## App4.tsx

Added handler functions to move the black ball left/right/up/down

## App5.tsx

Created 10 Enemies
Created a princess
Created a Collision logic Between the hero and enemies
