'use client'

interface ViewUserBtnProps {
  userId: number,
} 

const ViewUserBtn: React.FC<ViewUserBtnProps> = ({userId}) => {
  const handleClick = () => alert(`user id: ${userId}`);
  return (
    <>
      <button onClick={handleClick}>Show User</button>
    </>
  )
}

export default ViewUserBtn