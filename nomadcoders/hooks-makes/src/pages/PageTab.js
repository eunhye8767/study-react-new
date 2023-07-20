import useTitle from "../hooks/useTitle";
import Tabs from '../components/Tabs'

const PageTab = () => {
  const pageTitle = useTitle("Input page")

  return (
    <>
      <Tabs />
    </>
  )
}

export default PageTab