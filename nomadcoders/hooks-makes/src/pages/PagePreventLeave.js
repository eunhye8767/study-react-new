import usePreventLeave from "../hooks/usePreventLeave"

/**
 *  아래 Protect 버튼을 클릭하고
 *  브라우저 창을 닫기 누르게 되면
 *  "사이트에서 나가시겠습니까?" 경고창(컴펌)이 뜬다.
 */

const PagePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </>
  )
}

export default PagePreventLeave