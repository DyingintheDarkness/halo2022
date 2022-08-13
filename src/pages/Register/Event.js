import axios from "axios";
import { useState, useEffect } from "react";
import { useSharedState } from "../../statedrive";
import { registerDataAtom } from "../../statedrive/atoms";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import uuid from "react-uuid"
import Files from "react-butterfiles";

// Bug: Input Losing Focus on Key Press

const Event = ({ event, participantCount }) => {
    const { key } = useParams();
    const [form, setForm] = useSharedState(registerDataAtom);
    const [disableButton, setDisableButton] = useState(true);
    let max = participantCount[event].max;
    let min = participantCount[event].min || max;

    const checkValues = async () => {
        if (form.coordinator.name !== "" && form.coordinator.email !== "") {
            if (form[event].length >= min && form[event].length <= max) {
                for (let i = 0; i < form[event].length; i++) {
                    if (form[event][i].name === "" || form[event][i].contact === "" || form[event][i].image === "" || form[event][i].fileName === "") {
                        return setDisableButton(true)
                    }
                    return setDisableButton(false)
                }
                setDisableButton(false);
            } else {
                setDisableButton(true);
            }
        }
    }
    const addParticipants = async (e, i) => {
        e.preventDefault();
        form[event][i] = {
            ...form[event][i],
            [e.target.name]: e.target.value,
        }
        setForm({ ...form, [event]: [...form[event]] });
    }
    return <>
        <div className="flex flex-col">
            {Object.keys([...Array(max)]).map((i) => {
                return <div key={uuid()} className="flex flex-col justify-center mt-8 gap-2">
                    <h1 className="sm:text-2xl text-center font-sarabun text-grey_4 opacity-70 text-2xl mb-8">Participant {parseInt(i) + 1}</h1>
                    <input className="bg-black_1 pl-2 placeholder-grey_5 placeholder-opacity-40 font-sarabun text-white  sm:w-3/6  sm_2:w-5/12 w-4/5  self-center h-10  rounded-md " type="text" placeholder="Name" name="name" value={form[event][i] ? form[event][i].name : ""} onChange={(e) => addParticipants(e, i)} />
                    <input className="bg-black_1 pl-2 placeholder-grey_5 placeholder-opacity-40 font-sarabun text-white  sm:w-3/6  sm_2:w-5/12 w-4/5  self-center h-10  rounded-md " type="text" placeholder="Contact" minLength={10} name="contact" value={form[event][i] ? form[event][i].contact : ""} onChange={(e) => addParticipants(e, i)} />
                    <Files
                        multiple={false}
                        maxSize="4mb"
                        multipleMaxCount={3}
                        convertToBase64={true}
                        accept={["application/png", "image/jpg", "image/jpeg"]}
                        onSuccess={files => {
                            form[event][i] = {
                                ...form[event][i],
                                image: files[0].src.base64,
                                fileName: files[0].name
                            }
                            setForm({ ...form, [event]: [...form[event]] });

                        }}
                        onError={err => console.log("Image Upload Failed")}
                    >
                        {({ browseFiles }) => (
                            <button className="bg-blue_6 text-white  sm:w-3/6  sm_2:w-5/12 w-4/5  h-10 self-center rounded-md" onClick={browseFiles}>{form[event][i] ? form[event][i].fileName : "Upload Image"}</button>
                        )}
                    </Files>



                </div>
            })}
            <button disabled={disableButton} onClick={async () => {
                await checkValues()
                axios.post(`http://localhost:8080/register/${event}`, {
                    key: key,
                    coordinator: form.coordinator,
                    event: event,
                    participants: form[event]
                })
            }} className={` sm:w-3/12  sm_2:w-4/12 w-3/5 h-12 rounded-md text-white font-sarabun font-bold mt-10 self-center ${disableButton ? "bg-grey_6 bg-opacity-10" : "bg-green_4"}`}>Submit</button>
        </div>
    </>
}

export default Event;