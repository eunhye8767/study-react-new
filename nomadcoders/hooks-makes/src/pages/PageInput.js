import useTitle from "../hooks/useTitle";
import Input from '../components/Input'

const PageInput = () => {
  const pageTitle = useTitle("Input page")
  
  return (
    <>
      <Input />
    </>
  )
}

export default PageInput