import { useNavigate } from "react-router-dom";

export const Signup=()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div claasName="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text center p-2 h-max px-4">
                <Heading label={"Sign up"}></Heading>
                <Subheading label={"Enter your information to create the account"}></Subheading>
                <InputBox onChange={e=>{
                    setFirstName(e.target.value);
                }} placeholder="Kishan" label={"First Name"}></InputBox>
                <InputBox onChange={e=>{
                    setLastName(e.target.value);
                }} placeholder="Jungi" label={"Last Name"}></InputBox>
                <InputBox onChange={e=>{
                    setUsername(e.target.value);
                }} placeholder="kishanjungi@gmail.com" label={"Email"}></InputBox>
                <InputBox onChange={e=>{
                    setPassword(e.target.value);
                }} placeholder="123456" label={"Password"}></InputBox>
                <div className="pt-4">
                    <Button onClick={async ()=>{
                        const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            firstName,
                            lastName,
                            password
                        });
                        localStorage.setItem("token",response.data.token)
                        navigate("/dashboard")
                    }} label={"Sign up"}></Button>
                </div>
                 <BottomWarning label={"Already have an account"} buttonText={"Sign in"} to ={"/Singin"}></BottomWarning>
            </div>

        </div>
    </div>
}