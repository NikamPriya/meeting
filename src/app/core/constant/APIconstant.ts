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

Packages: {
    getPackage: "https://onlinetestapi.gerasim.in/api/Meeting/GetAllPackages",
    editPackage: "https://onlinetestapi.gerasim.in/api/Meeting/GetPackgeById?id=",
    createPackages: "https://onlinetestapi.gerasim.in/api/Meeting/CreatePackage",
    updatePackage: "https://onlinetestapi.gerasim.in/api/Meeting/UpdatePackge",
    delPackage: "https://onlinetestapi.gerasim.in/api/Meeting/DeletePackgeById?id=",

},

clientPackage: {
    getClientPAckage: "https://onlinetestapi.gerasim.in/api/Meeting/GetAllClientPackags",
    editClientPackage: "https://onlinetestapi.gerasim.in/api/Meeting/GetClientPackageById?id=",
    getClientPackageByClientId: "https://onlinetestapi.gerasim.in/api/Meeting/GetAllClientPackagesByClientId?id=",
    getActivePackageByClientId: "https://onlinetestapi.gerasim.in/api/Meeting/GetActivePackageByClientId?id=",
    createClientPackage: "https://onlinetestapi.gerasim.in/api/Meeting/AddNewClientPackage",
    updateClientPackage: "https://onlinetestapi.gerasim.in/api/Meeting/UpdateClientPackage",
    delClientPackage: "https://onlinetestapi.gerasim.in/api/Meeting/DeleteClientPackageById?id="
},  
    
    
Booking:{
    getAllBookings:"https://onlinetestapi.gerasim.in/api/Meeting/GetAllBookings",
    getAllBookingsByClientId:"https://onlinetestapi.gerasim.in/api/Meeting/GetAllBookingsByClientId?clientId=",
    getAllBookingsByUserId:"https://onlinetestapi.gerasim.in/api/Meeting/GetAllBookingsByUserId?userId=",
    createBooking:"https://onlinetestapi.gerasim.in/api/Meeting/CreateBooking",
    updateBooking:"https://onlinetestapi.gerasim.in/api/Meeting/UpdateBooking",
    deleteBooking:"https://onlinetestapi.gerasim.in/api/Meeting/DeleteBookingById?id=",
    editBooking:"https://onlinetestapi.gerasim.in/api/Meeting/GetBookingById?id=1",
    getTime:"https://onlinetestapi.gerasim.in/api/Meeting/GetTimeList"
},

}
