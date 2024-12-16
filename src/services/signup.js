
  import axiosInstance from "../utilities/axiosInstance";

  const SignupForm=async(formdata)=>{

    console.log("formdataForm",formdata)
      
      const response=await axiosInstance.post("signup",{formdata})
     
  }

  export default SignupForm;