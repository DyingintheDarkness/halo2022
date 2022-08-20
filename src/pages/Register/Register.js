import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { registerDataAtom } from "../../statedrive/atoms";
import { useSharedState } from "../../statedrive";
import Event from "./Event";
import Files from "react-butterfiles";
import Layout from "../../components/Layout";
import { toast } from "react-toastify";
import uuid from "react-uuid"


const Register = () => {
    const { key } = useParams()
    const [validKey, setValidKey] = useState(false); // False
    const [form, setForm] = useSharedState(registerDataAtom);
    const [event, setEvent] = useState("recoil");
    const events = ["recoil", "encode", "qurious"]
    const participantCount = { recoil: { min: 5, max: 6 }, encode: { max: 2 }, qurious: { max: 2 } }
    const sendKey = async () => {
        const req = await axios.post("https://backend-halo22.up.railway.app/register/verify", {}, {
            headers: {
                "Authorization": key
            }
        });
        if (req.status === 200) {
            setValidKey(true)
        } else {
            setValidKey(false)
        }
    }

    const updateCoordinatorDetails = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            coordinator: { ...form.coordinator, [e.target.name]: e.target.value }
        })
    }

    useEffect(() => {
        sendKey()
    }, [])

    return (
        <>
            {!validKey ? <div className="font-sans font-medium pl-1">404 - Page Not Found</div> :
                <Layout>

                    <div className="mb-14">
                        <div className="flex flex-row gap-2 justify-center mt-5 text-white">
                            {events.map((key) => {

                                return <button className={`accentText font-medium xsm:w-28 w-24 font-sarabun capitalize bg-black_2  sm_2:w-32 sm:w-44 h-12 color-white   ${key === event ? "border-b-2" : ""}  `} key={
                                    uuid()

                                } onClick={
                                    () => {
                                        setEvent(key)
                                    }

                                }>
                                    {key === "qurious" ? "QuЯious" : key}
                                </button>
                            }
                            )}
                        </div>
                        <div className="flex flex-col justify-center mt-12">
                            <h1 className="text-center font-sarabun text-grey_4 opacity-70 text-xl sm:text-2xl mb-8">Coordinator Details</h1>
                            <div className="flex flex-col gap-2">
                                <input className="text-sm sm_2:text-base sm:w-3/6  sm_2:w-5/12 w-4/5 bg-black_1 placeholder-grey_5 font-sarabun text-white self-center h-10  rounded-md placeholder-opacity-40 pl-2" type="text" placeholder="Name" name="name" disabled={false} value={form.coordinator.name} onChange={(e) => updateCoordinatorDetails(e)}></input>
                                <input className="text-sm sm_2:text-base sm:w-3/6  sm_2:w-5/12 w-4/5 bg-black_1 pl-2 placeholder-grey_5 font-sarabun text-white self-center h-10  rounded-md placeholder-opacity-40 " type="text" placeholder="Email" name="email" value={form.coordinator.email} disabled={false} onChange={(e) => updateCoordinatorDetails(e)} />
                                <input className="text-sm sm_2:text-base sm:w-3/6  sm_2:w-5/12 w-4/5 bg-black_1 pl-2 placeholder-grey_5 placeholder-opacity-40 font-sarabun text-white self-center h-10  rounded-md " type="text" placeholder="Contact" name="contact" value={form.coordinator.contact} disabled={false} onChange={(e) => updateCoordinatorDetails(e)} />

                                <Files
                                    multiple={false}
                                    maxSize="4mb"
                                    multipleMaxCount={3}
                                    convertToBase64={true}
                                    accept={["application/png", "image/jpg", "image/jpeg"]}
                                    onSuccess={files => {
                                        setForm({
                                            ...form,
                                            coordinator: { ...form.coordinator, image: files[0].src.base64, fileName: files[0].name }
                                        })

                                    }}
                                    onError={(err) => toast.error("Image Upload Failed")}
                                >
                                    {({ browseFiles }) => (
                                        <button className="text-sm sm_2:text-base font-medium  sm:w-3/6  sm_2:w-5/12 w-4/5 bg-blue_6 text-white h-10 self-center rounded-md" onClick={browseFiles}>{form.coordinator.fileName || "Upload Image"}</button>
                                    )}
                                </Files>

                            </div>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <div>
                                <Events event={event} events={events} participantCount={participantCount} />
                            </div>
                        </div>
                    </div>
                </Layout>
            }
        </>

    );
}

const Events = ({ event, events, participantCount }) => {
    return <div className="flex gap-4 flex-col">
        <div>
            {events.map((key) => {
                if (key === event) {
                    return <div>
                        <Event event={key} participantCount={participantCount} />
                    </div>
                }
                return null
            }
            )}
        </div>
    </div>
}

export default Register;
