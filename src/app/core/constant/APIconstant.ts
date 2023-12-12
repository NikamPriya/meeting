export const APIConstant = {
    login: {
        onLogin: "https://onlinetestapi.gerasim.in/api/Meeting/login"
    },
    client: {
        getClient: "https://onlinetestapi.gerasim.in/api/Meeting/GetAllClients",
        editClient: "https://onlinetestapi.gerasim.in/api/Meeting/GetClientsById?id=",
        createClient: "https://onlinetestapi.gerasim.in/api/Meeting/AddClients",
        updateClient: "https://onlinetestapi.gerasim.in/api/Meeting/UpdateClients",
        delClient: "https://onlinetestapi.gerasim.in/api/Meeting/DeleteClients?id=",
    },


user:{
    getAllusers:"https://onlinetestapi.gerasim.in/api/Meeting/GetAllusers",
    getAllUsersByClientId:"https://onlinetestapi.gerasim.in/api/Meeting/GetAllUsersByClientId?id=",
    getEditUserById:"https://onlinetestapi.gerasim.in/api/Meeting/GetUsersById?id=",
    addUser:"https://onlinetestapi.gerasim.in/api/Meeting/AddUsers",
    updateUser :"https://onlinetestapi.gerasim.in/api/Meeting/UpdateUser",
    deleteUsersById:"https://onlinetestapi.gerasim.in/api/Meeting/DeleteUsersById?id=",
    
},

Rooms: {
  getRoom: "https://onlinetestapi.gerasim.in/api/Meeting/GetAllRooms ",
  getRoomById: "https://onlinetestapi.gerasim.in/api/Meeting/GetRoomById?id=",
  createRoom: "https://onlinetestapi.gerasim.in/api/Meeting/CreateRoom",
  updateRoom:"https://onlinetestapi.gerasim.in/api/Meeting/UpdateRoom",
  deleteRoom: "https://onlinetestapi.gerasim.in/api/Meeting/DeleteRoomById?id=",
  GetAllRoomsByClientId:"https://onlinetestapi.gerasim.in/api/Meeting/GetAllRoomsByClientId?id="
},
}