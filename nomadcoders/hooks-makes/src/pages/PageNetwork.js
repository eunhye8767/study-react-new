import useNetwork from "../hooks/useNetwork"

const PageNetwork = () => {

  const handleNetworkChange = online => {
    console.log(online ? 'We Just went online' : 'We are offline')
  }
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div>{onLine ? "OnLine" : "OffLine"}</div>
  )
}

export default PageNetwork