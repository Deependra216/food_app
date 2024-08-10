import User from "./User";

 function Contact() {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      {/* <User name={"raghav"} location={'Indore'}/> */}

      <form>
        <input placeholder="Name" type="text" className="border border-black p-2 m-2"/>
        <input placeholder="Message" type="text" className="border border-black p-2 m-2"/>
        <button className="border border-black p-2 m-2 bg-slate-400 rounded-lg">Submit</button>

      </form>
    </div>
  )
}
export default Contact