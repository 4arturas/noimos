import axios from "axios";
import { getApiDomain } from "../config";

export default function CallAPIView() {
    async function callAPIClicked() {
        let response = await axios.get(getApiDomain() + "/sessioninfo");
        window.alert("Session Information:\n" + JSON.stringify(response.data, null, 2));
    }
    async function callAPICatsClicked() {
        let response = await axios.get(getApiDomain() + "/cats");
        
        window.alert("Cats Information:\n" + JSON.stringify(response.data, null, 2));
    }

    return (
        <>
        <div onClick={callAPIClicked} className="sessionButton">
            Call API
        </div>
        <div onClick={callAPICatsClicked} className="sessionButton">
            Call Cats
        </div>
        </>
    );
}
