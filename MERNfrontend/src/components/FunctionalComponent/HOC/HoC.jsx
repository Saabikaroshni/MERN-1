import Button from "./Button"
import trackingMyButtonComponent from "./trackingMyButtonComponent"
const HoC=()=>{
    const ButtonTrack=trackingMyButtonComponent(Button)
    return (
        <div>
            <h1>welcome to hoc</h1>
            <Button value={"Login"}></Button>
            <ButtonTrack value={"Login"} trackingInfo={{"CustID":"hello","password":"password"}}/>
        </div>
    )
}
export default HoC