<!-- # i can update the value of userContext using userContext.Provider
# const [userName,setUserName] = useState();

#     useEffect(()=>{
#         //Make an API call and send the username and Password
#         const data = {
#             name:"Deependra singh"
#         }
#         setUserName(data.name);
#     },[])
# example: <UserContext.Provider value={{loggedInUser: userName}}>
#             #     <Header/>
#             # </UserContext.Provider>
# i can also give different userContext.Provider like if i want to wrap a particular component i can do like this

#         //Default Value
#             <UserContext.Provider value={{loggedInUser: userName}}> 
#             {/* Deependra Singh */}
#             <div className="app">
#             <UserContext.Provider value={{loggedInUser:"Elon Musk"}}>
#                 {/* Elon Musk */}
#                 <Header/>
#                 </UserContext.Provider>
#                 <Outlet/>    
#             </div>
#             </UserContext.Provider> -->


# Redux Tool kit 
    -Install @reduxjs/toolkit and react-redux
    -Build our Store
    -connect our store to our app
    -Slice (cartSlice)
    -dispatch(action)
    -reducer
    -Selector
# Types of Testing a devloper can do
    - Unit testing
    - Integration Testing
    - End to End testing or e2e testing

# libraries needed
 -React testing library

(parcel already uses Babel and now we installed our own Babel for testing now this we overrite that Parcel Babel)
 # setting up Testing in our  application
    - Install react Testing library
    - Insrall Jest Testing library
    - Install Babel dependencies
    - Configure Babel in our root application 
    - Configure Parcel config file to disable default Babel transpilation
    - Jest Configruation by writing command (npx jest --init) we write npx because we want to execute 
    - Install jsdom library using (npm install --save-dev jest-environment-jsdom)
    - create a __tests__ name folder and write your test case or if you dont want to create this folder then you can give file name as (.test.js) like Header.test.js or Header.test.ts or Header.spec.js or Header.spec.ts all these files considerd as testing files 
    - two underscores front and two back are known as dunders (_ _tests _ _)
    - Install @babel/preset-react -why? to make JSX work in test cases
    - Include  @babel/preset-react inside babel.config.js 
    - Install npm i -D @testing-library/jest-dom