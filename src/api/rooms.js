export const addRoom =async roomData=>{
  const response =await fetch('http://localhost:5000/rooms',{
    method: "POST",
    headers:{
      'content-type':'application/json',
  },
body: JSON.stringify(roomData)
  })
  const data=await response.json()
  return data
}


export const getAllRooms = async () => {
  const response = await fetch('http://localhost:5000/allrooms')
  const data = await response.json()
  return data
}

export const getRoom = async id => {
  const response = await fetch(`http://localhost:5000/room/${id}`)
  const data = await response.json()
  return data
}


