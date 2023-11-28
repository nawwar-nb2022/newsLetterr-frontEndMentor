import ListIcon from "./ListIcon"
import "./success.scss"
const Success = ({email}) => {
    return (
        <section className="mainSuccessContainer">
            <div className="Container">
                <div className="iconSection">
                    <ListIcon/>
                </div>

                <div className="MessageHeader">
                    Thanks for Subscribing!
                </div>
                <div className="MessageBody">
                    A confirmation email has been sent to <span className="bold">{email}</span>
                    . Please open and click the button inside to confirm your subscribe
                </div>

                <button className="btnContainer">
                    Dismiss message
                </button>
            </div>
        </section>
    )
}

export default Success
