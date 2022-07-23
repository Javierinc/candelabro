import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Hearts } from 'react-loader-spinner'
import { LoadingContainer } from "./Loading.elements";


const Loading = () => {
  return (
    <LoadingContainer>
        <Hearts
            type= "Hearts"
            color= "rgb(185, 203, 199)"
            height= {100}
            width= {100}
            timeout= {3000}
        />
    </LoadingContainer>
  )
}

export default Loading
