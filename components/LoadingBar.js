import Placeholder from "react-bootstrap/Placeholder"

export default function LoadingBar() {

  return (
    <>
      <Placeholder as="h5" animation="glow" className="p-0 m-0" >
        <Placeholder xs={12} bg="primary" />
      </Placeholder>
    </>
  )
}